import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar(){
    return (
        <div className="sidebar">
            <Usuario usuario="catanacomics"/>
            <Sugestoes/>
        </div>
    )
}