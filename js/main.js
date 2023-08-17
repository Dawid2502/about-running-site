//Nawigacja
const navigation = document.querySelector('nav');
const barsIcon = document.querySelector('.fa-bars');
const xIcon = document.querySelector('.fa-xmark');
const burgerBtn = document.querySelector('.burger-btn');

//Kalendarz
const calendar = document.querySelector('.calendar-events');
const mainMonth = document.querySelector('.month');
const monthDaysBox = document.querySelector('.month-days');
const prevMonthBtn = document.querySelector('.fa-chevron-left');
const nextMonthBtn = document.querySelector('.fa-chevron-right');
const eventText = document.querySelector('.event-text');

let firstDayofMonth; // Pierwszy dzień miesiąca (chodzi o dzień tygodnia)
let amountDaysPreviousMonth; // Ilość dni w poprzednim miesiącu
let amountDaysInMonth; //Ilość dni w miesiącu
let lastDayofMonth; // Ostatni dzień miesiąca (chodzi o dzień tygodnia)

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDate();
//Kalkulator kalorii
const calcAge = document.querySelector('#age');
const calcWeight = document.querySelector('#weight');
const calcHeight = document.querySelector('#height');
const selectActivity = document.querySelector('#level-activity');
const selectBodyGoal = document.querySelector('#body-goal');
const calorieResult = document.querySelector('.calorie-result');
const calculator = document.querySelector('.popup-calculator');
const countBtn = document.querySelector('.count-calorie-btn');
const closePopupBtn = document.querySelector('.close-calculator-btn');
const openCalcBtn = document.querySelector('.calc-calorie-btn');
const errorCalc = document.querySelector('.errors-calculator');
const radioMale = document.getElementById('#male');
const radioFemale = document.getElementById('#female');
const maleFemale = document.getElementsByName('person');
let selectedActivity;
let selectedBodyGoal;
const activityFactor = [1.2, 1.4, 1.6, 1.8, 2.0];

// Lista wydarzeń
const moreEvent = document.querySelectorAll('.more-event');
const showEventsBtn = document.querySelector('.show-events-btn');
const arrow = document.querySelector('.fa-chevron-down');

const months = [
	'Styczeń',
	'Luty',
	'Marzec',
	'Kwiecień',
	'Maj',
	'Czerwiec',
	'Lipiec',
	'Sierpień',
	'Wrzesień',
	'Październik',
	'Listopad',
	'Grudzień',
];
//Wydarzenia dla kalendarza
const eventsByDate = {
	'05-03-2023': '47 Bieg Piastów - Szklarska Poręba',
	'26-03-2023': 'Bieg na Piątkę - Warszawa',
	'02-04-2023': 'Świdnickie Biegi Parkowe - Świdnica',
	'16-04-2023': '49 Dębno Maraton - Dębno',
	'26-04-2023': 'Karkonoska Wyrypa - Jelenia góra',
	'06-05-2023': 'XXIV Bieg Wilka - Grajewo',
	'20-05-2023': 'IV Polanicki Bieg Zespołowy - Polanica Zdrój',
	'10-06-2023': 'III Mistrzostwa Sparta Ultra Team - Trzcinica',
	'24-06-2023': 'Bieg Górnika - Jastrzębie Zdrój',
	'06-07-2023': '3 X Śnieżka = 1 x Mont Blanc - Karpacz',
	'22-07-2023': 'Tatrzański Festiwal Biegowy - Zakopane',
	'06-08-2023': 'Bieg na Wielką Sowe - Nowa Ruda',
	'19-08-2023': 'II Bieg Wakacje Na Sportowo - Katowice',
	'26-08-2023': 'IV Maraton Od Zmierzchu Do Świtu - Turawa',
	'02-09-2023': 'Crossowy Półmaraton Nowohucki - Kraków',
	'09-09-2023': 'Bieg 12h - Wrocław',
	'17-09-2023': 'XXIX Bieg Uliczny - Twardogóra',
	'01-10-2023': '11 Kielecka Dycha - kielce',
	'27-10-2023': 'Slavic Trail Run - Bydgoszcz',
	'05-11-2023': 'Chwałowicki Maraton Koleżeński - Chwałowice',
	'25-11-2023': 'Parkowa Prowokacja Biegowa - Gliwice',
	'10-12-2023': 'Perły Małopolski - Rabka Zdrój',
	'17-12-2023': 'Bieg Dzika - Katowice',
};

//Otwieranie/Zamykanie burger menu
const handleMenu = () => {
	navigation.classList.toggle('active');
	burgerBtn.classList.toggle('active');
	barsIcon.classList.toggle('hide');
	xIcon.classList.toggle('hide');
};
//Pobranie aktualnych danych kalendarza
const getCalendarData = () => {
	firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
	amountDaysPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
	amountDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
	lastDayofMonth = new Date(
		currentYear,
		currentMonth,
		amountDaysInMonth
	).getDay();
};

const setPrevMonth = () => {
	monthDaysBox.innerHTML = ` `;
	currentMonth--;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear--;
	}
	createCalendar();
};

const setNextMonth = () => {
	monthDaysBox.innerHTML = ` `;
	currentMonth++;
	if (currentMonth > 11) {
		currentMonth = 0;
		currentYear++;
	}
	createCalendar();
};

