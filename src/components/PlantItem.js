import '../styles/PlantItem.css'
import CareScale from '../components/CareScale'
function PlantItem({id, cover, name, water, light}){

    return (
        <li key={id} className='lmj-plant-item' onClick={handleClick}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${cover}cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(e){
    // alert(`Vous voulez achetez 1 ${plantName} très bon choix 🌱✨`)
    console.log('Ceci est mon event: ',e)
}

export default PlantItem