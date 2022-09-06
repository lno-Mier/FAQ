function FAQ() {
	let visible = 'none'
	let answ1 = document.getElementById('answ1').onclick = function() {
		answ1.style.display = visible
	}
	let button2 = document.getElementById('button2').onclick = function() {
		let answ2 = document.getElementById('answ2')
		answ1.style.display = visible
	}
	let button3 = document.getElementById('button3').onclick = function() {
		let answ3 = document.getElementById('answ3')
		answ1.style.display = visible
	}
}
FAQ()
