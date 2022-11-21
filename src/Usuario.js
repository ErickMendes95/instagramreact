import { useState } from "react"


export default function Usuario(props) {
    const [nome,setNome] = useState("Catana")
    const [imagem,setImagem] = useState("assets/img/catanacomics.svg")

    function inserirNome(){
        setNome(prompt("Escreve o nome que deseja"))
    }

    function inserirImagem(){
        setImagem(prompt("Insira o link da imagem"))
    }
    return (
            <div data-test="user" className="usuario">
                <img data-test="profile-image" onClick={inserirImagem} src={imagem}/>
                <div className="texto">
                    <strong>{props.usuario}</strong>
                    <span>
                          <span data-test="name">{nome}</span>
                          <ion-icon data-test="edit-name" name="pencil" onClick={inserirNome}></ion-icon>
                    </span>
                </div>
            </div>
    )
}