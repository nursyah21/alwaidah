function navFunc(){
  document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active')
  document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active')
}

(function generateSlide(){
  var gen = ''
  data.forEach(e=>{
    gen += `<div class="swiper-slide">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="${e.img}">
        </figure>
      </div>
      
      <div class="card-content">
        <div class="content">
          <a href="${e.link}">
            ${e.title} <br>
          </a>
          <time class="is-size-7">${e.date}</time>
        </div>
      </div>
    </div>
  </div>`
  })
  document.getElementsByClassName('swiper-wrapper')[0].innerHTML = gen
})()

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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
})