const allArticle = document.querySelector('.all-articles');

const goToArticle = (e) => {
	console.log(e.target);
	if (e.target.closest('div').classList.contains('article1')) {
		window.open('article1.html', '_self');/// '_self jest po to aby nowa strona otworzyła sie w tym samym oknie
	} else if (e.target.closest('div').classList.contains('article2')) {
		window.open('article2.html', '_self');
	} else if (e.target.closest('div').classList.contains('article3')) {
		window.open('article3.html', '_self');
	} else if (e.target.closest('div').classList.contains('article4')) {
		window.open('article4.html', '_self');
	}
	
};

allArticle.addEventListener('click', goToArticle);
