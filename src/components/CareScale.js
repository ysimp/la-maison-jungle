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

    function checkValue(){
        if(careType=== 'light' && scaleValue === 1){
            alert('Cette plante requiert peu de lumière')
        }
        if(careType=== 'light' && scaleValue === 2){
            alert('Cette plante requiert moderement  de lumière')
        }
        if(careType=== 'light' && scaleValue === 3){
            alert('Cette plante requiert beaucoup de lumière')
        }

        if(careType=== 'water' && scaleValue === 1){
            alert('Cette plante requiert peu d arrosage ')
        }
        if(careType=== 'water' && scaleValue === 2){
            alert('Cette plante requiert moderement d arrosage')
        }
        if(careType=== 'water' && scaleValue === 3){
            alert('Cette plante requiert beaucoup d arrosage')
        }
    }
}

export default CareScale