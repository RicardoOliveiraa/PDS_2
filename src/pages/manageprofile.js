import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import api from "../services/api";
import * as ROUTES from '../constants/routes';
import axios from 'axios';

const ManageUpload = (props) => {
    const [movieName, setMovieName] = useState('');
    const [movieFile, setMovieFile] = useState('');
    const [movieGender, setMovieGender] = useState('');
    const [movieDescription, setMovieDescription] = useState('')
    const [error, setError] = useState('');
    const hiddenFileInput = React.useRef(null);

    const isInvalid = movieName === '' || movieFile === '' || movieGender === '' ;
    const handleClick = () => {
        document.getElementById("selectMovie").click()
    };
    const handleManageUpload = (event) => {
        event.preventDefault();
        const uploadMovie = {
            title: movieName,
            gender: movieGender,
            file: movieFile,
            studio: movieDescription
        };

        var input = document.getElementById('selectMovie');
        var file = input.files[0]; 
        var MaxMovieSize = 10485760 //10MB
        if (file.size <= MaxMovieSize && file.type === 'video/mp4'){
        axios
            .post(`https://disney-flix.herokuapp.com/auth/movie`, uploadMovie)
            .then(
                ({elem}) => {
                    console.log(elem)
                    if(elem.success) {
                        alert(elem.message)
                    } else {
                        alert(elem.message ? elem.message : 'Aconteceu algum erro na hora de fazer o upload do filme!')
                    }
                })
        } else{
            alert('O filme deve ter um tamanho menor ou igual a 10MB e o arquivo deve ser no formato MP4!')
        }        
    };

    return (

        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Preencha os campos para enviar um filme.</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleManageUpload} method="POST" enctype="multipart/form-data">
                    {/* <form method="POST" enctype="multipart/form-data" > */}
                        <Form.Input
                            type="text"
                            placeholder="Nome do Filme"
                            value={movieName}
                            onChange={({ target }) => setMovieName(target.value)}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Categoria do Filme"
                            value={movieGender}
                            onChange={({ target }) => setMovieGender(target.value)}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Descrição do Filme"
                            value={movieDescription}
                            onChange={({ target }) => setMovieDescription(target.value)}
                        />
                        <Form.Input
                            readOnly
                            placeholder="Clique e faça o upload do arquivo"
                            onClick={handleClick}                            
                            hidden 
                        >
                        </Form.Input>
                        <Form.InputFile
                            id='selectMovie'
                            value={movieFile}
                            onChange={({ target }) => setMovieFile(target.value)}
                            
                        />
                        <Form.Submit disabled={isInvalid} type="submit" >
                            Enviar o novo filme
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default ManageUpload
