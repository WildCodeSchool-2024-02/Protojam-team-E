export default function Footer() {
  return (
    <footer className="bg-gray-300 bg-opacity-30 border-t border-green-700 text-black mt-5 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/logoNav.png" alt="Chemin Vert Logo" className="h-8 mr-2" />
          <img className="w-24 ml-5" src="/src/assets/logoNavmilieu.png" alt="Chemin Vert Logo"/>
          </div>
        <div className="text-sm">© 2024 All rights reserved.</div>
      </div>
    </footer>
  );
}