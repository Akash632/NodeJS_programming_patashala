let name_input = document.getElementById('name');
let email_input = document.getElementById('email');
let password_input = document.getElementById('password');
let phone_input = document.getElementById('phone');
let address_input = document.getElementById('address');

function btnSubmit(){
    let name_value = name_input.value;
    let email_value = email_input.value;
    let password_value = password_input.value;
    let phone_value = phone_input.value;
    let address_value = address_input.value;

    console.log(name_value, email_value, password_value, phone_value,address_value);
}