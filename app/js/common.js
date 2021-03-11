$(function() {

//global variables
let scrollFromTop
let scrollPoint = document.querySelector('body').getBoundingClientRect().height/8
console.log(scrollPoint)
let header = document.querySelector('header')
let windowHeight = window.innerHeight

//scroll function
window.addEventListener('scroll', function() {
	scrollFromTop = window.scrollY;
	// console.log(window.scrollY);
	openingAnimation();
	leveragedAnimation();
	headerStates();
	bookAnimation();
	smartAnimation();
})

//header-function
function headerStates() {
	if (scrollFromTop > 50 && scrollFromTop < scrollPoint && !header.classList.contains('light')) {
		header.classList.add('light')
		console.log('header light')
	} else if(header.classList.contains('light') && scrollFromTop < 10 || scrollFromTop > scrollPoint && header.classList.contains('light')){
		header.classList.remove('light')
		console.log('header light remove')
	} else if(scrollFromTop > scrollPoint && scrollFromTop < scrollPoint*2 &&  !header.classList.contains('dark')) {
		header.classList.add('dark')
		console.log('header dark')
	} else if(header.classList.contains('dark') && scrollFromTop < scrollPoint || scrollFromTop > scrollPoint*2 && header.classList.contains('dark')) {
		header.classList.remove('dark')
		console.log('header dark remove')
	}
}

//opening animation
let opening = document.querySelector('.opening')
let h1 = document.querySelector('h1')
let openingSubtitle = document.querySelector('.opening-text p')
let openingButtom = document.querySelector('.opening .button')
function openingAnimation() {
	if (scrollFromTop > 50 && !opening.classList.contains('invisible')) {
		opening.classList.add('invisible')
		TweenMax.to(h1, 0.5, {opacity:0, x: -40})
		TweenMax.to(openingSubtitle, 0.5, {opacity:0, x: -40, delay:0.15})
		TweenMax.to(openingButtom, 0.5, {opacity:0, x: -40, delay:0.30})
		console.log('hide opening')
	} else if (scrollFromTop < 50 && opening.classList.contains('invisible')) {
		opening.classList.remove('invisible')
		TweenMax.to(h1, 0.5, {opacity:1, x: 0})
		TweenMax.to(openingSubtitle, 0.5, {opacity:1, x: 0, delay:0.15})
		TweenMax.to(openingButtom, 0.5, {opacity:1, x: 0, delay:0.30})
		console.log('show opening')
	}
}


//leverage animation
let leveraged = document.querySelector('.leveraged')
let leveragedBackground = document.querySelector('.leveraged-text-main')
let leverageTitle = document.querySelector('.leveraged-text-main h2')
let leverageTextOne = document.querySelector('.leveraged-text-main p:nth-child(2)')
let leverageTextTwo = document.querySelector('.leveraged-text-main p:nth-child(3)')

function leveragedAnimation() {
	if (scrollFromTop > 50 && scrollFromTop < scrollPoint && leveraged.classList.contains('invisible')) {
		leveraged.classList.remove('invisible')		
		TweenMax.to(leveragedBackground, 0.5, {height: windowHeight})
		TweenMax.to(leverageTitle, 0.5, {opacity:1, x: 0, delay:0.6})
		TweenMax.to(leverageTextOne, 0.5, {opacity:1, x: 0, delay:0.75})
		TweenMax.to(leverageTextTwo, 0.5, {opacity:1, x: 0, delay:0.9})
		console.log('show leveraged')
	} else if (scrollFromTop > scrollPoint && !leveraged.classList.contains('invisible') || scrollFromTop < 50 && !leveraged.classList.contains('invisible')) {
		TweenMax.to(leveragedBackground, 0.75, {height: 0})
		TweenMax.to(leverageTitle, 0.5, {opacity:0, x: 40})
		TweenMax.to(leverageTextOne, 0.5, {opacity:0, x: 40, delay:0.15})
		TweenMax.to(leverageTextTwo, 0.5, {opacity:0, x: 40, delay:0.3})
		leveraged.classList.add('invisible')
		console.log('hide leveraged')
	}
}

//book
let book = document.querySelector('.book')
let bookBackground = document.querySelector('.book-text')
let bookTitle = document.querySelector('.book-text h2')
let bookText = document.querySelector('.book-text p:nth-child(2)')
let bookListOne = document.querySelectorAll('.book-pics-list li')

function bookAnimation() {
	if(scrollFromTop > scrollPoint && scrollFromTop <  scrollPoint*2 && book.classList.contains('invisible')) {
		book.classList.remove('invisible')
		TweenMax.to(bookBackground, 0.5, {height: windowHeight, delay: 0.2})
		TweenMax.to(bookTitle, 0.5, {opacity:1, x: 0, delay:0.7})
		TweenMax.to(bookText, 0.5, {opacity:1, x: 0, delay:0.85})
		TweenMax.to(bookListOne[0], 0.5, {opacity:1, x: 0, delay:1})
		TweenMax.to(bookListOne[1], 0.5, {opacity:1, x: 0, delay:1.15})
		TweenMax.to(bookListOne[2], 0.5, {opacity:1, x: 0, delay:1.3})
		TweenMax.to(bookListOne[3], 0.5, {opacity:1, x: 0, delay:1.45})
		console.log('show book')
	} else if(scrollFromTop < scrollPoint && !book.classList.contains('invisible')){
		TweenMax.to(bookBackground, 0.75, {height: 0})
		TweenMax.to(bookTitle, 0.5, {opacity:0, x: -40})
		TweenMax.to(bookText, 0.5, {opacity:0, x: -40, delay:0.15})
		TweenMax.to(bookListOne[0], 0.5, {opacity:0, x: -40, delay:0.3})
		TweenMax.to(bookListOne[1], 0.5, {opacity:0, x: -40, delay:0.45})
		TweenMax.to(bookListOne[2], 0.5, {opacity:0, x: -40, delay:0.6})
		TweenMax.to(bookListOne[3], 0.5, {opacity:0, x: -40, delay:0.75})
		book.classList.add('invisible')
	} else if(scrollFromTop > scrollPoint*2 && !book.classList.contains('invisible')) {
		TweenMax.to(bookTitle, 0.5, {opacity:0, x: -40})
		TweenMax.to(bookText, 0.5, {opacity:0, x: -40, delay:0.15})
		TweenMax.to(bookListOne[0], 0.5, {opacity:0, x: -40, delay:0.3})
		TweenMax.to(bookListOne[1], 0.5, {opacity:0, x: -40, delay:0.45})
		TweenMax.to(bookListOne[2], 0.5, {opacity:0, x: -40, delay:0.6})
		TweenMax.to(bookListOne[3], 0.5, {opacity:0, x: -40, delay:0.75})
		book.classList.add('invisible')
	}
}


//smart
let smart = document.querySelector('.smart')
let smartText = document.querySelector('.smart-text-one')
let smartListOne = document.querySelectorAll('.smart-pics-list li')
let smartBackground = document.querySelector('.smart-text')
let smartPolyBlock = document.querySelector('.poly-block')
let smartPolyTitle = document.querySelector('.poly-block h2')
let smartPolyText = document.querySelector('.poly-text')
let smartImg = document.querySelector('.smart-img')
let point = document.querySelectorAll('.point')
let widthFull = '100%'
let widthSmall = '45%'
let flex = 'flex'
let none = 'none'
let rems = '2.5rem'
let imageScrollHeight = windowHeight/1.3

function smartAnimation() {
	if(scrollFromTop > scrollPoint*2 && scrollFromTop <  scrollPoint*3 && smart.classList.contains('invisible') || scrollFromTop > scrollPoint*2 && scrollFromTop <  scrollPoint*3 && smart.classList.contains('phase-one')) {
		smart.classList.remove('invisible')
		smart.classList.remove('phase-one')
		TweenMax.to(smartBackground, 0.5, {width:widthSmall, delay:0.3})
		TweenMax.to(smartText, 0.5, {opacity:1, x: 0, delay:0.5})
		TweenMax.to(smartListOne[0], 0.5, {opacity:1, x: 0, delay:0.65})
		TweenMax.to(smartListOne[1], 0.5, {opacity:1, x: 0, delay:0.8})
		TweenMax.to(smartListOne[2], 0.5, {opacity:1, x: 0, delay:0.95})
		TweenMax.to(smartListOne[3], 0.5, {opacity:1, x: 0, delay:1.1})
		TweenMax.to(smartPolyBlock, 0, {display:none, delay:0.45})
		TweenMax.to(smartPolyTitle, 0.3, {opacity:0, y:-40})
		TweenMax.to(smartPolyText, 0.3, {opacity:0, y:-40, delay:0.15})
		TweenMax.to(smartImg, 0.5, {opacity:0, scale:1, y:windowHeight, delay:0.15})
		console.log('state 1')
	} else if(scrollFromTop < scrollPoint*2 && !smart.classList.contains('invisible')) {
		TweenMax.to(smartText, 0.5, {opacity:0, x: -40})
		TweenMax.to(smartListOne[0], 0.5, {opacity:0, x: -40, delay:0.15})
		TweenMax.to(smartListOne[1], 0.5, {opacity:0, x: -40, delay:0.3})
		TweenMax.to(smartListOne[2], 0.5, {opacity:0, x: -40, delay:0.45})
		TweenMax.to(smartListOne[3], 0.5, {opacity:0, x: -40, delay:0.6})
		smart.classList.add('invisible')
		console.log('state 2')
	} else if(scrollFromTop > scrollPoint*3 && !smart.classList.contains('invisible') &&!smart.classList.contains('phase-one')) {
		TweenMax.to(smartText, 0.5, {opacity:0, x: -40})
		TweenMax.to(smartListOne[0], 0.5, {opacity:0, x: -40, delay:0.15})
		TweenMax.to(smartListOne[1], 0.5, {opacity:0, x: -40, delay:0.3})
		TweenMax.to(smartListOne[2], 0.5, {opacity:0, x: -40, delay:0.45})
		TweenMax.to(smartListOne[3], 0.5, {opacity:0, x: -40, delay:0.6})
		TweenMax.to(smartBackground, 0.5, {width:widthFull, delay:1})
		TweenMax.to(smartPolyBlock, 0, {display:flex, delay:1.5})
		TweenMax.to(smartPolyTitle, 0.5, {opacity:1, y:0, delay:1.6})
		TweenMax.to(smartPolyText, 0.5, {opacity:1, y:0, delay:1.75})
		TweenMax.to(smartImg, 0.5, {opacity:1, scale:2.5, y:imageScrollHeight, delay:1.9})
		smart.classList.add('phase-one')
		smart.classList.remove('phase-two')
		console.log('state 3')
	} else if(scrollFromTop > scrollPoint*3 && scrollFromTop < scrollPoint*4 && !smart.classList.contains('invisible') && smart.classList.contains('phase-two')) {
		TweenMax.to(smartPolyTitle, 0.5, {opacity:1, y:0, delay:0.65})
		TweenMax.to(smartPolyText, 0.5, {opacity:1, y:0, delay:0.8})
		TweenMax.to(smartImg, 0.5, {opacity:1, scale:2.5, y:imageScrollHeight, delay:0.5})
		TweenMax.to(point[0], 0.3, {opacity:0, y:0})
		TweenMax.to(point[2], 0.3, {opacity:0, y:-40, delay:0.05})
		TweenMax.to(point[4], 0.3, {opacity:0, y:-40, delay:0.1})
		TweenMax.to(point[5], 0.3, {opacity:0, y:-40, delay:0.15})
		TweenMax.to(point[3], 0.3, {opacity:0, y:-40, delay:0.2})
		TweenMax.to(point[1], 0.3, {opacity:0, y:-40, delay:0.25})
		console.log('state4')
		smart.classList.remove('phase-two')
	} else if(scrollFromTop > scrollPoint*4 &&!smart.classList.contains('phase-two')) {
		TweenMax.to(smartPolyTitle, 0.5, {opacity:0, y:-40, delay:0})
		TweenMax.to(smartPolyText, 0.5, {opacity:0, y:-40, delay:0.15})
		TweenMax.to(smartImg, 0.5, {opacity:1, scale:1, y:0, delay:0.3})
		TweenMax.to(point[0], 0.3, {opacity:1, y:0, delay:0.7})
		TweenMax.to(point[2], 0.3, {opacity:1, y:0, delay:0.85})
		TweenMax.to(point[4], 0.3, {opacity:1, y:0, delay:1})
		TweenMax.to(point[5], 0.3, {opacity:1, y:0, delay:1.15})
		TweenMax.to(point[3], 0.3, {opacity:1, y:0, delay:1.3})
		TweenMax.to(point[1], 0.3, {opacity:1, y:0, delay:1.45})
		console.log('state5')
		smart.classList.add('phase-two')
		
	} else if (scrollFromTop > scrollPoint*2 && scrollFromTop < scrollPoint*5 && smart.classList.contains('invisible')) {
		TweenMax.to(smartImg, 0.5, {opacity:1, scale:1, y:0, delay:0.3})
		TweenMax.to(point[0], 0.3, {opacity:1, y:0, delay:0.7})
		TweenMax.to(point[2], 0.3, {opacity:1, y:0, delay:0.85})
		TweenMax.to(point[4], 0.3, {opacity:1, y:0, delay:1})
		TweenMax.to(point[5], 0.3, {opacity:1, y:0, delay:1.15})
		TweenMax.to(point[3], 0.3, {opacity:1, y:0, delay:1.3})
		TweenMax.to(point[1], 0.3, {opacity:1, y:0, delay:1.45})
		smart.classList.remove('invisible')

	} else if(scrollFromTop>scrollPoint*5 && !smart.classList.contains('invisible')) {
		TweenMax.to(smartImg, 0.5, {opacity:1, scale:2.5, y:imageScrollHeight, delay:0.5})
		TweenMax.to(point[0], 0.3, {opacity:0, y:-40})
		TweenMax.to(point[2], 0.3, {opacity:0, y:-40, delay:0.15})
		TweenMax.to(point[4], 0.3, {opacity:0, y:-40, delay:0.3})
		TweenMax.to(point[5], 0.3, {opacity:0, y:-40, delay:0.45})
		TweenMax.to(point[3], 0.3, {opacity:0, y:-40, delay:0.6})
		TweenMax.to(point[1], 0.3, {opacity:0, y:-40, delay:0.75})
		smart.classList.add('invisible')
	}
}

});
