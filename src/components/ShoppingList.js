import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import '../components/CareScale'
import PlantItem from '../components/PlantItem'

// pour chaque entrée du tableau, on retourne un élément  <li>.

// La  key   permet d'associer une donnée au composant correspondant 
//  le DOM virtuel qui permettra ensuite de générer les composants. 
function ShoppingList(){
    // 1ère solution: crée un tableau sans doublon
    //  const categories = [];
    // plantList.forEach(plant => categories.push(plant.category))
    // const  sansDoublons = Array.from(new Set (categories))

// 2ème solution : Explication, si le tableau inclut le même elt on ne fait rien
// sinon on rajoute on rajoute dans un tableau avec concat, le tableau initial est vide [] 
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div>
           <h2>Catégories </h2> 
            <ul>
                {categories.map(cat => (<li key={cat}>{cat}</li>))}
            </ul>
            <h2>Plantes</h2> 
            <ul className='lmj-plant-list'>
    
             {plantList.map(( {id, cover, name, water, light})=>(
                 <PlantItem 
                 id={id} 
                 cover={cover} 
                 name={name} 
                 water={water}
                 light={light} />
             ))}
            </ul>
        </div>
    )
}
export default ShoppingList