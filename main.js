
// //헤더 배너 닫기 이벤트

// document.querySelectorAll('.close').forEach(button => {
//     button.addEventListener('click', () => {
//     const headerSwiper = document.querySelector('.swiper.headerSwiper');
//     headerSwiper.style.display = 'none'; 
//     const navArea = document.querySelector('.nav-area');
//     navArea.style.transform = 'translateY(-5px)'; 
//     navArea.style.transition = 'transform 0.7s ease'; 

//     });
// });

// //헤더 배너 스와이프
// var swiper = new Swiper(".headerSwiper", {
//     slidesPerView: '1', 
//     centeredSlides: true, 
//     loop: true, 
//     autoplay: {
//         delay: 5000,  
//         disableOnInteraction: false,
//     },
// });

// //메인 스와이프 
// var swiper = new Swiper(".mainSwiper", {
//     slidesPerView: 'auto',
//     centeredSlides: true, 
//     loop: true, 
//     spaceBetween: 0, 
//     pagination: {
//         el: ".swiper-pagination", 
//         type: "progressbar", 
//         clickable: true,
//     },
//     // autoplay: {
//     //     delay: 3000,  
//     //     disableOnInteraction: false,
//     // },
// });

// //제품 스와이프 (공용)

// var swiper = new Swiper(".proSwiper", {
//     slidesPerView: 'auto', 
//     spaceBetween: 8, 
//     loop: false,
//     pagination: {
//         el: ".swiper-pagination", 
//         type: "progressbar", 
//     },
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
// });

// //2, 스와이프

// var swiper = new Swiper(".pufferSwiper", {
//     slidesPerView: 2,
//     spaceBetween: 16, // 슬라이드 간격 무한 반복
// });

// //sc-with 스와이프

// var swiper = new Swiper(".withSwiper", {
//     slidesPerView: 3.5,
//     spaceBetween: 30,
// });



// // sc-main의 탭 스크립트
// document.querySelectorAll('.sc-new .nav-group .nav-text').forEach((tab) => {
//     tab.addEventListener('click', function (e) {
//         e.preventDefault();

//         const container = tab.closest('.sc-new');

//         container.querySelectorAll('.nav-group .nav-text').forEach((item) => {
//             item.classList.remove('active');
//             item.querySelector('a').setAttribute('aria-selected', 'false');
//         });

//         this.classList.add('active');
//         this.querySelector('a').setAttribute('aria-selected', 'true');

//         container.querySelectorAll('.tab-content').forEach((content) => {
//             content.classList.remove('active');
//         });


//         const tabId = this.getAttribute('data-tab');
//         container.querySelector(tabId).classList.add('active');
//     });
// });

// // sc-best의 탭 스크립트
// document.querySelectorAll('.sc-best .nav-group .nav-text').forEach((tab) => {
//     tab.addEventListener('click', function (e) {
//         e.preventDefault();


//         const container = tab.closest('.sc-best');

//         container.querySelectorAll('.nav-group .nav-text').forEach((item) => {
//             item.classList.remove('active');
//             item.querySelector('a').setAttribute('aria-selected', 'false');
//         });

//         this.classList.add('active');
//         this.querySelector('a').setAttribute('aria-selected', 'true');

//         container.querySelectorAll('.tab-content').forEach((content) => {
//             content.classList.remove('active');
//         });

//         const tabId = this.getAttribute('data-tab');
//         container.querySelector(tabId).classList.add('active');
//     });
// });

// // active추가 
// document.querySelectorAll('.sc-on .viedo-content').forEach((item) => {
//     item.addEventListener('mouseenter', function () {

//         document.querySelectorAll('.sc-on .viedo-content').forEach((content) => {
//             content.classList.remove('viedo-active');
//         });


//         this.classList.add('viedo-active');
//     });

// //마우스 제거시 제거 
//     item.addEventListener('mouseleave', function () {

