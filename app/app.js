/* 
  Kullanıcı butona bastığında random şifre oluşturulacak ve checkboxlarda seçtiğine göre büyükse büyük harf içerek yoksa normal bir şekilde şifre oluşturulacak
*/

const passwordDiv = document.querySelector('.pswrd')
const buttonRandom = document.querySelector('.btn-rndm')
const value = document.querySelector('.value')

const copyButton = document.querySelector('.copy-btn')

const upperInput = document.getElementById('upper')
const lowerInput = document.getElementById('lower')
const numberInput = document.getElementById('number')
const specialInput = document.getElementById('special')

let buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let kucukHarf = "abcdefghijklmnopqrstuvwxyz"

let number =  "0123456789"

let special = "@€+${[]}-_/*-+~#£<>|"

let password = ""

let error = "Lütfen bir koşul seçin"

const allChars = buyukHarf+kucukHarf+number+special


copyButton.onclick = function() {
  copyText(passwordDiv)
}


function copyText(htmlElement) {
  if (!htmlElement){
    return alert('no')
  }
  let text = htmlElement.innerText;
  let inputElement = document.createElement('input')
  inputElement.setAttribute('value', text)
  document.body.appendChild(inputElement)
  inputElement.select()
  document.execCommand('copy')
  inputElement.parentNode.removeChild(inputElement)
}



function randomPassword(sliderLength) {
  password = ""

  const isUpperChecked = upperInput.checked;
  const isLowerChecked = lowerInput.checked;
  const isNumberChecked = numberInput.checked;
  const isSpecialChecked = specialInput.checked;

  const selectedChars = [];
  
  if (isUpperChecked) {
    selectedChars.push(...buyukHarf);
  }

  if (isLowerChecked) {
    selectedChars.push(...kucukHarf);
  }

  if (isNumberChecked) {
    selectedChars.push(...number);
  }

  if (isSpecialChecked) {
    selectedChars.push(...special);
  }

  if(selectedChars.length == 0 ||selectedChars == undefined){
    passwordDiv.innerHTML = 'lütfen gir'
  }
 
  while (sliderLength > password.length) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }
  
 
    // password += buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
    // password += kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
    // password += number[Math.floor(Math.random() * number.length)]
    // password += special[Math.floor(Math.random() * special.length)]
    // while(sliderLength > password.length) {
    //   password += allChars[Math.floor(Math.random() * allChars.length)]

    //  }

  
  passwordDiv.innerHTML = password
}




var sliderMax = 20
const slider = document.getElementById('slider')
slider.setAttribute('max',sliderMax)
slider.setAttribute('min',1)
value.textContent = slider.value

slider.addEventListener('input', function(e) {
  passwordDiv.innerHTML = ""
  value.textContent = slider.value
})


buttonRandom.addEventListener('click',function() {
  console.log('tıklandı')
  password = ""
  passwordDiv.innerHTML = ""
  const params = parseInt(slider.value)
  randomPassword(params)
})
