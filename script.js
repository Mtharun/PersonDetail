
var form=document.getElementById('form')

form.addEventListener('submit',(e) => {
e.preventDefault()
var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var address = document.getElementById('address')
var pincode = document.getElementById('pincode')
var gender = document.getElementById('gender')
var food = document.getElementById('food')
var state = document.getElementById('state')
var country = document.getElementById('country')

var array = [firstName,lastName,address,pincode,gender,food,state,country]

var tableRow = document.createElement('tr')
var count = 0;
for(var i = 0; i < array.length; i++){
  if(array[i].value  != ''){
    var tableData = document.createElement('td')
    tableData.innerHTML=array[i].value
    tableRow.append(tableData)
    count++
  
  }
  
}
if(count > 2) {
  document.querySelector('tbody').append(tableRow)
}else{
  alert("choose at least 2 options")
}




for(let i of array){
  i.value = ''
}

})