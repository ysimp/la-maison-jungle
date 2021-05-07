// Les props sont donc des objets que l'on peut récupérer dans les paramètres de notre composant fonction.

function CareScale({scaleValue, careType}){

    const range= [1,2,3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return <div>
        {range.map((rangElem, index)=>
        
        scaleValue >= rangElem ? <span key={rangElem.toString()}>{scaleType}</span>:null)}

    </div>
}

export default CareScale