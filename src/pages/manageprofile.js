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
            drive_path: movieFile,
            studio: movieDescription
        };

        console.log(uploadMovie)

        // if (Se o filme não for de peso maior que tal){}
        axios
            .post(`https://disney-flix.herokuapp.com/movie`, uploadMovie)
            .then(
                ({elem}) => {
                    console.log(elem)
                    if(elem.success) {
                        alert(elem.message)
                    } else {
                        alert(elem.message ? elem.message : 'Aconteceu algum erro na hora de fazer o upload do filme!')
                    }
                })
        // else{
        //     alert('O filme pesar menos que tanto')
        // }        
    };

    return (

        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Preencha os campos para enviar um filme.</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleManageUpload} method="POST">
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
                        >
                        </Form.Input>
                        <Form.InputFile
                            id='selectMovie'
                            value={movieFile}
                            onChange={({ target }) => setMovieFile(target.value)}
                            hidden 
                        />
                        <Form.Submit disabled={isInvalid} type="submit" >
                        {/* data-testid="sign-up" */}
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
