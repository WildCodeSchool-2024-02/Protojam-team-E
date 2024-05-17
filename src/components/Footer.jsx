import logo from "../assets/logoNav.png"; 
import logomilieu from "../assets/logoNavmilieu.png";
import logoprincipal from "../assets/logoprincipal.png";


export default function Footer() {
  return (
    <footer className="flex text-l text-black justify-between h-20 border border-green-700  mt-6 bg-gradient-to-br">
          <img src={logo} alt="Chemin Vert Logo" className="h-full px-5 my-auto md:w-32 lg:w-40 w-28 hidden md:block lg:block" style={{ height: '3rem' }} />
          <img src={logoprincipal} alt="Logoprincipal" className="h-full px-5 my-auto md:w-32 lg:w-40 w-28 md:hidden lg:hidden" style={{ height: '3rem' }} />
          <img src={logomilieu} alt="Logomilieu" className="h-full px-5 my-auto ml-20 md:w-32 lg:w-48 w-28 md:h-12 lg:h-12 hidden md:block lg:block" />
          <div className="text-sm flex items-center">© 2024 All rights reserved.</div>
    </footer>
  );
}