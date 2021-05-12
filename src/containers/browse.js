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

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    async function  GetDriveElemById(id) {
        const refresh_token = "1//046GmdRg_4Fe2CgYIARAAGAQSNwF-L9IrnEv5y7oFqxvJ8c_TVq1zd6sV0loXEJjgq5EMfgXhueApXMV-fmWimcmdEyRRtEwCIXY";
        const client_id = "688648085961-48ol9p3qdqn8dq6nqoi2m2455rlqp84n.apps.googleusercontent.com";
        const client_secret = "5O7JlAqGTutFWjttiyrpuPtN";
        const refresh_url = "https://www.googleapis.com/oauth2/v3/token";
        const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}&refresh_token=${encodeURIComponent(refresh_token)}`;
        
        
        axios
        .post('https://www.googleapis.com/oauth2/v3/token',  {body: post_body ,headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).then((elem)=>{
            console.log('com axios', elem)
        }).catch((e)=>{
            console.log('deu ruim',e)
        })
        
        
        
        
        
        
        
        // let refresh_request = {
        //     body: post_body,
        //     method: "POST",
        //     headers: new Headers({
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     })
        // }
        // const teste = await fetch(refresh_url, refresh_request).then( response => {
        //         return(response.json());
        //     }).then( response_json =>  {
        //         const drive_url = `https://www.googleapis.com/drive/v3/files/${id}/?fields=thumbnailLink`;
        //         let drive_request = {
        //             method: "GET",
        //             headers: new Headers({
        //                 Authorization: "Bearer "+response_json.access_token
        //             })                    
        //         }
        //         fetch(drive_url, drive_request).then( response => {
        //             return(response.json());
        //         }).then( file =>  {
        //             console.log(file.thumbnailLink)
        //             return file.thumbnailLink
        //         });
        // });
        
        // console.log('aaaaaaaa', teste)
        // return 'urlFile'
    }
    useEffect(() => {
        axios   
        .get(`https://disney-flix.herokuapp.com/auth/movie`, { headers: { 'Authorization': `${Token}`}}).then(
        (elem) => {
            console.log('AXIOS',elem)
            if(elem.data.success) {
                elem.data.data.forEach(element => {
                    slides.films.forEach(el =>{
                        if(el.title == element.gender) {
                            el.data.push({
                                title: element.title,
                                description: element.description,
                                gender: element.gender,
                                id: element._id,
                                big_image: GetDriveElemById(element.big_image_id),
                                medium_image: GetDriveElemById(element.medium_image_id),
                                small_image: GetDriveElemById(element.small_image_id),
                                movie: GetDriveElemById(element.movie_id)
                            })
                        } 
                    })
                })
                console.log(slides)
            } else {
                alert(elem.data.message ? elem.data.message : 'Aconteceu algum erro ')
            }
        })    
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
                        {/* <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')} fontWeight="bold">
                            Series
                        </Header.TextLink> */}
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
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
    
          <Card.Group>
            {slideRows.map((slideItem) => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                <Card.SubTitle>{item.title}</Card.SubTitle>
                                <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                        <Player.Button />
                        <Player.Video src="/videos/bunny.mp4" />
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