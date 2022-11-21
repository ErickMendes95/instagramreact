import { useState } from "react"

export default function Acoes(){
    const [numeroLike, setNumeroLike] = useState(Number("101.523").toFixed(3))
    function mudarNumeroLike(){
        if(nomeLike === "heart"){
            setNumeroLike(Number(numeroLike) - 1)
        } else if(nomeLike === "heart-outline"){
            setNumeroLike(Number(numeroLike) + 1)
        }

    }

    const [nomeLike, setNomeLike] = useState("heart-outline")
    const [corLike, setCorLike] = useState("#000")
    function mudarLike(){
        if(nomeLike === "heart-outline"){
            setNomeLike("heart")
            setCorLike("#f00")
            mudarNumeroLike()
        } else if (nomeLike === "heart"){
            setNomeLike("heart-outline")
            setCorLike("#000")
            mudarNumeroLike()
        }
    }

    const [nomeBookmark, setNomeBookmark] = useState("bookmark-outline")
    const [corBookmark, setCorBookmark] = useState("#000")
    function mudarBookmark(){
        if(nomeBookmark === "bookmark-outline"){
            setNomeBookmark("bookmark")
            setCorBookmark("#fc0")
        } else if (nomeBookmark === "bookmark"){
            setNomeBookmark("bookmark-outline")
            setCorBookmark("#000")
        }
    }
}