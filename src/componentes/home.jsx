import '../componentes/home.css'


function Home(){
    const noticias = [
        {
          id: 1,
          imagem: "https://source.unsplash.com/400x300/?technology",
          titulo: "Nova IA revoluciona o mercado",
          descricao: "Uma nova tecnologia promete mudar a forma como usamos inteligência artificial."
        },
        {
          id: 2,
          imagem: "https://source.unsplash.com/400x300/?programming",
          titulo: "React domina o mercado",
          descricao: "React continua sendo uma das bibliotecas mais usadas do mundo."
        },
        {
          id: 3,
          imagem: "https://source.unsplash.com/400x300/?cybersecurity",
          titulo: "Segurança digital em alta",
          descricao: "Ataques cibernéticos aumentam e exigem mais proteção."
        }
    ];
    
    return(
        <>
        <div className="container">
            {noticias.map(noticia => (
                <div key={noticia.id} className="noticia">
                    <img src={noticia.imagem} alt={noticia.titulo} />
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.descricao}</p>
                </div>
            ))}
        </div>
      
        </>
    )
}
export default Home