const snapFingers = () => {

	let phrase = prompt("say it")
	let snappedPhrase = ''
	let getRandomIndex = () => {
		return Math.floor(Math.random() * 2)
	}
	for (let i = 0; i < phrase.length/2; i++) {
		let coef = phrase.length
		let getRandomIndex = () => {
			return Math.floor(Math.random() * coef)
		}
		let phraseArray = phrase.split('')
		phraseArray.splice(getRandomIndex(), 1)
		coef--
		snappedPhrase = phraseArray.join()
	}
	
	/*while (counter <= phrase.length/2) {
		let coef = phrase.length
		let getRandomIndex = () => {
			return Math.floor(Math.random() * coef)
		}
		let phraseArray = phrase.split('')
		phraseArray.splice(getRandomIndex(), 1)
		coef--
		counter++

	}

	/*for (let c = 0; c < phrase.length - 1; c++) {
		if (getRandomIndex() === 1) {
			snappedPhrase += phrase[c]
		}
	}
	*/
	document.body.style.backgroundImage = 'url(img/snapped.jpg)'
	document.body.querySelector('p').style.color = 'white'
	return alert(snappedPhrase)
}

document.getElementById('snap').onclick = snapFingers
