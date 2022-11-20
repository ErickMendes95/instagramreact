const arraySugestoes = [
    {imagem:"assets/img/bad.vibes.memes.svg", usuario:"bad.vibes.meme", texto:"Segue você"},
    {imagem:"assets/img/chibirdart.svg", usuario:"chibirdart", texto:"Segue você"},
    {imagem:"assets/img/razoesparaacreditar.svg", usuario:"razoesparaacreditar", texto:"Novo no Instagram"},
    {imagem:"assets/img/adorable_animals.svg", usuario:"adorable_animals", texto:"Segue você"},
    {imagem:"assets/img/smallcutecats.svg", usuario:"smallcutecats", texto:"Segue você"}
]

export default function Sugestoes() {
    return (
        <>
        <div className="sugestoes">
            <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>
            {arraySugestoes.map((s) => (
                <div className="sugestao">
                    <div className="usuario">
                      <img src={s.imagem} />
                    <div className="texto">
                        <div className="nome">{s.usuario}</div>
                        <div className="razao">{s.texto}</div>
                    </div>
                </div>
    
                <div className="seguir">Seguir</div>
              </div>
            ))}
        </div>
        <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
      </>
    )    
}