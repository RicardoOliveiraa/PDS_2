import React , {useState, useContext, useEffect} from 'react'
import { useHistory, Redirect , useLocation} from 'react-router-dom';
import {SelectProfileContainer} from './profiles'
import { FooterContainer } from './footer';
import { Card, Header, Loading, Player } from '../components'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import Fuse from 'fuse.js'
import axios from 'axios';
import { gapi } from 'gapi-script';
// import {google} from 'googleapis';



export function BrowseContainer ({slides}) {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'))
    const Token = sessionStorage.getItem('token')

    const [category, setCategory] = useState('films');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);  
    const [files_drive, setFilesDrive] = useState([]);  
    const [movieUrl, setMovieUrl] = useState("")

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    async function GetImageUrl(id ,access) {
        const drive_url = `https://www.googleapis.com/drive/v3/files/${id}/?fields=webContentLink`;

        let drive_request = {
            method: "GET",
            headers: new Headers({
                Authorization: "Bearer "+access
            })                    
        }
        let url = await fetch(drive_url, drive_request)
        let jsonData = await url.json()
        return jsonData.webContentLink
    }
    async function GetAccessToken() {
        const refresh_token = "1//046GmdRg_4Fe2CgYIARAAGAQSNwF-L9IrnEv5y7oFqxvJ8c_TVq1zd6sV0loXEJjgq5EMfgXhueApXMV-fmWimcmdEyRRtEwCIXY";
        const client_id = "688648085961-48ol9p3qdqn8dq6nqoi2m2455rlqp84n.apps.googleusercontent.com";
        const client_secret = "5O7JlAqGTutFWjttiyrpuPtN";
        const refresh_url = "https://www.googleapis.com/oauth2/v3/token";
        const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}&refresh_token=${encodeURIComponent(refresh_token)}`;
        
        let refresh_request = {
            body: post_body,
            method: "POST",
            headers: new Headers({ 
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }
        let urlFile = await fetch(refresh_url, refresh_request)
        let accessResponse = await urlFile.json()
        return accessResponse.access_token
    }

    async function GetDriveElemById(id, token) {
        let access = await GetAccessToken()
        let urlFile = await GetImageUrl(id, access)
        return urlFile
    }

    const brazilianToEnglish = {
        Drama: 'drama',
        Terror: 'thriller',
        Infantil: "children",
        Suspense: "suspense",
        Romance: "romance",
        'Boas Vibes': "good-vibes"
    }


    useEffect(() => {
        axios   
        .get(`https://disney-flix.herokuapp.com/auth/movie`, { headers: { 'Authorization': `${Token}`}})
            .then(
                ({ data }) => {
                    if(data.success) {
                        data.movies.forEach(movie => {
                            slides.films.forEach(category => {
                                console.log(movie.genre, brazilianToEnglish[category.title])
                                if(brazilianToEnglish[category.title] == movie.genre) {
                                    category.data.push({
                                        title: movie.title,
                                        description: movie.description,
                                        genre: movie.genre,
                                        docId: movie._id,
                                        big_image: movie.big_image_url,
                                        small_image: movie.small_image_url,
                                        movie: movie.movie_url,
                                        maturity: movie.maturity
                                    })
                                } 
                            })
                        })
                    } else {
                        alert(data.message ? data.message : 'Aconteceu algum erro ')
                    }
                }
            )
    }, [])

    useEffect(() => {
        setSlideRows(slides[category]);            
    }, [slides, category]);


    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }        
    }, [searchTerm]);

    const handleLogout = () => {
        localStorage.clear()

        history.push("/home")
    }

    // console.log(JSON.stringify(slideRows, null, 2), category)
    return profile.displayName ? (
        <>
            {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')} fontWeight="bold">
                            Series
                        </Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')} fontWeight="bold">
                            Filmes
                        </Header.TextLink>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={profile.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={profile.photoURL} />
                                    <Header.TextLink>{profile.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => handleLogout()}>Deslogar</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Veja o Coringa Agora</Header.FeatureCallOut>
                    <Header.Text>
                        Para sempre sozinho em uma multidão, o comediante fracassado Arthur Fleck busca conexão enquanto caminha pelas ruas de Gotham City. Arthur usa duas máscaras - a que ele pinta para seu trabalho diurno como palhaço, e o disfarce que ele projeta em uma tentativa inútil de se sentir parte do mundo ao seu redor.
                    </Header.Text>
                    {/* <Header.PlayButton>Play</Header.PlayButton> */}
                </Header.Feature>
            </Header>
    
          <Card.Group>
            {slideRows.map((slideItem) => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item key={item.docId} item={item}  >
                                <Card.Image src={item.small_image || `/images/${category}/${item.genre}/${item.slug}/small.jpg`} onClick={() => setMovieUrl(item.movie)} />
                                <Card.Meta onClick={() => setMovieUrl(item.movie)}>
                                <Card.SubTitle onClick={() => setMovieUrl(item.movie)}>{item.title}</Card.SubTitle>
                                <Card.Text onClick={() => setMovieUrl(item.movie)}>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                        <Player.Button />
                        <Player.Video src={movieUrl} />
                        </Player>
                    </Card.Feature>
                </Card>
            ))}
          </Card.Group>
          <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}