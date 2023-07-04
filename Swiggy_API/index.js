let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let password_input = document.getElementById("password");
let phone_input = document.getElementById("phone");
let address_input = document.getElementById("address");

function btnSubmit() {
  let name_value = name_input.value;
  let email_value = email_input.value;
  let password_value = password_input.value;
  let phone_value = phone_input.value;
  let address_value = address_input.value;

  let data = {
    name: name_value,
    email: email_value,
    password: password_value,
    phone: phone_value,
    address: address_value,
  };
  axios.post("http://localhost:5000/signup",data)
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err));
}
