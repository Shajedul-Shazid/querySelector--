const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
   const checkedRadio = document.querySelector('input[type="radio"]:checked')
   console.log(checkedRadio)
})