//         document.querySelectorAll('.sc-on .viedo-content').forEach((content) => {
//             content.classList.remove('viedo-active');
//         });


//         const firstContent = document.querySelector('.sc-on .viedo-content:first-child');
//         if (firstContent) {
//             firstContent.classList.add('viedo-active');
//         }
//     });
// });


// 헤더 배너 닫기 이벤트
// (function handleHeaderClose() {
//     document.querySelectorAll('.close').forEach(button => {
//         button.addEventListener('click', () => {
//             document.querySelector('.swiper.headerSwiper').style.display = 'none';
//             const navArea = document.querySelector('.nav-area');
//             navArea.style.transform = 'translateY(-5px)';
//             navArea.style.transition = 'transform 0.7s ease';
//         });
//     });
// })();

$('#header .close').click(function(){
    $('#header .swiper').addClass('hidden');
})


$('#header .logo-area').hover(function () {
    $('.nav-menuborad').slideUp(300);
 });

$('#header .nav-group .left li.other').hover(function () {
    $('.nav-menuborad').slideUp(300);
 });

 $('main,footer').mouseover(function(){
    $('.nav-menuborad').slideUp(300);
 })
// $('.nav-menuborad').mouseleave(function () {
//     if (!$('#header').hasClass('hov')) {
//         $('.nav-menuborad').slideUp(300);
//     }
//  });


$('#header .nav-group .left .item').hover(function(){
    idx = $(this).index();
    tabName = $(this).find('a').data('tab');

    $('#header').addClass('hov');

    $('.nav-menuborad').show();

    $('.nav-menuborad .title-roll').css('--idx',idx);
    $(tabName).addClass('active').siblings().removeClass('active');



})






// nav-menuborad 열고 닫기 이벤트
// const navMenuBoard = document.querySelector('.nav-menuborad');
// const navGroup = document.querySelector('.nav-group');

// navGroup.addEventListener('mouseenter', () => {
//     navMenuBoard.style.display = 'block'
//     navMenuBoard.style.height = '0px'; 
//     navMenuBoard.style.overflow = 'hidden'; 
//     setTimeout(() => {
//         navMenuBoard.style.transition = 'height 0.3s ease'; 
//         navMenuBoard.style.height = '300px'; 
//     }, 10);
// });

// navMenuBoard.addEventListener('mouseleave', () => {
//     navMenuBoard.style.height = '0px';
//     setTimeout(() => {
//         navMenuBoard.style.display = 'none';
//         navMenuBoard.style.transition = ''; 
//     }, 150); 
// });

// document.querySelectorAll('.nav-wrap li').forEach((menuItem, index) => {
//     menuItem.addEventListener('mouseenter', function () {

//         document.querySelectorAll('.nav-menuborad .category').forEach(category => {
//             category.classList.remove('active', 'on');
//         });


//         document.querySelectorAll('.nav-wrap li').forEach(item => {
//             item.classList.remove('active', 'on');
//         });


//         menuItem.classList.add('active', 'on');
//         const categoryToShow = document.querySelectorAll('.nav-menuborad .category')[index];
//         if (categoryToShow) {
//             categoryToShow.classList.add('active', 'on');
//         }
//     });
// });

// // nav-menuborad를 숨기기 위한 마우스 아웃 이벤트
// document.querySelector('.nav-menuborad').addEventListener('mouseleave', function () {

//     document.querySelectorAll('.nav-menuborad .category').forEach(category => {
//         category.classList.remove('active', 'on');
//     });

//     document.querySelectorAll('.nav-wrap li').forEach(item => {
//         item.classList.remove('active', 'on');
//     });
// });


let lastScroll = 0;

$(window).scroll(function () { 
    curr = $(this).scrollTop();

    if (curr > 0) {
        if (curr > lastScroll) {
            console.log('내림')
            $('#header').addClass('hide');
            $('#header').removeClass('show');
        }else{
            $('#header').removeClass('hide');
            $('#header').addClass('show');
        }
        lastScroll = curr;
    }else{
        $('#header').removeClass('hide');
        $('#header').removeClass('show');
    }

  

});

