let close = document.querySelector('.btn-menu')

close.addEventListener('click', function() {
  var menu = document.querySelector('.menu')
  if (menu.style.display == 'none') {
    menu.style.display = 'show'
  }
})