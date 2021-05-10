import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
			<input value={inputValue} onChange={handleInput} onBlur={handleBlur}/>
			</div>
		</footer>
	)

	function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleBlur(){
		if(!inputValue.includes('@')){
			// setInputValue(value)
			alert("Alert attention il n'y a pas d'@, Ceci n'est pas une adresse mail valide !")
		}
    }
}

export default Footer
