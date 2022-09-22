let list = document.querySelectorAll('.openbtn')
console.log (list)
for (let item of list) {
	item.onclick = function() {
		document.querySelectorAll('.div_visible').forEach(item => item.style.display = 'none')
		//при нажатие на другой плюс, он должен закрыть другой фэк и поставить рядом с ним плюс. меняться с минумом местами
		document.querySelectorAll('.openbtn').forEach(openbtn => openbtn.style.display = 'inline-block')
		document.querySelectorAll('.closebtn').forEach(closebtn => closebtn.style.display = 'none')
		let parent = item.parentElement
		let answ = parent.querySelector (".div_visible")
		let openbtn = parent.querySelector (".openbtn")
		let closebtn = parent.querySelector (".closebtn")
		answ.style.display = 'block'
		openbtn.style.display = 'none'
		closebtn.style.display = 'inline-block'
	}
}
let list0 = document.querySelectorAll('.closebtn')
for (let item0 of list0) {
	item0.onclick = function() {
		let parent0 = item0.parentElement
		let answ = parent0.querySelector (".div_visible")
		let closebtn = parent0.querySelector (".closebtn")
		let openbtn = parent0.querySelector (".openbtn")
		answ.style.display = 'none'
		closebtn.style.display = 'none'
		openbtn.style.display = 'inline-block'
	}
}
