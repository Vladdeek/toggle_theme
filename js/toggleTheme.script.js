let darkTheme = false

// Функция для сохранения задач в localStorage

// Функция для загрузки задач из localStorage
function loadFromLocalStorage() {
	// Загружаем состояние темы
	const savedTheme = localStorage.getItem('darkTheme') === 'true' // Преобразуем строку в boolean
	if (savedTheme !== true) {
		// Если тема тёмная, применяем её
		darkTheme = true
	} else {
		darkTheme = false
	}
	changeTheme() // Вызываем toggleTheme для применения тёмной темы
}

function changeTheme() {
	const iconImage = document.querySelector('.btn-icon')
	const root = document.documentElement

	//для анимации кнопки
	const floatBTN = document.querySelector('.btn-img')

	if (darkTheme === false) {
		iconImage.src = 'img/moon-svgrepo-com.svg'
		//iconImage.style.filter = 'invert(1)' // для векторных изображений черного цвета
		root.style.setProperty('--text-color', '#fff')
		root.style.setProperty('--bg-color', '#000')
		root.style.setProperty('--color', '#0d3b66')

		//для анимации кнопки
		floatBTN.style.transform = 'translate(110%) rotate(270deg)'

		darkTheme = true
	} else if (darkTheme === true) {
		iconImage.src = 'img/sun-svgrepo-com.svg'
		//iconImage.style.filter = 'invert(0)' // для векторных изображений черного цвета
		root.style.setProperty('--text-color', '#000')
		root.style.setProperty('--bg-color', '#fff')
		root.style.setProperty('--color', '#00b4d8')

		//для анимации кнопки
		floatBTN.style.transform = 'translate(0%) rotate(0deg)'

		darkTheme = false
	}
	console.log(darkTheme)
	localStorage.setItem('darkTheme', darkTheme)
}
// Загружаем задачи при загрузке страницы
window.addEventListener('load', () => {
	loadFromLocalStorage()
})
