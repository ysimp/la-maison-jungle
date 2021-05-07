import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import '../components/CareScale'
import CareScale from '../components/CareScale'

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
                {/* <Indiquée entre accolades,  &&   précède un élément JSX et précise que l'élément ne sera généré que si la condition est respectée> */}
                {plantList.map((plant) => (<li key={plant.id}  className='lmj-plant-item'>{plant.name}
                {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                <CareScale careType='water' scaleValue={plant.water} />
                <CareScale careType='light' scaleValue={plant.light} />
             </li>))}
            </ul>
        </div>
    )
}
export default ShoppingList