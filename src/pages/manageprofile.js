import React, { useState, useCallback, useRef, useEffect, useContext } from 'react';
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
    const [movieImageBig, setMovieImageBig] = useState('')
    const [movieImageMedium, setMovieImageMedium] = useState('')
    const [movieImageSmall, setMovieImageSmall] = useState('')
    
    const [upImg, setUpImg] = useState();
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [completedCrop, setCompletedCrop] = useState(null);
    const [crop, setCrop] = useState({ unit: 'px', width: 200, height: 67, keepSelection:true, locked:true });
    

    const [error, setError] = useState('');
    const hiddenFileInput = React.useRef(null);
    
    const Token = sessionStorage.getItem('token')

    const isInvalid = movieName === '' || movieFile === '' || movieGender === '' ;
    const handleClick = () => {
        document.getElementById("selectMovie").click()
    };

    
    const handleManageUpload = (event) => {
        event.preventDefault();
        console.log('movieFile',movieFile)
        
        const uploadMovie = {
            title: movieName,
            gender: movieGender,
            file: movieFile,
            studio: movieDescription, 
            image_big: movieImageBig,
            image_medium: movieImageMedium,
            image_small: movieImageSmall
        };
        console.log('uploadMovie', uploadMovie)
        let formData = new FormData();

        formData.append('title', movieName)
        formData.append('gender', movieGender);
        formData.append('file', movieFile);
        formData.append('studio', movieDescription);
        formData.append('image_big', movieDescription);
        formData.append('image_medium', movieDescription);
        formData.append('image_small', movieDescription);

        console.log(formData)
        var MaxMovieSize = 10485760 //10MB
        if (movieFile.size <= MaxMovieSize && movieFile.type === 'video/mp4'){
        axios
            .post(`https://disney-flix.herokuapp.com/auth/movie`, formData, { headers: { 'Authorization': `${Token}`}, "Content-type": "multipart/form-data",})
            .then(
                (elem) => {
                    console.log(elem)
                    if(elem.data.success) {
                        alert(elem.data.message)
                    } else {
                        alert(elem.data.message ? elem.data.message : 'Aconteceu algum erro na hora de fazer o upload do filme!')
                    }
                })
        } else{
            alert('O filme deve ter um tamanho menor ou igual a 10MB e o arquivo deve ser no formato MP4!')
        }    
        
    };

    return (

        <>
            <HeaderContainer>
                <Form.ContainerManage>
                    <Form.Title>Preencha os campos para enviar um filme.</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Manage onSubmit={handleManageUpload} method="POST" enctype="multipart/form-data">
                        <Form.InputManage
                            type="text"
                            placeholder="Nome do Filme"
                            value={movieName}
                            onChange={({ target }) => setMovieName(target.value)}
                        />
                        <Form.InputManage
                            type="text"
                            placeholder="Genero do Filme"
                            value={movieGender}
                            onChange={({ target }) => setMovieGender(target.value)}
                        />
                        <Form.TextArea
                            type="text"
                            placeholder="Descrição do Filme"
                            value={movieDescription}
                            onChange={({ target }) => setMovieDescription(target.value)}
                        />
                        {/* <Form.Input
                            readOnly
                            placeholder="Clique e faça o upload do arquivo"
                            onClick={handleClick}                            
                            hidden 
                        >
                        </Form.Input> */}
                        <Form.MyLabel>
                            Faça o upload as imagens do Filme.
                        </Form.MyLabel>
                        <Form.InputFile
                            id='selectImage1'
                            accept="image/*"
                            onChange={({ target }) => setMovieImageBig(target.files[0])}                            
                        />
                                                
                        <Form.InputFile
                            id='selectImage2'
                            onChange={({ target }) => setMovieImageMedium(target.files[0])}                            
                        />
                        <Form.InputFile
                            id='selectImage3'
                            onChange={({ target }) => setMovieImageSmall(target.files[0])}                            
                        />
                        <Form.MyLabel>
                            Faça o upload do arquivo do Filme.
                        </Form.MyLabel>
                        <Form.InputFile
                            id='selectMovie'
                            // value={movieFile}
                            onChange={({ target }) => setMovieFile(target.files[0])}                            
                        />
                        <Form.Submit  disabled={isInvalid} type="submit" >
                            Enviar o novo filme
                        </Form.Submit>
                    </Form.Manage>
                </Form.ContainerManage>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default ManageUpload
