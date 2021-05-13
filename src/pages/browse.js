import React from 'react';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter'

const Browse = (props) => {
    const user = props.location.state

    var series = [
        { title: "Tigre Rei", slug: "tiger-king", genre: "documentaries", id: "0", maturity: "0", description: "Com camisas de cores chamativas, um corte de cabelo peculiar e sua propensão a provocar e se exibir, Joe Exotic se apresenta diante dos olhos dos espectadores como um excêntrico personagem, que se define como: um gay provinciano amante dos grandes felinos", movie: "/videos/bunny.mp4"},
        { title: "Tiro Longo", slug: "long-shot", genre: "crime", id: "1", maturity: "16", description: "Ao ser preso por um assassinato que não cometeu, Juan Catalan tenta provar sua inocência usando as cenas cortadas de um programa de TV", movie: "/videos/bunny.mp4"},
        { title: "Family Guy", slug: "family-guy", genre: "comedies", id: "2", maturity: "18", description: "A história da série gira em torno dos Griffins, uma família disfuncional que consiste nos pais Peter e Lois; os filhos Meg, Chris e Stewie; e o seu animal de estimação, o cão antropomórfico Brian", movie: "/videos/bunny.mp4"},
        { title: "Patrulha Canina", slug: "paw-patrol", genre: "children", id: "3", maturity: "0", description: "A patrulha canina!", movie: "/videos/bunny.mp4" },
    ]

    var films = [
        { title: "Zodiac", slug: "zodiac", genre: "suspense", id: "0", maturity: "18", description: "Baseado em fatos reais, este drama assustador relata as manobras de um assassino que age nas ruas de San Francisco e deixa pistas nos jornais. Com:Jake Gyllenhaal,Mark Ruffalo,Robert Downey Jr. Jake Gyllenhaal, Mark Ruffalo e Robert Downey Jr.", movie: "/videos/bunny.mp4"},
        { title: "Frozen", slug: "frozen", genre: "children", id: "1", maturity: "0", description: "Frozen é um filme de animação musical estadunidense, o 53.º animado dos Clássicos Disney produzido pela Walt Disney Animation Studios e distribuído pela Walt Disney Pictures. Inspirado pelo conto de fadas A Rainha da Neve, de Hans Christian Andersen, narra as desventuras das irmãs reais de Arendelle.", movie: "/videos/bunny.mp4"},
        { title: "Um Lugar Silencioso", slug: "a-quiet-place", genre: "thriller", id: "2", maturity: "18", description: "A Quiet Place (no original) se passa num futuro pós-apocalíptico não muito distante, onde a Terra foi invadida por extraterrestres. Pouco se sabe sobre os invasores, apenas que são cegos e que, ao captar qualquer barulho a partir de um certo nível de ruído, atacam a fonte sonora de forma implacável.", movie: "/videos/bunny.mp4"},
        { title: "O Regresso", slug: "the-revenant", genre: "drama", id: "3", maturity: "16", description: "Na década de 1820, um caçador de peles luta pela sobrevivência e para se vingar de um mercenário impiedoso que o abandonou para morrer no rio Missouri. Esta saga de vingança foi nomeada para 12 Óscares e venceu três, incluindo o de Melhor Ator para Leonardo DiCaprio.", movie: "/videos/bunny.mp4"},
        { title: "Titanic", slug: "titanic", genre: "romance", id: "4", maturity: "12", description: "É uma história de ficção do naufrágio real do RMS Titanic, estrelando Leonardo DiCaprio como Jack Dawson, e Kate Winslet como Rose DeWitt Bukater, membros de diferentes classes sociais que se apaixonam durante a fatídica viagem inaugural no navio saindo de Southampton para Nova York em 15 de Abril de 1912.", movie: "/videos/bunny.mp4"},
    ]
    const slides = selectionFilter({ series, films })

    return <BrowseContainer slides={slides} />
}

export default Browse