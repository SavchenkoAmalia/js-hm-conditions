//! 1

// const field1 = prompt("Введіть значення для поля 1:");
// const field2 = prompt("Введіть значення для поля 2:");

// if (field2 && field2) {
//     alert("Обидва поля заповнені");
// }
// else {
//     alert("Не всі поля заповнені");
// }
 
// console.log(field1);
// console.log(field2);

//! 2 

// const sum = 10;
// const field1 = prompt("Введіть будь-яку суму:");

// if (field1 > sum ){
//     alert("Сума більша за 10")
// }
// else {
//     alert("Сума менша або дорівнює 10");
// }

//! 3

// const field1 = prompt("Введіть значення для поля:");
// const js = 'JavaScript';

// if (field1.includes(js)){
//     alert("Текст містить слово JavaScript");
// }
// else {
//     alert("Текст не містить слово JavaScript");
// }

//! 4

// const field1 = prompt("Введіть будь-яку суму:");

// if (field1 >= 10 &&  field1 <=20){
//     alert("Число входить в діапазон від 10 до 20");
// }
// else {
//     alert( "Число не входить в діапазон від 10 до 20");
// }

//! 5


function validateName(userName){
    if (userName.length < 3) {
        alert("Ім'я повинно містити не менше 3 символів.");
        return false;
    }
        return true;
}

function validateEmail(email) {
    if (!email.includes('@') || email.lastIndexOf('.') <= email.indexOf('@')) {
        alert('Електронна пошта повинна містити символ "@" та крапку після нього');
        return false;
    }
        return true;
}

function validatePassword(password) {
    if (password.length < 6) {
        alert('Пароль повинен містити не менше 6 символів.');
        return false;
    }
        return true;
}

userName;
do {
    userName = prompt("Введіть ваше ім'я:");
} while (!validateName(userName));


let email;
do {
    email = prompt("Введіть ваш email:");
} while (!validateEmail(email));


let password;
do {
    password = prompt("Введіть ваш пароль:");
} while (!validatePassword(password));


alert("Дані введені правильно!");



