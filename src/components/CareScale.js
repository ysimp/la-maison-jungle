// Les props sont donc des objets que l'on peut récupérer dans les paramètres de notre composant fonction.
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({scaleValue, careType}){

    const range= [1,2,3]

     const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon'/> ): <img src={Water} alt='water-icon'/>

    return (
    <div onClick={() =>
        alert(
            `Cette plante requiert ${quantityLabel[scaleValue]} ${
                careType === 'light' ? 'de lumière wep' : "d'arrosage wep"
            }`
        )
    }>
        {range.map((rangElem)=>
        
        scaleValue >= rangElem ? (<span key={rangElem.toString()}>{scaleType}</span>):null)}

    </div>)
}

export default CareScale