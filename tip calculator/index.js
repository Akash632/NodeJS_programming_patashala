let bill_input = document.getElementById('bill_amount');

let service_input = document.getElementById('service');

let people_input = document.getElementById('people');

let tip_element = document.getElementById('tip_amount');
function calculateBill(){
    let bill_value = bill_input.value;
    let service_value = service_input.value;
    let people_value = people_input.value;

    if(bill_value===""||service_value===""||people_value===""){
        tip_element.innerHTML = `Please fill all the details`;
    }
    else{
        axios.get(`http://localhost:5000/?billAmount=${bill_value}&serviceQuality=${service_value}&totalPeople=${people_value}`)
    .then((response)=>{
        tip_element.innerHTML = `The tip to be given is ${response.data.tip}`
    })
    .catch((err)=>console.log(err));
    }
}
