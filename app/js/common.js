$(function () {
    let isMobile = false
    if (window.innerWidth < 1024) {
        isMobile = true
    }
    //preloader
    loader();
    // if (isMobile) {
    //     return;
    // }
    let obj = document.querySelector('.preloader')
    let inner = document.querySelector('.preloader_inner')

    function loader(_success) {
        if (isMobile) {
            return;
        }
        let w = 0

        let newInterval = setInterval(function () {
            if (w == 100) {
                return
            }
            w = w + 1
            inner.textContent = w + '%';
        }, 20)

        setTimeout(function () {
            clearInterval(newInterval);
            obj.classList.add('inactive')
            TweenMax.to(h1, 0.5, { opacity: 1, x: 0.15 })
            TweenMax.to(openingSubtitle, 0.5, { opacity: 1, x: 0, delay: 0.3 })
            TweenMax.to(openingButton, 0.5, { opacity: 1, x: 0, delay: 0.45 })
            TweenMax.to(openingPowered, 0.5, { opacity: 1, x: 0, delay: 0.6 })
        }, 2000)
    }

    //global variables

    let scrollFromTop
    let scrollableWrapper = document.querySelector('.scrolable-div')
    let scrollPoint = document.querySelector('body').getBoundingClientRect().height / 9
    console.log(scrollPoint)
    let header = document.querySelector('header')
    let windowHeight = window.innerHeight

    function reset() {
        if (isMobile) {
            return
        }
        TweenMax.to(window, { duration: 1, scrollTo: 0, onComplete: () => { resetTrue() } })
        console.log('resert')
    }
    let resetStatus = false

    function resetTrue() {
        resetStatus = true
    }
    document.onload = reset()

    //scroll function
    window.addEventListener('scroll', function () {
        scrollFromTop = window.scrollY;
        // console.log(window.scrollY);
        if (!resetStatus || isMobile) {
            return
        }
        openingAnimation();
        leveragedAnimation();
        headerStates();
        bookAnimation();
        smartAnimation();
        powerAnimation();
        footerAnimation();
        peopleAnimation();
        activeChapter();
    })
    //activeChapter
    let chapterLine = document.querySelector('.header .bottom-line')
    let widthOne = '.46rem'

    let tenPerCent = '1.02rem'
    let widthTwo = '.62rem'

    let twoperCent = '2.22rem'
    let widthThree = '.53rem'

    let threePerCent = '3.33rem'
    let widthFour = '.74rem'

    let fourPerCent = '4.67rem'
    let widthFive = '.38rem'

    function activeChapter() {

        if (scrollFromTop < 50) {
            TweenMax.to(chapterLine, 0.5, { opacity: 0 })
        } else if (scrollFromTop > 50 && scrollFromTop < scrollPoint) {
            TweenMax.to(chapterLine, 0.5, { opacity: 1, x: 0, width: widthOne })
        } else if (scrollFromTop > scrollPoint * 2 && scrollFromTop < scrollPoint * 3) {
            TweenMax.to(chapterLine, 0.5, { x: 0, width: widthOne })
        } else if (scrollFromTop > scrollPoint * 3 && scrollFromTop < scrollPoint * 4) {
            TweenMax.to(chapterLine, 0.5, { x: tenPerCent, width: widthTwo })
            // console.log('next line')
        } else if (scrollFromTop > scrollPoint * 4 && scrollFromTop < scrollPoint * 5) {
            TweenMax.to(chapterLine, 0.5, { x: tenPerCent, width: widthTwo })
            // console.log('next line 2')
        } else if (scrollFromTop > scrollPoint * 5 && scrollFromTop < scrollPoint * 6) {
            TweenMax.to(chapterLine, 0.5, { x: twoperCent, width: widthThree })
            // console.log('next line 3')
        } else if (scrollFromTop > scrollPoint * 6 && scrollFromTop < scrollPoint * 7) {
            TweenMax.to(chapterLine, 0.5, { x: threePerCent, width: widthFour })
            // console.log('next line 4')
        } else if (scrollFromTop > scrollPoint * 7 && scrollFromTop < scrollPoint * 8) {
            TweenMax.to(chapterLine, 0.5, { opacity: 1, x: fourPerCent, width: widthFive })
            // console.log('next line 5')
        } else if (scrollFromTop > scrollPoint * 8) {
            TweenMax.to(chapterLine, 0.5, { opacity: 0 })
        }

    }
    //header-function
    function headerStates() {
        if (scrollFromTop > 50 && scrollFromTop < scrollPoint && !header.classList.contains('light')) {
            header.classList.add('light')
            header.classList.remove('dark')
            // console.log('header light')
        } else if (header.classList.contains('light') && scrollFromTop < 50 || scrollFromTop > scrollPoint && header.classList.contains('light')) {
            header.classList.remove('light')
            // console.log('header light remove')
        } else if (scrollFromTop > scrollPoint && scrollFromTop < scrollPoint * 2 && !header.classList.contains('dark')) {
            header.classList.add('dark')
            // console.log('header dark')
        } else if (header.classList.contains('dark') && scrollFromTop < scrollPoint || scrollFromTop > scrollPoint * 2 && header.classList.contains('dark')) {
            header.classList.remove('dark')
            // console.log('header dark remove')
        } else if (scrollFromTop > scrollPoint * 5 && scrollFromTop < scrollPoint * 6 && !header.classList.contains('light_two')) {
            header.classList.add('light_two')
            header.classList.remove('full-light')
        } else if (header.classList.contains('light_two') && scrollFromTop < scrollPoint * 5) {
            header.classList.remove('light_two')
        } else if (scrollFromTop > scrollPoint * 6 && scrollFromTop < scrollPoint * 7 && !header.classList.contains('full-light')) {
            header.classList.add('full-light')
            header.classList.remove('light_two')
        } else if (header.classList.contains('full-light') && scrollFromTop < scrollPoint * 6) {
            header.classList.remove('full-light')
        } else if (scrollFromTop > scrollPoint * 7 && scrollFromTop < scrollPoint * 8 && header.classList.contains('full-light')) {
            header.classList.remove('full-light')
        }
    }

    //opening animation
    let opening = document.querySelector('.opening')
    let h1 = document.querySelector('h1')
    let openingSubtitle = document.querySelector('.opening-text p')
    let openingButton = document.querySelector('.opening .button')
    let openingButtonTwo = document.querySelector('.opening .white-button')
    let openingPowered = document.querySelector('.powered-main')

    function openingAnimation() {
        if (scrollFromTop > 50 && !opening.classList.contains('invisible')) {
            opening.classList.add('invisible')
            TweenMax.to(h1, 0.5, { opacity: 0, x: -40 })
            TweenMax.to(openingSubtitle, 0.5, { opacity: 0, x: -40, delay: 0.15 })
            TweenMax.to(openingButton, 0.5, { opacity: 0, x: -40, delay: 0.30 })
            TweenMax.to(openingPowered, 0.5, { opacity: 0, x: -40, delay: 0.45 })
            // console.log('hide opening')
        } else if (scrollFromTop < 50 && opening.classList.contains('invisible')) {
            opening.classList.remove('invisible')
            TweenMax.to(h1, 0.5, { opacity: 1, x: 0 })
            TweenMax.to(openingSubtitle, 0.5, { opacity: 1, x: 0, delay: 0.15 })
            TweenMax.to(openingButton, 0.5, { opacity: 1, x: 0, delay: 0.30 })
            TweenMax.to(openingPowered, 0.5, { opacity: 1, x: 0, delay: 0.45 })
            // console.log('show opening')
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
            TweenMax.to(leveragedBackground, 0.5, { height: windowHeight })
            TweenMax.to(leverageTitle, 0.5, { opacity: 1, x: 0, delay: 0.6 })
            TweenMax.to(leverageTextOne, 0.5, { opacity: 1, x: 0, delay: 0.75 })
            TweenMax.to(leverageTextTwo, 0.5, { opacity: 1, x: 0, delay: 0.9 })
            // console.log('show leveraged')
        } else if (scrollFromTop > scrollPoint && !leveraged.classList.contains('invisible') || scrollFromTop < 50 && !leveraged.classList.contains('invisible')) {
            TweenMax.to(leveragedBackground, 0.75, { height: 0 })
            TweenMax.to(leverageTitle, 0.5, { opacity: 0, x: 40 })
            TweenMax.to(leverageTextOne, 0.5, { opacity: 0, x: 40, delay: 0.15 })
            TweenMax.to(leverageTextTwo, 0.5, { opacity: 0, x: 40, delay: 0.3 })
            leveraged.classList.add('invisible')
            // console.log('hide leveraged')
        }
    }

    //book
    let book = document.querySelector('.book')
    let bookBackground = document.querySelector('.book-text')
    let bookTitle = document.querySelector('.book-text h2')
    let bookText = document.querySelector('.book-text p:nth-child(2)')
    let slickOptions = {
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 450,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'ease',
        prevArrow: "<div class='opening-text-scroll-circle prev slick-prev'><div class='opening-text-scroll-circle-core'><img src='img/arrow-scroll.svg' alt='Arrow-scroll'><img src='img/arrow-scroll-two.svg'></div></div>",
        nextArrow: "<div class='opening-text-scroll-circle next slick-next'><div class='opening-text-scroll-circle-core'><img src='img/arrow-scroll.svg' alt='Arrow-scroll'><img src='img/arrow-scroll-two.svg'></div></div>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
        // rest of options
    }
    let $slick = $('.book-slider');
    let slider = document.querySelector('.book-slider')
    let sliderImages = document.querySelectorAll('.slide img')
    let slideName = document.querySelectorAll('.slide p')

    $slick.slick(slickOptions);

    var reinitSlick = function () {
        $slick.addClass('activeSlider')
        $slick.slick('slickSetOption', {
            'autoplay': true
        }, true);
    }


    let windowWidth = window.innerWidth / 4
    if (isMobile) {
        reinitSlick()
        windowWidth = window.innerWidth
    }

    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide == 0 && nextSlide == 1 || currentSlide == 1 && nextSlide == 2 || currentSlide == 2 && nextSlide == 3 || currentSlide == 3 && nextSlide == 0) {
            TweenMax.to(sliderImages[currentSlide], 0.45, { x: -(windowWidth), opacity: 0 })
            TweenMax.to(slideName[currentSlide], 0.45, { y: -40, opacity: 0 })
            TweenMax.to(slideName[nextSlide], 0, { y: 40, opacity: 0 })
            TweenMax.to(sliderImages[nextSlide], 0, { x: windowWidth, opacity: 0 })
        } else if (currentSlide == 0 && nextSlide == 3 || currentSlide == 3 && nextSlide == 2 || currentSlide == 2 && nextSlide == 1 || currentSlide == 1 && nextSlide == 0) {
            TweenMax.to(sliderImages[currentSlide], 0.45, { x: windowWidth, opacity: 0 })
            TweenMax.to(slideName[currentSlide], 0.45, { y: 40, opacity: 0 })
            TweenMax.to(slideName[nextSlide], 0, { y: -40, opacity: 0 })
            TweenMax.to(sliderImages[nextSlide], 0, { x: -windowWidth, opacity: 0 })
        }
    });
    $slick.on('afterChange', function (event, slick, currentSlide) {
        TweenMax.to(slideName[currentSlide], 0.3, { y: 0, opacity: 1, delay: 0.05 })
        TweenMax.to(sliderImages[currentSlide], 0.3, { x: 0, opacity: 1, delay: 0.05 })
        // console.log('after', currentSlide)
    });
    function bookAnimation() {
        if (scrollFromTop > scrollPoint && scrollFromTop < scrollPoint * 2 && book.classList.contains('invisible')) {
            book.classList.remove('invisible')
            TweenMax.to(bookBackground, 0.5, { height: windowHeight, delay: 0.2 })
            TweenMax.to(bookTitle, 0.5, { opacity: 1, x: 0, delay: 0.7 })
            TweenMax.to(bookText, 0.5, { opacity: 1, x: 0, delay: 0.85 })
            TweenMax.to(slider, 0.5, { opacity: 1, delay: 1 })
            setTimeout(function () {
                reinitSlick()
            }, 1250)

            // console.log('show book')
        } else if (scrollFromTop < scrollPoint && !book.classList.contains('invisible')) {
            TweenMax.to(bookBackground, 0.75, { height: 0 })
            TweenMax.to(bookTitle, 0.5, { opacity: 0, x: -40 })
            TweenMax.to(bookText, 0.5, { opacity: 0, x: -40, delay: 0.15 })
            TweenMax.to(slider, 0.5, { opacity: 0, delay: 0.3 })
            book.classList.add('invisible')
        } else if (scrollFromTop > scrollPoint * 2 && !book.classList.contains('invisible')) {
            TweenMax.to(bookTitle, 0.5, { opacity: 0, x: -40 })
            TweenMax.to(bookText, 0.5, { opacity: 0, x: -40, delay: 0.15 })
            TweenMax.to(slider, 0.5, { opacity: 0, delay: 0.3 })
            book.classList.add('invisible')
        }
    }

    //smart
    let smart = document.querySelector('.smart')
    let smartText = document.querySelectorAll('.smart-text-one')
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
    let sixPerCent = '-6%'
    let onePerCent = '-8%'
    let oneRem = '.7rem'
    let imageScrollHeight = windowHeight / 1.3

    function smartAnimation() {
        if (scrollFromTop > scrollPoint * 2 && scrollFromTop < scrollPoint * 3 && smart.classList.contains('invisible') || scrollFromTop > scrollPoint * 2 && scrollFromTop < scrollPoint * 3 && smart.classList.contains('phase-one')) {
            smart.classList.remove('invisible')
            smart.classList.remove('phase-one')
            TweenMax.to(smartBackground, 0.5, { width: widthSmall, delay: 0.3 })
            TweenMax.to(smartText[0], 0.5, { opacity: 1, x: 0, delay: 0.5 })
            TweenMax.to(smartText[1], 0.5, { opacity: 1, x: 0, delay: 0.55 })
            TweenMax.to(smartListOne[0], 0.5, { opacity: 1, x: 0, delay: 0.65 })
            TweenMax.to(smartListOne[1], 0.5, { opacity: 1, x: 0, delay: 0.8 })
            TweenMax.to(smartListOne[2], 0.5, { opacity: 1, x: 0, delay: 0.95 })
            TweenMax.to(smartListOne[3], 0.5, { opacity: 1, x: 0, delay: 1.1 })
            TweenMax.to(smartPolyBlock, 0, { display: none, delay: 0.45 })
            TweenMax.to(smartPolyTitle, 0.3, { opacity: 0, y: -40 })
            TweenMax.to(smartPolyText, 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(smartImg, 0.5, { opacity: 0, scale: 1, y: windowHeight, x: sixPerCent, delay: 0.15 })
            // console.log('state 1')
        } else if (scrollFromTop < scrollPoint * 2 && !smart.classList.contains('invisible')) {
            TweenMax.to(smartText[0], 0.5, { opacity: 0, x: -40 })
            TweenMax.to(smartText[1], 0.5, { opacity: 0, x: -40, delay: 0.5 })
            TweenMax.to(smartListOne[0], 0.5, { opacity: 0, x: -40, delay: 0.15 })
            TweenMax.to(smartListOne[1], 0.5, { opacity: 0, x: -40, delay: 0.3 })
            TweenMax.to(smartListOne[2], 0.5, { opacity: 0, x: -40, delay: 0.45 })
            TweenMax.to(smartListOne[3], 0.5, { opacity: 0, x: -40, delay: 0.6 })
            smart.classList.add('invisible')
            // console.log('state 2')
        } else if (scrollFromTop > scrollPoint * 3 && !smart.classList.contains('invisible') && !smart.classList.contains('phase-one')) {
            TweenMax.to(smartText[0], 0.5, { opacity: 0, x: -40 })
            TweenMax.to(smartText[1], 0.5, { opacity: 0, x: -40, delay: 0.05 })
            TweenMax.to(smartListOne[0], 0.5, { opacity: 0, x: -40, delay: 0.15 })
            TweenMax.to(smartListOne[1], 0.5, { opacity: 0, x: -40, delay: 0.3 })
            TweenMax.to(smartListOne[2], 0.5, { opacity: 0, x: -40, delay: 0.45 })
            TweenMax.to(smartListOne[3], 0.5, { opacity: 0, x: -40, delay: 0.6 })
            TweenMax.to(smartBackground, 0.5, { width: widthFull, delay: 1 })
            TweenMax.to(smartPolyBlock, 0, { display: flex, delay: 1.5 })
            TweenMax.to(smartPolyTitle, 0.5, { opacity: 1, y: 0, delay: 1.6 })
            TweenMax.to(smartPolyText, 0.5, { opacity: 1, y: 0, delay: 1.75 })
            TweenMax.to(smartImg, 0.5, { opacity: 1, scale: 2.5, y: imageScrollHeight, x: onePerCent, delay: 1.9 })
            smart.classList.add('phase-one')
            smart.classList.remove('phase-two')
            // console.log('state 3')
        } else if (scrollFromTop > scrollPoint * 3 && scrollFromTop < scrollPoint * 4 && !smart.classList.contains('invisible') && smart.classList.contains('phase-two')) {
            TweenMax.to(smartPolyTitle, 0.5, { opacity: 1, y: 0, delay: 0.65 })
            TweenMax.to(smartPolyText, 0.5, { opacity: 1, y: 0, delay: 0.8 })
            TweenMax.to(smartImg, 0.5, { opacity: 1, scale: 2.5, y: imageScrollHeight, x: onePerCent, delay: 0.5 })
            TweenMax.to(point[0], 0.3, { opacity: 0, y: 0 })
            TweenMax.to(point[2], 0.3, { opacity: 0, y: -40, delay: 0.05 })
            TweenMax.to(point[4], 0.3, { opacity: 0, y: -40, delay: 0.1 })
            TweenMax.to(point[5], 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(point[3], 0.3, { opacity: 0, y: -40, delay: 0.2 })
            TweenMax.to(point[1], 0.3, { opacity: 0, y: -40, delay: 0.25 })
            // console.log('state4')
            smart.classList.remove('phase-two')
        } else if (scrollFromTop > scrollPoint * 4 && !smart.classList.contains('phase-two')) {
            TweenMax.to(smartPolyTitle, 0.5, { opacity: 0, y: -40, delay: 0 })
            TweenMax.to(smartPolyText, 0.5, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(smartImg, 0.5, { opacity: 1, scale: 1, y: oneRem, x: sixPerCent, delay: 0.3 })
            TweenMax.to(point[0], 0.3, { opacity: 1, y: 0, delay: 0.7 })
            TweenMax.to(point[2], 0.3, { opacity: 1, y: 0, delay: 0.85 })
            TweenMax.to(point[4], 0.3, { opacity: 1, y: 0, delay: 1 })
            TweenMax.to(point[5], 0.3, { opacity: 1, y: 0, delay: 1.15 })
            TweenMax.to(point[3], 0.3, { opacity: 1, y: 0, delay: 1.3 })
            TweenMax.to(point[1], 0.3, { opacity: 1, y: 0, delay: 1.45 })
            // console.log('state5')
            smart.classList.add('phase-two')

        } else if (scrollFromTop > scrollPoint * 2 && scrollFromTop < scrollPoint * 5 && smart.classList.contains('invisible')) {
            TweenMax.to(smartImg, 0.5, { opacity: 1, scale: 1, y: oneRem, delay: 0.3 })
            TweenMax.to(point[0], 0.3, { opacity: 1, y: 0, delay: 0.7 })
            TweenMax.to(point[2], 0.3, { opacity: 1, y: 0, delay: 0.85 })
            TweenMax.to(point[4], 0.3, { opacity: 1, y: 0, delay: 1 })
            TweenMax.to(point[5], 0.3, { opacity: 1, y: 0, delay: 1.15 })
            TweenMax.to(point[3], 0.3, { opacity: 1, y: 0, delay: 1.3 })
            TweenMax.to(point[1], 0.3, { opacity: 1, y: 0, delay: 1.45 })
            smart.classList.remove('invisible')

        } else if (scrollFromTop > scrollPoint * 5 && !smart.classList.contains('invisible')) {
            TweenMax.to(smartImg, 0.5, { opacity: 1, scale: 2.5, y: imageScrollHeight, delay: 0.5 })
            TweenMax.to(point[0], 0.3, { opacity: 0, y: -40 })
            TweenMax.to(point[2], 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(point[4], 0.3, { opacity: 0, y: -40, delay: 0.3 })
            TweenMax.to(point[5], 0.3, { opacity: 0, y: -40, delay: 0.45 })
            TweenMax.to(point[3], 0.3, { opacity: 0, y: -40, delay: 0.6 })
            TweenMax.to(point[1], 0.3, { opacity: 0, y: -40, delay: 0.75 })
            smart.classList.add('invisible')
        }
    }

    let power = document.querySelector('.power')
    let powerCards = document.querySelectorAll('.power-card')
    let powerBackground = document.querySelector('.power-text')
    let powerTitle = document.querySelector('.power-text .first-title')
    let powetText = document.querySelectorAll('.power-text .first-text')
    let secondPart = document.querySelector('.second-part')
    let secondPartTitle = document.querySelector('.second-part h2')
    let secondPartText = document.querySelectorAll('.second-part p')
    let secondPartImage = document.querySelector('.second-part img')
    let powerPhase = 1

    function powerAnimation() {
        if (scrollFromTop > scrollPoint * 5 && power.classList.contains('invisible') && scrollFromTop < scrollPoint * 6 || powerPhase == 2 && scrollFromTop > scrollPoint * 5 && scrollFromTop < scrollPoint * 6) {
            //on first part
            power.classList.remove('invisible')
            // console.log('power visible')
            TweenMax.to(powerBackground, 0.5, { height: windowHeight })
            TweenMax.to(powerTitle, 0.3, { opacity: 1, x: 0, delay: 0.45 })
            TweenMax.to(powetText[0], 0.3, { opacity: 1, x: 0, delay: 0.6 })
            TweenMax.to(powetText[1], 0.3, { opacity: 1, x: 0, delay: 0.75 })
            TweenMax.to(powetText[2], 0.3, { opacity: 1, x: 0, delay: 0.9 })
            TweenMax.to(powerCards[0], 0.3, { opacity: 1, y: 0, delay: 0.75 })
            TweenMax.to(powerCards[1], 0.3, { opacity: 1, y: 0, delay: 0.9 })
            TweenMax.to(powerCards[2], 0.3, { opacity: 1, y: 0, delay: 1.05 })
            TweenMax.to(powerCards[3], 0.3, { opacity: 1, y: 0, delay: 1.2 })
            if (powerPhase == 2) {
                TweenMax.to(powerBackground, 0.3, { width: widthSmall, delay: 0.3 })
                TweenMax.to(secondPart, 0, { display: none, delay: 0.5 })
                TweenMax.to(secondPartTitle, 0.3, { opacity: 0, y: -40, delay: 0 })
                TweenMax.to(secondPartText[0], 0.3, { opacity: 0, y: -40, delay: 0 })
                TweenMax.to(secondPartText[1], 0.3, { opacity: 0, y: -40, delay: 0 })
                TweenMax.to(secondPartImage, 0.3, { opacity: 0, delay: 0.2 })
            }
            powerPhase = 1
        } else if (scrollFromTop < scrollPoint * 5 && !power.classList.contains('invisible')) {
            //up from the secton
            power.classList.add('invisible')
            TweenMax.to(powerTitle, 0.3, { opacity: 0, x: 40, delay: 0 })
            TweenMax.to(powetText[0], 0.3, { opacity: 0, x: 40, delay: 0.15 })
            TweenMax.to(powetText[1], 0.3, { opacity: 0, x: 40, delay: 0.3 })
            TweenMax.to(powetText[2], 0.3, { opacity: 0, x: 40, delay: 0.45 })
            TweenMax.to(powerCards[0], 0.3, { opacity: 0, y: -40, delay: 0 })
            TweenMax.to(powerCards[1], 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(powerCards[2], 0.3, { opacity: 0, y: -40, delay: 0.3 })
            TweenMax.to(powerCards[3], 0.3, { opacity: 0, y: -40, delay: 0.45 })
            TweenMax.to(powerBackground, 0.5, { height: 0, delay: 0.45 })
            // console.log('power invisible')
        } else if (scrollFromTop > scrollPoint * 6 && !power.classList.contains('invisible') && scrollFromTop < scrollPoint * 7 && powerPhase != 2) {
            //to second part
            // console.log('to secon part')
            TweenMax.to(powerTitle, 0.3, { opacity: 0, x: 40, delay: 0 })
            TweenMax.to(powetText[0], 0.3, { opacity: 0, x: 40, delay: 0.15 })
            TweenMax.to(powetText[1], 0.3, { opacity: 0, x: 40, delay: 0.3 })
            TweenMax.to(powetText[2], 0.3, { opacity: 0, x: 40, delay: 0.45 })
            TweenMax.to(powerCards[0], 0.3, { opacity: 0, y: -40, delay: 0 })
            TweenMax.to(powerCards[1], 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(powerCards[2], 0.3, { opacity: 0, y: -40, delay: 0.3 })
            TweenMax.to(powerCards[3], 0.3, { opacity: 0, y: -40, delay: 0.45 })
            TweenMax.to(powerBackground, 0.3, { width: widthFull, delay: 0.6 })
            TweenMax.to(secondPart, 0, { display: flex, delay: 0.6 })
            TweenMax.to(secondPartTitle, 0.3, { opacity: 1, y: 0, delay: 0.75 })
            TweenMax.to(secondPartText[0], 0.3, { opacity: 1, y: 0, delay: 0.9 })
            TweenMax.to(secondPartText[1], 0.3, { opacity: 1, y: 0, delay: 1.05 })
            TweenMax.to(secondPartImage, 0.5, { opacity: 1, delay: 1.2 })
            powerPhase = 2
        } else if (scrollFromTop > scrollPoint * 6 && power.classList.contains('invisible') && scrollFromTop < scrollPoint * 7 && powerPhase == 3) {
            power.classList.remove('invisible')
            TweenMax.to(secondPart, 0, { display: flex, delay: 0 })
            TweenMax.to(secondPartTitle, 0.3, { opacity: 1, y: 0, delay: 0.15 })
            TweenMax.to(secondPartText[0], 0.3, { opacity: 1, y: 0, delay: 0.3 })
            TweenMax.to(secondPartText[1], 0.3, { opacity: 1, y: 0, delay: 0.45 })
            TweenMax.to(secondPartImage, 0.5, { opacity: 1, delay: 0.6 })
            powerPhase = 2
            // console.log('padrt 6')
        } else if (scrollFromTop > scrollPoint * 7 && !power.classList.contains('invisible') && scrollFromTop < scrollPoint * 8 && powerPhase == 2) {
            //out of this section
            power.classList.add('invisible')
            // TweenMax.to(powerBackground, 0.3, { width: widthSmall, delay: 0.3})
            TweenMax.to(secondPart, 0, { display: none, delay: 0.5 })
            TweenMax.to(secondPartTitle, 0.3, { opacity: 0, y: -40, delay: 0.15 })
            TweenMax.to(secondPartText[0], 0.3, { opacity: 0, y: -40, delay: 0.3 })
            TweenMax.to(secondPartText[1], 0.3, { opacity: 0, y: -40, delay: 0.45 })
            TweenMax.to(secondPartImage, 0.3, { opacity: 0, delay: 0.6 })
            powerPhase = 3
        }
    }

    let people = document.querySelector('.people')
    let peopleSubtitle = document.querySelector('.people-left .subtitle')
    let peopleTitle = document.querySelector('.people-left h2')
    // let peopleDescription = document.querySelector('.people-left p.desc-1')
    let peopleCards = document.querySelectorAll('.people-card')
    let peopleBackground = document.querySelector('.people-left')

    let peopleCardsDiv = document.querySelector('.people-cards')
    let peopleScroll = false

    for (let i = 0; i < peopleCards.length; i++) {
        peopleCards[i].addEventListener('mouseenter', function () {
            let image = peopleCards[i].querySelector('img:nth-child(2)')
            TweenMax.to(image, 0.2, { scale: 1.3 })
            TweenMax.to(image, 0.2, { scale: 1, delay: 0.2 })
        })
    }

    let peopleCardsWrapper = document.querySelectorAll('.people-card-wrapper')
    let bio = document.querySelectorAll('.bio')
    let allBioHeight = []

    //bios sizes
    for (let i = 0; i < bio.length; i++) {
        let bioHeight = bio[i].getBoundingClientRect().height
        allBioHeight.push(bioHeight)
    }

    //bio hide
    for (let i = 0; i < bio.length; i++) {
        bio[i].style.height = '0'
        bio[i].style.opacity = '0'
    }

    //bio show & bio hide
    for (let i = 0; i < peopleCardsWrapper.length; i++) {
        peopleCardsWrapper[i].querySelector('.see_bio').addEventListener('click', () => {
            if (peopleCardsWrapper[i].classList.contains('active')) {
                peopleCardsWrapper[i].classList.remove('active')
                TweenMax.to(bio[i], 0, { height: 0, opacity: 0, delay: 0 })
                peopleCardsWrapper[i].querySelector('.see_bio').innerHTML = 'see bio'
                setTimeout(() => {
                    peopleCardsDiv.classList.remove('active')
                }, 300)
                peopleScroll = false
                return;
            }
            for (let y = 0; y < peopleCardsWrapper.length; y++) {
                peopleCardsWrapper[y].classList.remove('active')
                TweenMax.to(bio[y], 0, { height: 0, opacity: 0, delay: 0 })
                peopleCardsWrapper[i].querySelector('.see_bio').innerHTML = 'hide bio'

            }
            peopleCardsWrapper[i].classList.add('active')
            // if(isMobile) {
            //     TweenMax.to(bio[i], 0.3, { height: 'auto', opacity: 1, delay: 0.3 })
            // } else {
            //     TweenMax.to(bio[i], 0.3, { height: allBioHeight[i], opacity: 1, delay: 0.3 })
            // }
            TweenMax.to(bio[i], 0.3, { height: 'auto', opacity: 1, delay: 0.3 })
            peopleCardsWrapper[i].querySelector('.see_bio').innerHTML = 'hide bio'
            peopleCardsDiv.classList.add('active')
            peopleScroll = true
        })
    }

    //hide bio if click target is another part of screen
    $(document).bind('click', function (e) {
        if (!$(e.target).parents().hasClass("people-card")) {
            for (let y = 0; y < peopleCardsWrapper.length; y++) {
                peopleCardsWrapper[y].classList.remove('active')
                TweenMax.to(bio[y], 0, { height: 0, opacity: 0, delay: 0 })
                peopleCardsWrapper[y].querySelector('.see_bio').innerHTML = 'see bio'
            }
            peopleScroll = false
            setTimeout(() => {
                peopleCardsDiv.classList.remove('active')
            }, 300)

        };
    });

    //scroll auto if mouse is on this wrapper
    console.log(document.querySelectorAll('.people-card-wrapper.active'))
    peopleCardsDiv.addEventListener('mouseenter', () => {
        if (!document.querySelectorAll('.people-card-wrapper.active').length > 0) {
            return
        }
        peopleScroll = true
        console.log('mouseEnter')
        console.log(inProgress)
    })
    peopleCardsDiv.addEventListener('mouseleave', () => {
        if (!document.querySelectorAll('.people-card-wrapper.active').length > 0) {
            return
        }
        peopleScroll = false
        console.log('moouseLeave')
        console.log(inProgress)
    })


    function peopleAnimation() {
        if (scrollFromTop > (scrollPoint * 7) && people.classList.contains('invisible') && scrollFromTop < scrollPoint * 8) {
            people.classList.remove('invisible')
            // console.log('show People')
            TweenMax.to(peopleBackground, 0.5, { height: windowHeight, delay: 0.3 })
            TweenMax.to(peopleSubtitle, 0.3, { opacity: 1, x: 0, delay: 0.8 })
            TweenMax.to(peopleTitle, 0.3, { opacity: 1, x: 0, delay: 0.95 })
            // TweenMax.to(peopleDescription, 0.3, { opacity: 1, x: 0, delay: 1.1 })
            TweenMax.to(peopleCards[0], 0.3, { opacity: 1, x: 0, delay: 1.1 })
            TweenMax.to(peopleCards[1], 0.3, { opacity: 1, x: 0, delay: 1.15 })
            TweenMax.to(peopleCards[2], 0.3, { opacity: 1, x: 0, delay: 1.2 })

        } else if (scrollFromTop < scrollPoint * 7 && !people.classList.contains('invisible') || scrollFromTop > scrollPoint * 8 && !people.classList.contains('invisible')) {
            // console.log('hide People')
            TweenMax.to(peopleBackground, 0.5, { height: 0, delay: 1.05 })
            TweenMax.to(peopleSubtitle, 0.3, { opacity: 0, x: -40, delay: 0.9 })
            TweenMax.to(peopleTitle, 0.3, { opacity: 0, x: -40, delay: 0.75 })
            // TweenMax.to(peopleDescription, 0.3, { opacity: 0, x: -40, delay: 0.6 })
            TweenMax.to(peopleCards[0], 0.3, { opacity: 0, x: -40, delay: 0.75 })
            TweenMax.to(peopleCards[1], 0.3, { opacity: 0, x: -40, delay: 0.6 })
            TweenMax.to(peopleCards[2], 0.3, { opacity: 0, x: -40, delay: 0.45 })
            people.classList.add('invisible')
        }
    }

    let footer = document.querySelector('.footer')
    let footerTitle = document.querySelector('.footer h2')
    let footerButton = document.querySelector('.footer .button')

    function footerAnimation() {
        if (scrollFromTop > (scrollPoint * 8) && footer.classList.contains('invisible') && scrollFromTop < scrollPoint * 9) {
            // console.log('footer show')
            footer.classList.remove('invisible')
            TweenMax.to(footerTitle, 0.3, { opacity: 1, y: 0, delay: 0.3 })
            TweenMax.to(footerButton, 0.3, { opacity: 1, y: 0, delay: 0.45 })
        } else if (scrollFromTop < scrollPoint * 8 && !footer.classList.contains('invisible')) {
            TweenMax.to(footerTitle, 0.3, { opacity: 0, y: -40, delay: 0 })
            TweenMax.to(footerButton, 0.3, { opacity: 0, y: -40, delay: 0.15 })
            // console.log('footer hide')
            footer.classList.add('invisible')
        }
    }


    //form function
    let formDiv = document.querySelector('.form')
    let formLeftPart = document.querySelector('.form-left')
    let formImage = document.querySelector('.form-right img')
    let animItems = document.querySelectorAll('.form-anim-items')
    let showFormButton = document.querySelector('.header-all-button a')
    let showFormFooter = document.querySelector('.footer .button a')
    let hideFormButton = document.querySelector('.hide-form')

    showFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        formShow();
    })

    showFormFooter.addEventListener('click', (e) => {
        e.preventDefault();
        formShow();
    })


    hideFormButton.addEventListener('click', (e) => {

        formHide()
    })

    function formShow() {

        // document.body.classList.add('modal-active')
        formDiv.classList.add('active')

        if(!isMobile) {
            TweenMax.fromTo(formLeftPart, 0.7,
                { height: 0 },
                { height: windowHeight, delay: 0.15 })
            TweenMax.fromTo(formImage, 0.7,
                { opacity: 0 },
                { opacity: 1, delay: 0.3 })
        } else {
            TweenMax.fromTo(formLeftPart, 0.7,
                { height: 0 },
                { height: '100vh', delay: 0.15 })
            TweenMax.fromTo(formImage, 0.7,
                { opacity: 0 },
                { opacity: 1, delay: 0.3 })
        }
        

        let animation = new TimelineMax({
            immediateRender: false,
        });
        animation
            .staggerFromTo(animItems, 0.5,
                { autoAlpha: 0, x: '-.4rem' },
                { autoAlpha: 1, x: 0 }, 0.0666, .95);


    }

    function formHide() {
        // document.body.classList.remove('modal-active')
        let returnanimation = new TimelineMax({
            immediateRender: false,
        });
        
        TweenMax.to(formLeftPart, 0.5, { height: 0, delay: 0.75 })
        TweenMax.to(formImage, 0.5, { opacity: 0, delay: 0.75 })

        returnanimation
            .staggerTo(animItems, 0.5,
                { autoAlpha: 0, x: '-.4rem' }, 0.0666, 0);

        setTimeout(() => {
            formDiv.classList.remove('active')
        }, 1250)
    }

    let sucsessChapter = document.querySelector('.succsess')

    function showSucsess() {
        TweenMax.fromTo(sucsessChapter, 0.3,
            { autoAlpha: 0, y: '-.4rem' },
            { autoAlpha: 1, y: 0, delay: 1.3 })
        TweenMax.to(sucsessChapter, 0.5, { autoAlpha: 0, y: '-.4rem', delay: 3 })
    }
    
    let validform = false
    let errorSpan = document.querySelector('.error-span')
    let emailInput = document.querySelector('#email')
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    function validate() {
        // const $result = $("#result");
        const email = $("#email").val();
      
        if (validateEmail(email)) {
            errorSpan.classList.remove('active')
            validform = true
        } else {
            errorSpan.classList.add('active')
        }
        return false;
    }
    emailInput.addEventListener('change', validate)

    $("#form").submit(function (e) { //устанавливаем событие отправки для формы с id=form
        e.preventDefault()
        if(validform) {
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
                type: 'POST', //Метод отправки
                url: 'send.php', //путь до php фаила отправителя
                data: form_data,
                success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    formHide();
                    showSucsess();
                }
            });
        }
        
    });

    //scroll core   
    window.addEventListener('wheel', findScrollDirectionOtherBrowsers);
    window.addEventListener('DOMMouseScroll', findScrollDirectionOtherBrowsers); // older FF
    // window.addEventListener(wheelEvent, findScrollDirectionOtherBrowsers); // modern desktop
    window.addEventListener('touchmove', findScrollDirectionOtherBrowsers); // mobile
    window.addEventListener('keydown', findScrollDirectionOtherBrowsers);

    let currentScreen = 0
    let inProgress = false

    function findScrollDirectionOtherBrowsers(event) {
        if (inProgress || isMobile || peopleScroll) {
            return
        }
        var delta;
        if (event.wheelDelta) {
            delta = event.wheelDelta;
        } else {
            delta = -1 * event.deltaY;
        }
        if (delta < 0) {
            if (currentScreen > 8) {
                return
            }
            console.log('down')
            next();
        } else if (delta > 0) {
            if (currentScreen < 1) {
                return
            }
            console.log('up')
            prev()
        }
    }

    function inprogressFalse() {
        setTimeout(function () {
            inProgress = false;
        }, 2000)
    }

    function next() {
        if (inProgress) {
            return
        }
        currentScreen = currentScreen + 1
        inProgress = true
        let nextScrollPosition = scrollPoint * currentScreen
        TweenMax.to(window, { duration: 2, scrollTo: nextScrollPosition, onComplete: () => { inProgress = false } });
    }



    function prev() {
        if (inProgress) {
            return
        }
        currentScreen = currentScreen - 1
        inProgress = true
        let nextScrollPosition = scrollPoint * currentScreen - 5
        TweenMax.to(window, { duration: 0, scrollTo: nextScrollPosition, onComplete: () => { inprogressFalse() } });
    }

    let openingScroll = document.querySelector('.opening-text-scroll')
    openingScroll.addEventListener('click', function () {
        next()
    })
    let chapterLinks = document.querySelectorAll('.header-all-links a')
    for (let i = 0; i < 3; i++) {
        chapterLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
        })
    }

    function killAllTweens() {
        TweenMax.set(secondPartImage, { clearProps: "all" });
        TweenMax.set(secondPartText, { clearProps: "all" });
        TweenMax.set(secondPartTitle, { clearProps: "all" });
        TweenMax.set(powerBackground, { clearProps: "all" });
        for (let i = 0; i < 2; i++) {
            TweenMax.set(powetText[i], { clearProps: "all" });
        }
        for (let i = 0; i < 6; i++) {
            TweenMax.set(point[i], { clearProps: "all" });
        }
        for (let i = 0; i < 4; i++) {
            TweenMax.set(powerCards[i], { clearProps: "all" });
            // TweenMax.set(bookListOne[i], {clearProps:"all"});
            TweenMax.set(smartListOne[i], { clearProps: "all" });
        }

    }

    //scroll on bio



});