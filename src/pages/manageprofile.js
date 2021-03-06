import React, { useState, useCallback, useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, ImageCropper } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import api from "../services/api";
import * as ROUTES from '../constants/routes';
import axios from 'axios';
import { Header } from '../components';
import logo from '../logo.svg';
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { Card } from '../components'

const genders = [
    {
        value: 'drama', label: 'Drama',
    },
    {
        value: 'thriller', label: 'Terror',
    },
    {
        value: 'children', label: 'Infantil',
    },
    {
        value: 'suspense', label: 'Suspense',
    },
    {
        value: 'romance', label: 'Romance'
    },
    {
        value: 'good-vibes', label: "Boas Vibes"
    }
    
  ]
  
const maturitys = [
    {
        value: '0', label: 'Livre'
    },
    {
        value: '12', label: '+12'
    },
    {
        value: '16', label: '+16'
    },
    {
        value: '18', label: '+18'
    },
]
  const customStyles = {
    
    option: provided => ({
      backgroundColor: "#0000",  
      marginTop: 0,
    }),
    control: provided => ({
      backgroundColor: "#333",
      marginBottom: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      display: 'flex',
      width: 220,
      marginRight: 50,
      
    }),
    placeholder: () => ({
      color: '#757575',
      marginLeft: 15
    }),
    singleValue: () => ({
      color: '#757575',
      marginLeft: 15
    }),
  
  }

const ManageUpload = (props) => {
    const history = useHistory();
    const [movieName, setMovieName] = useState('');
    const [movieFile, setMovieFile] = useState('');
    const [movieMaturity, setMovieMaturity] = useState('');
    const [movieDescription, setMovieDescription] = useState('')
    const [movieImageBig, setMovieImageBig] = useState('')
    const [movieImageSmall, setMovieImageSmall] = useState('')
    const [movieGenre, setMovieGenre] = useState('')

    const [blob, setBlob] = useState(null)
    const [inputImg, setInputImg] = useState('')

    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob)
    }

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const [error, setError] = useState('');
    const hiddenFileInput = React.useRef(null);
    
    const Token = sessionStorage.getItem('token')
    
    const isInvalid = movieName === '' || movieFile === '' || movieGenre === '' || movieMaturity === '' || movieDescription === '' || movieImageBig === "" || movieImageSmall === "";
    const handleClick = () => {
        document.getElementById("selectMovie").click()
    };

    const handleImageCropSave = () => {
        setInputImg('')
        setMovieImageSmall(blob)
    }
    
    const handleManageUpload = (event) => {
        event.preventDefault();
        let formData = new FormData();
        const hasNeededField = movieName && movieMaturity && movieGenre && movieFile && movieDescription && movieImageBig && movieImageSmall

        formData.append('title', movieName)
        formData.append('maturity', movieMaturity);
        formData.append('genre', movieGenre);
        formData.append('movie', movieFile);
        formData.append('description', movieDescription);
        formData.append('image_big', movieImageBig);
        formData.append('image_small', movieImageSmall);

        var MaxMovieSize = 104857600 //10MB
        if (hasNeededField) {
            if (movieFile.type === 'video/mp4') {
                if (movieFile.size <= MaxMovieSize) {
                    setMovieName('')
                    setMovieMaturity('')
                    setMovieGenre('')
                    setMovieDescription('')
                    setMovieImageBig('')
                    setMovieImageSmall('')
                    axios
                        .post(`https://disney-flix.herokuapp.com/auth/movie`, formData, { headers: { 'Authorization': `${Token}`}, "Content-type": "multipart/form-data",})
                        .then(
                            (elem) => {
                                if(elem.data.success) {
                                    alert(elem.data.message)
                                    history.push("/home")
                                } else {
                                    alert(elem.data.message ? elem.data.message : 'Aconteceu algum erro na hora de fazer o upload do filme!')
                                }
                            })
                } else{
                    alert('O filme deve ter um tamanho menor ou igual a 10MB')
                }    
            } else {
                alert("O formato do arquivo deve ser MP4")
            }
        } else {
            alert("Todos os campos são necessários!!")
        }
    };

    return (

        <>
            {/* <Form.Body> */}
            <Header>
                    <Form.Block>
                        <Header.Logo to={ROUTES.HOME} alt="Disneyflix" src={logo} />
                    </Form.Block>
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
                        {/* <Form.InputManage
                            type="text"
                            placeholder="Classificação do Filme"
                            value={movieMaturity}
                            onChange={({ target }) => setMovieMaturity(target.value)}
                        /> */}
                        <Select
                            styles={customStyles}
                            options={maturitys}
                            placeholder="Faixa Etária"
                            onChange={({ value }) => setMovieMaturity(value)}
                        />
                        {/* <Form.InputManage
                            type="text"
                            placeholder="Categoria do Filme"
                            value={movieGenre}
                            onChange={({ target }) => setMovieGenre(target.value)}
                        /> */}
                        <Select
                            styles={customStyles}
                            options={genders}
                            placeholder="Genero"
                            onChange={({ value }) => setMovieGenre(value)}
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
                        
                        <Form.MyLabel for="big">
                            Imagem Grande.
                        </Form.MyLabel>
                        <Form.InputFile
                            name="big"
                            id='selectImage1'
                            onChange={({ target }) => setMovieImageBig(target.files[0])}                            
                        />
                        <Form.MyLabel for="small">
                            Imagem Pequena.
                        </Form.MyLabel> 
                        <Form.InputFile
                            name="small"
                            id='selectImage3'
                            onChange={onInputChange}                            
                        />
                        {
                            inputImg && (
                                <Card>
                                    <ImageCropper
                                        getBlob={getBlob}
                                        inputImg={inputImg}
                                    />
                                    <Form.Button onClick={() => handleImageCropSave()}>
                                        Confirmar
                                    </Form.Button>
                                </Card>
                            )
                            
                        }
                        <Form.MyLabel>
                            Faça o upload do arquivo do Filme.
                        </Form.MyLabel>
                        <Form.InputFile
                            id='selectMovie'
                            // value={movieFile}
                            onChange={({ target }) => setMovieFile(target.files[0])}                            
                        />
                        <Form.Block>
                            <Form.Submit  disabled={isInvalid} type="submit">
                                Enviar o novo filme
                            </Form.Submit>
                        </Form.Block>
                        
                    </Form.Manage>
                </Form.ContainerManage>
            <FooterContainer />
            </Header>
        </>
    );
}

export default ManageUpload