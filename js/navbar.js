const navbar = document.querySelector('#nav')
const navToggle = document.querySelector('.btn-toggle')
const btnClose = document.querySelector('.nav-close')
const sidebar = document.querySelector('.sidebar')
const date = document.querySelector('#date');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
navToggle.addEventListener('click', () => {
  sidebar.classList.add('showNav')
})
btnClose.addEventListener('click', () => {
  sidebar.classList.remove('showNav')
 })

// const scrollLinks = document.querySelectorAll('.scroll-link')
// scrollLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault()
//     links.classList.remove('show-links')

//     const id = e.target.getAttribute('href').slice(1)
//     const element = document.getElementById(id)

//     let position
//     if (navbar.classList.contains('fixed')) {
//       position = element.offsetTop - 62
//     } else {
//       position = element.offsetTop - 124
//     }
//     if (window.innerWidth < 992) {
//       if (navbar.classList.contains('fixed')) {
//         position = element.offsetTop - 62
//       } else {
//         position = element.offsetTop - 332 - 62
//       }
//     }
//     window.scrollTo({
//       left: 0,

//       top: position,
//       behavior: 'smooth',
//     })
//   })
// })

 date.innerHTML = new Date().getFullYear()


// contact

window.addEventListener('DOMContentLoaded', function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById('my-form')
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById('status')

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset()
    status.classList.add('success')
    status.innerHTML = 'Thanks!'
  }

  function error() {
    status.classList.add('error')
    status.innerHTML = 'Oops! There was a problem.'
  }

  // handle the form submission event

  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    var data = new FormData(form)
    ajax(form.method, form.action, data, success, error)
  })
})

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}
