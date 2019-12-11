var multiply ={
  add: {
    x2: [0,45],
    x3:[91,135],
    x4:[181,225],
    x5:[271,315]
  },
    subtract: {
      x2: [46,90],
      x3: [136,180],
      x4: [226,270],
      x5: [316,360]
  }
}
var bank = 100000
var bankText = $('#bankText')
bankText.text(bank)

var reset =$("#Reset")
var modal =$(".modal")
var cashOutBtn =$("#Cash-out")
var modalText =$("#modal-text")
var close = $('.close')

var wheel = $("#wheel")
var button  = $("#spin-btn")
button.click(function(e){

  var rando =Math.floor(Math.random() *360)
    wheel.css('transform' , 'rotate('+rando+'deg)')

  if (rando > 0 && rando <=45){

  bank = bank + (20000 * 2)
  bankText.text(bank)
 }
  else if ( rando >45 && rando <=90){
   bank = bank -(20000 * 2)
   bankText.text(bank)
  }
  else if (rando > 90 && rando <=135){
  bank = bank + (20000 * 3)
  bankText.text(bank)
  }
  else if(rando >135 && rando <=180){
  bank = bank -(20000 * 3)
  bankText.text(bank)
  }
  else if(rando >180 && rando <=225){
  bank = bank + (20000 + 80000)
  bankText.text(bank)
  }
  else if(rando >225 && rando <=270){
  bank = bank -(20000 * 4)
  bankText.text(bank)
  }
  else if(rando >270 && rando <=315){
  bank = bank + (20000 * 5)
  bankText.text(bank)
  }
  else if(rando >315 && rando <=360){
  bank = bank -(20000 * 5)
  bankText.text(bank)
  }
  if (bank <= 0 ){
    modalText.text("You Lose")
    modal.css ('display','block')
    wheel.css('transform' , 'rotate(0deg)')
    bankText.text(100000)
  }
});

reset.click(function(){
  wheel.css('transform' , 'rotate(0deg)')
  bankText.text(100000)
})

cashOutBtn.click(function(){
 modalText.text("You Won       " + (bank))
  modal.css ('display','block')
  wheel.css('transform' , 'rotate(0deg)')
  bankText.text(20000)
})
close.click(function(){
  modal.css('display', 'none')
})

