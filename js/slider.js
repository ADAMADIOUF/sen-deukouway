const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})
let counter = 0
nextBtn.addEventListener('click', function () {
  counter++
  carousel()
})

prevBtn.addEventListener('click', function () {
  counter--
  carousel()
})

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }
  if (counter > 0) {
    prevBtn.style.display = 'block'
  } else {
    prevBtn.style.display = 'none'
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

prevBtn.style.display = 'none'


// Aos
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
})