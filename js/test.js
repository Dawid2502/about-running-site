
const navigation = document.querySelector('nav')
const barsIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-xmark')
const burgerBtn = document.querySelector('.burger-btn')

const handleMenu = () => {
	navigation.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIcon.classList.toggle('hide')
	xIcon.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleMenu)
