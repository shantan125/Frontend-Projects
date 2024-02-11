document.addEventListener('DOMContentLoaded', function(){
    const display = document.querySelector('.display');
    const operatorbtn = document.querySelectorAll('.operator');

 operatorbtn.forEach(button=>{
    button.addEventListener('click',function(){
        const operator = button.value;
        display.value+=operator;
    });
 });

 const numberbtn = document.querySelectorAll('.number');

 numberbtn.forEach(button=>{
    button.addEventListener('click',function(){
        const number = button.value;
        display.value+=number;
    });
 });

const calculate = document.querySelector('.calculate');
    calculate.addEventListener("click", function () {
      display.value = eval(display.value);
    });

const clearbtn = document.querySelector('.clear');

clearbtn.addEventListener('click',function(){
    display.value='';
});

});