export default function HomeActivity() {
  return (
    <>
    <h2 className="text-center text-3xl font-bold mb-6 pt-6">Nos activités par catégories</h2>
    <div className="grid grid-cols-3 gap-3 p-4">
      <div className="border rounded-md">
        <img  className="flex justify-center mb-4" src="https://www.smartbox.com/fr/blog/wp-content/uploads/2016/11/dormir-a-la-belle-etoile-scaled.jpg" />
        <h2 className="">Nuit insolite</h2>
      </div>
      <div className="border rounded-md">
        <img src="https://plus.unsplash.com/premium_photo-1664300099442-693ae7718393?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h2>Loisirs</h2>
      </div>
      <div className="border rounded-md">
        <img className="" src="https://images.unsplash.com/photo-1559222830-f2620019146e?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h2>Week-end déconnexion</h2>
      </div>
      <div className="border rounded-md">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/11/3d/a6/visite-au-parc-de-sceaux.jpg?w=1200&h=-1&s=1" />
        <h2>Parc</h2>
      </div>
      <div className="border rounded-md">
        <img src="https://www.rambouillet-tourisme.fr/wp-content/uploads/2022/03/Rando-Conseil-Cernay-@OTCV-17-1000x750.jpg" />
        <h2>Randonnée</h2>
      </div>
    </div>
    </>
  );
}