$(window).trigger('scroll');


// let lastScrollY = window.scrollY;
// const navGroups = document.querySelector('.nav-group');

// window.addEventListener('scroll', () => {
//     console.log("!@@@@@@@@@@@@@@");
//     console.log("!@@@@@@@@@@@@@@");
//     console.log("!@@@@@@@@@@@@@@");
//     console.log("!@@@@@@@@@@@@@@");
//     console.log("!@@@@@@@@@@@@@@");
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         navGroups.style.transform = 'translateY(-100%)';
//     } else {

//         navGroups.style.transform = 'translateY(0)';
//     }
//     lastScrollY = currentScrollY; 
// });


// 공통 Swiper 초기화 함수
function initSwiper(selector, options) {
    return new Swiper(selector, options);
}

// 헤더 배너 스와이프
initSwiper(".headerSwiper", {
    slidesPerView: '1',
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// 메인 스와이프
initSwiper(".mainSwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
    },
        autoplay: {
        delay: 3000,  
        disableOnInteraction: false,
    },
});

// 제품 스와이프 (공용)
initSwiper(".proSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

// 2 스와이프
initSwiper(".pufferSwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
});

// sc-with 스와이프
initSwiper(".withSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
});
// sc-with 스와이프
initSwiper(".onSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
});

var swiper = new Swiper(".pickSwiper", {
    slidesPerView: 4, // 슬라이드 크기를 자동 조정
    spaceBetween: 10, // 슬라이드 간격을 20px로 설정
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 탭 스크립트 공통 함수
function initTabSwitching(containerSelector, tabSelector, contentSelector) {
    document.querySelectorAll(`${containerSelector} ${tabSelector}`).forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const container = tab.closest(containerSelector);

            // 모든 탭에서 active 클래스 제거
            container.querySelectorAll(tabSelector).forEach(item => {
                item.classList.remove('active');
                item.querySelector('a').setAttribute('aria-selected', 'false');
            });

            // 클릭된 탭 활성화
            this.classList.add('active');
            this.querySelector('a').setAttribute('aria-selected', 'true');

            // 모든 콘텐츠 숨김
            container.querySelectorAll(contentSelector).forEach(content => {
                content.classList.remove('active');
            });

            // 클릭된 탭과 연결된 콘텐츠 활성화
            const tabId = this.getAttribute('data-tab');
            container.querySelector(tabId).classList.add('active');
        });
    });
}

// sc-new와 sc-best의 탭 스크립트 초기화
initTabSwitching('.sc-new', '.nav-group .nav-text', '.tab-content');
initTabSwitching('.sc-best', '.nav-group .nav-text', '.tab-content');


(function handleImageOverlay() {
    const container = document.querySelector(".sc-on");
    if (!container) return;

    const imgWraps = container.querySelectorAll(".img-wrap");
    let activeIndex = 0; // 첫 번째 이미지를 기본 활성화

    function setActiveImage(index) {
        imgWraps.forEach((wrap, i) => {
            const playIcon = wrap.parentElement.querySelector("i");
            const textElement = wrap.parentElement.querySelector(".text");

            if (i === index) {
                wrap.classList.add("active");
                if (playIcon) playIcon.style.display = "block";
                if (textElement) textElement.style.color = "#ffffff";
            } else {
                wrap.classList.remove("active");
                if (playIcon) playIcon.style.display = "none";
                if (textElement) textElement.style.color = "rgba(255, 255, 255, .5)";
            }
        });
    }

    // 첫 번째 이미지 기본 활성화
    setActiveImage(activeIndex);

    imgWraps.forEach((wrap, index) => {
        wrap.addEventListener("mouseenter", () => setActiveImage(index));
        wrap.addEventListener("mouseleave", () => setActiveImage(activeIndex));
    });
})();