//Tworzenie kalendarza
const createCalendar = () => {
	getCalendarData();
	prevMonthBtn.addEventListener('click', setPrevMonth);
	nextMonthBtn.addEventListener('click', setNextMonth);
	mainMonth.textContent = months[currentMonth] + ' ' + currentYear;

	if (firstDayofMonth === 0) {
		firstDayofMonth = 7;
	}

	for (let j = firstDayofMonth - 1; j > 0; j--) {
		const prevMonthDay = document.createElement('li');
		prevMonthDay.classList.add('day');
		prevMonthDay.classList.add('inactive-day');
		prevMonthDay.innerHTML = `${amountDaysPreviousMonth - j + 1}`;
		monthDaysBox.appendChild(prevMonthDay);
	}

	for (let i = 1; i <= amountDaysInMonth; i++) {
		const monthDay = document.createElement('li');
		monthDay.classList.add('day');
		if (i === currentDay && date.getMonth() === currentMonth) {
			monthDay.style.backgroundColor = 'darkcyan';
		}// Znalezienie aktualnego dnia miesiąca
		monthDay.innerHTML = `${i}`;
		const dateStr = `${i.toString().padStart(2, '0')}-${(currentMonth + 1)
			.toString()
			.padStart(2, '0')}-${currentYear}`;// String z data do znalezienia wydarzenia
		if (eventsByDate[dateStr]) {
			monthDay.style.textShadow =
				'1px 1px 2px rgb(71, 144, 240), 0 0 1em rgb(14, 143, 136), 0 0 0.2em rgb(14, 143, 136)';
		}// Cień dla dni do, których przypisano wydarzenia
		showEventsForDay(dateStr);
		monthDay.addEventListener('click', () => showEventsForDay(dateStr));
		monthDaysBox.appendChild(monthDay);
	}

	if (lastDayofMonth === 0) {
		lastDayofMonth = 7;
	}

	for (let j = 1; j <= 7 - lastDayofMonth; j++) {
		const nextMonthDay = document.createElement('li');
		nextMonthDay.classList.add('day');
		nextMonthDay.classList.add('inactive-day');
		nextMonthDay.innerHTML = `${j}`;
		monthDaysBox.appendChild(nextMonthDay);
	}
};

const showEventsForDay = (date) => {
	let note = eventsByDate[date] ? `${date}:  ${eventsByDate[date]}` : 'Brak wydarzeń dla tego dnia';
	eventText.textContent = note;
}

createCalendar();

const openCalculator = () => {
	calculator.style.display = 'flex';
};

const closeCalculator = () => {
	calculator.style.display = 'none';
	clearCalcInputs();
};

const clearCalcInputs = () => {
	calcAge.value = '';
	calcWeight.value = '';
	calcHeight.value = '';
	selectActivity.selectedIndex = 0;
	selectBodyGoal.selectedIndex = 0;
};

const chceckCalculatorInput = () => {
	if (
		calcAge.value !== '' &&
		calcWeight.value !== '' &&
		calcHeight.value !== '' &&
		selectActivity.value !== 'none' &&
		selectBodyGoal.value !== 'none'
	) {
		countCalorie();
	} else {
		errorCalc.textContent = 'Wypełnij wszystkie pola!!!';
	}
	console.log(selectActivity.selectedIndex);
};
//Obliczanie zapotrzebowania kalorycznego
const countCalorie = () => {
	let calorie;
	let indexRadio;

	for (i = 0; i < maleFemale.length; i++) {
		if (maleFemale[i].checked) indexRadio = maleFemale[i].value;
	}

	if (indexRadio === 'man') {
		if (selectBodyGoal.value === '0') {
			calorie =
				(66.47 +
					13.75 * parseInt(calcWeight.value) +
					5 * parseInt(calcHeight.value) -
					6.75 * parseInt(calcAge.value)) *
					activityFactor[selectActivity.selectedIndex - 1] -
				300;
		} else if (selectBodyGoal.value === '1') {
			calorie =
				(66.47 +
					13.75 * parseInt(calcWeight.value) +
					5 * parseInt(calcHeight.value) -
					6.75 * parseInt(calcAge.value)) *
				activityFactor[selectActivity.selectedIndex - 1];
		} else if (selectBodyGoal.value === '2') {
			calorie =
				(66.47 +
					13.75 * parseInt(calcWeight.value) +
					5 * parseInt(calcHeight.value) -
					6.75 * parseInt(calcAge.value)) *
					activityFactor[selectActivity.selectedIndex - 1] +
				300;
		}
	} else if (indexRadio === 'woman') {
		if (selectBodyGoal.value === '0') {
			calorie =
				(665.09 +
					9.56 * parseInt(calcWeight.value) +
					1.85 * parseInt(calcHeight.value) -
					4.67 * parseInt(calcAge.value)) *
					activityFactor[selectActivity.selectedIndex - 1] -
				300;
		} else if (selectBodyGoal.value === '1') {
			calorie =
				(665.09 +
					9.56 * parseInt(calcWeight.value) +
					1.85 * parseInt(calcHeight.value) -
					4.67 * parseInt(calcAge.value)) *
				activityFactor[selectActivity.selectedIndex - 1];
		} else if (selectBodyGoal.value === '2') {
			calorie =
				(665.09 +
					9.56 * parseInt(calcWeight.value) +
					1.85 * parseInt(calcHeight.value) -
					4.67 * parseInt(calcAge.value)) *
					activityFactor[selectActivity.selectedIndex - 1] +
				300;
		}
	}
	calorieResult.textContent = `Potrzebujesz:  ${calorie.toFixed(0)} kcal`;
	clearCalcInputs();
};

const chooseActivity = () => {
	selectedActivity = selectActivity.options[selectActivity.selectedIndex].text;
};

const chooseBodyGoal = () => {
	selectedBodyGoal = selectBodyGoal.options[selectBodyGoal.selectedIndex].text;
};

function btnOpenBlog() {
	window.open('blog.html','_self');
}

burgerBtn.addEventListener('click', handleMenu);
countBtn.addEventListener('click', chceckCalculatorInput);
openCalcBtn.addEventListener('click', openCalculator);
closePopupBtn.addEventListener('click', closeCalculator);

