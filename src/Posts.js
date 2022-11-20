const postagens =[
    {imagemUsuario: "assets/img/meowed.svg", usuario: "meowed", postagem: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", usuarioCurtida: "respondeai"},
    {imagemUsuario: "assets/img/barked.svg", usuario: "barked", postagem: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", usuarioCurtida: "adorable_animals"}
]

export default function Posts() {
    return (
        <div className="posts">
            {postagens.map((p) => (
                <div className="post">
                <Topo image={p.imagemUsuario} user={p.usuario}/>
                <Conteudo post={p.postagem}/>
                <Fundo image={p.imagemCurtida} user={p.usuarioCurtida}/>
                </div>
                ))}
        </div>  
    )
    
}



function Topo({image, user}){
    return(
        
        <div className="topo">
              <div className="usuario">
                <img src={image} />
                {user}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
    )
}

function Conteudo({post}){
    return(
        
        <div className="conteudo">
              <img src={post} />
            </div>
        
    )
}

function Fundo({image, user}){
    return(
        
        <div className="fundo">
            <div className="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>

        <div className="curtidas">
          <img src={image} />
          <div className="texto">
            Curtido por <strong>{user}</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
        </div>
      
    )
}