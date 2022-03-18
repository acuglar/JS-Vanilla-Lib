const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const divOuter = document.querySelector('div')

// 1. Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
const displayItems = numbersArray => {
	const divInner = document.createElement('div')
	divInner.innerHTML += numbersArray.reduce((acc, item, i, arr) => {
		acc += i === arr.length - 1 ? `<span>${item}. </span>` : `<span>${item}, </span>`
		return acc
	}, '')
	divOuter.appendChild(divInner)
}
displayItems(sampleArray)

// 2. Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
const displayEvens = numbersArray => {
	const divInner = document.createElement('div')
	divInner.innerHTML += numbersArray
		.filter(item => item % 2 === 0)
		.reduce((acc, item, i, arr) => {
			acc += i === arr.length - 1 ? `<span>${item}. </span>` : `<span>${item}, </span>`
			return acc
		}, '')
	divOuter.append(divInner)
}
displayEvens(sampleArray)

// 3. Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
const displaySquared = numbersArray => {
	const divInner = document.createElement('div')
	divInner.innerHTML += numbersArray
		.map(item => item ** 2)
		.reduce((acc, item, i, arr) => {
			acc += i === arr.length - 1 ? `<span>${item}. </span>` : `<span>${item}, </span>`
			return acc
		}, '')
	divOuter.append(divInner)
}
displaySquared(sampleArray)

// 4. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras determinadas por cada elementos de sampleArray, retângulos de largura par de vermelho.  
const displaySquares = numbersArray => {
	const divInner = document.createElement('div')
	divInner.innerHTML += numbersArray.reduce((acc, item) => {
		acc += item % 2 === 0
			? `<div style="width:${item}px; height:20px; background-color:gray;"></div>`
			: `<div style="width:${item}px; height:20px; background-color:red;"></div>`
		console.log(acc)
		return acc
	}, '')
	divOuter.appendChild(divInner)
}
displaySquares(sampleArray)