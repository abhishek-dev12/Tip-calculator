

 let billField = document.getElementById('billTotalInput')
 let billTotal = document.getElementById('total-bill-per-person')
 let tip = document.getElementById('tipTextInput')
 let plus = document.getElementById('plusButton')
 let minus = document.getElementById('minusButton')
 let spanText = document.getElementById('span-text')

  // calculate the bill
billTotal.innerHTML = Number('0').toFixed(2)
 function calculate (){
   // billTotal.innerText = billField.value
    let number = (tip.value / 100 * billField.value)
    let newnumber = number + Number(billField.value)
    billTotal.innerText = newnumber.toFixed(2)
}

//increase the number of people to split the bill
  let i = 1 
  function increase(){
      spanText.innerHTML = ++i
      let number = (tip.value / 100 * billField.value)
      let newnumber = number + Number(billField.value)
      billTotal.innerHTML = (newnumber / spanText.innerHTML).toFixed(2)
}
 //decrease the number of people of calculate the bill
 function decrease(){
     if(i > 1){
      spanText.innerHTML = --i
     let number = (tip.value / 100 * billField.value)
     let newnumber = number + Number(billField.value)
     billTotal.innerHTML = (newnumber / spanText.innerHTML).toFixed(2)
     if(i == 0){
        return billTotal.innerHTML
     }
  }
   
}
   
  