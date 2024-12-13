const navItem = document.querySelector('.header-nav-item')
const burgerMenu = document.querySelector('.header-nav-burger')
const navBurgerLine = document.querySelectorAll('.nav-burger-line')
const buttons = document.querySelectorAll('.faq-card-openClose')
const buttonsModal = document.querySelectorAll('.item-btn')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')
const modalPrice = document.querySelector('.modal-price')
const cardData = document.querySelectorAll('.deck-item-text')
const cardDataFirst=[`Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)`,`8 GB`,`Windows 10 64-bit`,`NVIDIA GTX`,`5.1`,`5.1`,`70 GB`,`4
GB`]
const cardDataFirstHidden = [
  `Intel i7-12700K (12 core 3.6 GHz) or AMD Ryzen 7 5800X (8 core 3.8 GHz)`,
  `16 GB`,
  `Windows 10/11 64-bit`,
  `NVIDIA RTX 3060`,
  `7.1`,
  `7.1`,
  `100 GB`,
  `8 GB`
];
const cardDataTwo = document.querySelectorAll('.deck-item-two')
const carddataTwo =[ `PS4`,`20.4.2018`,` Sony Interactive Entertainment Europe`,`>Action, Adventure`,`English, Polish, Russian`,`English, Dutch, Polish, Russian, Turkish`]
const carddataTwoHidden = [
  `PS5`,
  `19.11.2020`,
  `Sony Interactive Entertainment`,
  `>Action, Adventure, RPG`,
  `English, Polish, Russian, Japanese`,
  `English, Dutch, Polish, Russian, Turkish, German`
];
const switchOne = document.querySelector('.switch-one')
const switchTwo = document.querySelector('.switch-two')
let countOne = 1

switchOne.addEventListener('click',function(){
  countOne++
    if(countOne % 2 == 0){
      cardData.forEach(function(element,index){
        element.textContent  = cardDataFirstHidden[index]
      })
    } else{
      cardData.forEach(function(element,index){
        element.textContent  = cardDataFirst[index]
      })
    }
  })

  let countTwo = 1

switchTwo.addEventListener('click',function(){
  countTwo++
    if(countTwo % 2 == 0){
      cardDataTwo.forEach(function(element,index){
        element.textContent  =  carddataTwoHidden[index]
      })
    } else{
      cardDataTwo.forEach(function(element,index){
        element.textContent  = carddataTwo[index]
      })
    }
  })

closeModal.addEventListener('click',function(){
  overlay.classList.remove('open-modal')
})
buttonsModal.forEach(function(element){
  element.addEventListener('click',function(){
overlay.classList.add('open-modal')
  })
})
let count = 1
buttons.forEach(function(element){
  element.addEventListener('click',function(){
    element.parentElement.nextElementSibling.nextElementSibling.classList.toggle('active-faq')
    modalPrice.textContent = element.previousElementSibling.lastElementChild.textContent
    
    // тогл добовляет класс если его нет и убирает если есть
  })
})
burgerMenu.addEventListener('click',function(){
    count++
    if(count % 2 == 0){
      navItem.style.transform = 'translateX(0%)'
      navBurgerLine.forEach(function(element,index){
          if(index == 0 || index == 2){
              element.style.width = '12.5px'
              element.style.background = '#8856D9'
          }
          else{
              element.style.width = '25px'
              element.style.background = '#8856D9'
          }
      })
    }else{
      navItem.style.transform = 'translateX(-150%)'
      navBurgerLine.forEach(function(element,index){
        if(index == 0 || index == 2){
            element.style.width = '25px'
            element.style.background = 'white'
        }
        else{
            element.style.width = '12.5px'
            element.style.background = 'white'
        }
    })
    }
})
document.querySelector('.trailer-btn').addEventListener('click', function() {
  const trailerDiv = document.querySelector('.trailer');
  const trailerVideo = document.getElementById('trailerVideo');

  // Заменили фон на видео и показали его
  trailerDiv.style.background = 'none'; // убираем фон
  trailerVideo.style.display = 'block'; // показываем видео
  trailerVideo.play(); // запускаем видео
});




















const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });