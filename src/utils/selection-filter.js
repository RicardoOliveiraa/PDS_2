export default function selectionFilter ({series, films}){
    return{
        series: [
            {
                title: 'Documentários', data: series.filter((item)=> item.genre === 'documentaries'),
            },
            {
                title: 'Comédias', data: series.filter((item)=> item.genre === 'comedies'),
            },
            {
                title: 'Infantil', data: series.filter((item)=> item.genre === 'children'),
            },
            {
                title: 'Crime', data: series.filter((item)=> item.genre === 'crime'),
            },
            {
                title: 'Boas vibes', data: series.filter((item)=> item.genre === 'feel-good'),
            },
        ],
        films: [
            {
                title: 'Drama', data: films.filter((item)=> item.genre === 'drama'),
            },
            {
                title: 'Terror', data: films.filter((item)=> item.genre === 'thriller'),
            },
            {
                title: 'Infantil', data: films.filter((item)=> item.genre === 'children'),
            },
            {
                title: 'Suspense', data: films.filter((item)=> item.genre === 'suspense'),
            },
            {
                title: 'Romance', data: films.filter((item)=> item.genre === 'romance'),
            },
            {
                title: 'Boas Vibes', data: films.filter((item)=> item.genre === 'good-vibes'),
            },
        ]
    };
}