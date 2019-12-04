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
var bank = 1000000
var bankText = $('bankText')
bankText.innerText = bank


 var wheel = $("#wheel")
 var button  = $("#spin-btn")
button.addEventListener ("click", function(e){
  var rando =Math.floor(Math.random() *360)
    wheel.style.transform = 'rotate('+rando+'deg)'
  console.log(rando)
  if (rando > 0 && rando <=45){
    console.log('Add x2')
    bank = bank + (20000 * 2)
    console.log(bank)
   bankText.innerText =bank
 
  }
  else if ( rando >45 && rando <=90){
    console.log('Subtract x2')
    bank = bank -(20000 * 2)
    console.log(bank)
    bankText.innerText =bank
  }
  else if (rando > 90 && rando <=135){
    console.log('Add x3')
    bank = bank + (20000 * 3)
    console.log(bank)
    bankText.innerText =bank
  }
  else if(rando >135 && rando <=180){
    console.log("Subtract x3")
    bank = bank -(20000 * 3)
    console.log(bank)
    bankText.innerText =bank
  }
  else if(rando >180 && rando <=225){
    console.log('Add x4')
    bank = bank + (20000 + 80000)
    console.log(bank)
    bankText.innerText =bank
  }
    else if(rando >225 && rando <=270){
    console.log('Subtract x4')
      bank = bank -(20000 * 4)
    console.log(bank)
      bankText.innerText =bank
  }
      else if(rando >270 && rando <=315){
    console.log('Add x5')
        bank = bank + (20000 * 5)
    console.log(bank)
        bankText.innerText =bank
  }
      else if(rando >315 && rando <=360){
    console.log('Subtract x5')
        bank = bank -(20000 * 5)
    console.log(bank)
        bankText.innerText =bank
  }
});


 


