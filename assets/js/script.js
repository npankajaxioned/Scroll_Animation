var boxes = document.querySelectorAll('.box')

var viewport_height = window.innerHeight 
window.addEventListener('scroll',showBoxes)

function showBoxes() {
  
  boxes.forEach(function(box) {
    var box_top = box.getBoundingClientRect().top;
    if(box_top < viewport_height) {
      box.classList.add('show')
    }
    else{
      box.classList.remove('show')
    }
  })
}