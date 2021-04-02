import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import Select from 'react-select';
import api from "../services/api";
import * as ROUTES from '../constants/routes';

const ManageUpload = (props) => {
    const prop_email = props.location.state
        ? props.location.state.prop_email
        : ''
    const [movieName, setMovieName] = useState('');
    const [movieFile, setMovieFile] = useState('');
    const [movieDescription, setMovieDescription] = useState('')
    const [error, setError] = useState('');
    const hiddenFileInput = React.useRef(null);

    const isInvalid = movieName === '' || movieFile === '';

    const handleManageUpload = (event) => {
        event.preventDefault();
        const uploadMovie = {
            name: movieName,
            movieFile: movieFile,
            movieDescription: movieDescription
        };
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
                            placeholder="Descrição do Filme"
                            value={movieDescription}
                            onChange={({ target }) => setMovieDescription(target.value)}
                        />
                        <Form.Button 
                            // onClick={handleClick}
                        >
                            Clique e faça o upload do arquivo
                        </Form.Button>
                        <Form.InputFile
                            ref={hiddenFileInput}
                            value={movieFile}
                            onChange={({ target }) => setMovieFile(target.value)}
                            style={{display: 'none'}}
                        />
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
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
