import Meals from "../component/Meals";
import Slide from "../component/Slide"
import Navigation from "../component/Navigation";
function App() {
  const meals = [
    {
      id: Math.random(),
      name: "Pozole",
      description:"Pozole Rojo con carne de res con grano de maiz blanco y con salsas de varias",
      price: 100,
      image:"https://mccormick.widen.net/content/q6gbyckejj/jpeg/el_guapo_pozole1838.jpg?crop=true&anchor=331,0&q=80&color=ffffffff&u=o2hyef&w=1365&h=1365"
    },
    {
      id: Math.random(),
      name: "Pizza",
      description:"esto es una pizza",
      price: 250,
      image:"https://tse3.mm.bing.net/th/id/OIP.byhzcuCGbbirAdL5gCEtnQAAAA?pid=ImgDet&rs=1"
    },
    {
      id: Math.random(),
      name: "hamburguesa",
      description:"esto es un hamburguesa",
      price: 250,
      image:"https://th.bing.com/th/id/R.b08b0cc3686c8fd75bded1df44b0651d?rik=0YMs3TFDXj8NKw&pid=ImgRaw&r=0"
    },
    {
      id: Math.random(),
      name: "Hot Dog",
      description:"Esto es un Hot Dog",
      price: 250,
      image:"https://th.bing.com/th/id/R.28659920f022e52ed3d09eda8fc05938?rik=QWUNONVd60J0bA&pid=ImgRaw&r=0"
    },
  ];

  return (
    <div>
      <Navigation/>
      <div >
        <Slide/>
      </div>
      <Meals items={meals} />
    </div>
  );
}

export default App;