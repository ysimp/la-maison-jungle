import '../styles/PlantItem.css'
import CareScale from '../components/CareScale'
function PlantItem({id, cover, name, water, light}){

    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${cover}cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem