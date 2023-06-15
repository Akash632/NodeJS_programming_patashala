const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const task={
            id:Date.now(),
            task:taskText
        }
        axios.post('http://localhost:3000/addtask',task)
        .then((response)=>{
            console.log(response.data);
            taskInput.value = '';
            renderTaskList();
        })
        .catch((err)=>console.log(err));

    }
}

function renderTaskList() {
    axios.get('http://localhost:3000/')
    .then((response)=>{
        console.log(response.data)
        response.data.forEach(value => {
            const liElement = document.createElement('li');
            liElement.innerHTML=`<span>${value.task}</span>`
            liElement.appendChild(taskList);
        })
    })
    .catch((err)=>console.log(err))
}

// function deleteTask(id) {
//     tasks = tasks.filter(task => task.id !== id);
//     renderTaskList();
// }'

// const taskInput = document.getElementById('task-input');
// const taskList = document.getElementById('task-list');

// function addTask() {
//     const taskText = taskInput.value;

//     if (taskText !== '') {
//         const task = {
//             id: Date.now(),
//             text: taskText
//         }
//         axios.post('http://localhost:3000/addTask', task).then((response) => {
//             console.log(response);
//             taskInput.value = '';
//             renderTaskList();
//         }).catch((err) => {
//             console.log(err);
//         });
//     }
// }

// function renderTaskList() {
//     taskList.innerHTML = '';
//     axios.get('http://localhost:3000/getTask').then((result) => {
//         result.data.forEach(task => {
//             const li = document.createElement('li');
//             li.innerHTML = `<span>${task.text}</span>`
//             taskList.appendChild(li);
//         });
//     }).catch((err) => {
//         console.log(err);
//     })
// }