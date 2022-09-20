let list = document.querySelectorAll('.openbtn')
console.log (list)
for (let item of list) {
	item.onclick = function() {
		let parent = item.parentElement
		let answ = parent.querySelector (".div_visible")
		answ.style.display = 'block'
		if (answ.style.display = 'block') {
			item.onclick = function() {
				answ.style.display = 'none'
			}
		}
	}
}
