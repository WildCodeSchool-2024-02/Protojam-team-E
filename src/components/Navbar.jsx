import {Link} from "react-router-dom";
export default function Navbar() {
    return(
       <nav className="bg-green-700 flex text-l text-white justify-between px-4 h-20">
        <span className="text-3xl my-auto">CheminVert</span>
            <ul className="flex gap-5 my-auto">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/About">À propos</Link>
                </li>
                <li>
                <Link to="/Activities">Activités</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
</nav>

)}