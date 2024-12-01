const navItem = document.querySelector('.header-nav-item')
const burgerMenu = document.querySelector('.header-nav-burger')
const navBurgerLine = document.querySelectorAll('.nav-burger-line')
const buttons = document.querySelectorAll('.faq-card-openClose')

let count = 1
buttons.forEach(function(element){
  element.addEventListener('click',function(){
    element.parentElement.nextElementSibling.nextElementSibling.classList.toggle('active-faq')
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
for (let index = 0; index < 10; index++) {
  console.log(index)
  
}




















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