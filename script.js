
var cell = document.querySelectorAll('div');
var paint = document.querySelectorAll('aside');
var activeColor = "white";




 for(var i = 0; i < cell.length; i++){
  cell[i].addEventListener("click", function(){
    this.className = "cell";
    this.classList.add(activeColor);
  })
  }

for(var i = 0; i < paint.length; i++){
  paint[i].addEventListener("click", function(){
    paint.forEach(paintColor => {
  paintColor.classList.remove('paintSelected');
    })
    this.classList.add('paintSelected');
    activeColor = this.dataset.color;
    console.log(activeColor);
  })
  }
