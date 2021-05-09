// Les props sont donc des objets que l'on peut récupérer dans les paramètres de notre composant fonction.
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function CareScale({scaleValue, careType}){

    const range= [1,2,3]

    const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon'/> ): <img src={Water} alt='water-icon'/>

    return (
    <div>
        {range.map((rangElem)=>
        
        scaleValue >= rangElem ? (<span key={rangElem.toString()}>{scaleType}</span>):null)}

    </div>)
}

export default CareScale