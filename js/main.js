// let errorMessage = document.getElementById('addBtn');

// errorMessage.addEventListener('click', function(event) {

//     event.preventDefault();

//     let errorMessages = "";
//     if (userInput.value === "") {
//         errorMessages += "You can't just do nothing";
//     }

// document.getElementById('form-message').innerHTML = errorMessages;
// })

//Selectors
let userInput = document.querySelector('.userInput');
let todoButton = document.querySelector('.addBtn');
let todoList = document.querySelector('.toDoList');
let doneList = document.querySelector('.doneList');
let errorMessages = "";

//Event Listeners
addBtn.addEventListener('click', addTodoItem);

//Functions
function removeAll(){
    document.getElementById("todo-container").remove();  //innerHTML = ""; Ska ev göra om till remove() ??
}

function addTodoItem(e) {

 e.preventDefault();


 let newTodo = document.createElement('li');
 let input = document.createElement('input');
 newTodo.appendChild(input);
 input.value = userInput.value;
 input.disabled = true;


 
 if (userInput.value === "") {
    errorMessages += "You can't just do nothing <br>";
    document.getElementById('form-message').innerHTML = errorMessages;
    return false;
 }


 todoList.appendChild(newTodo);

 //BUTTONS

 let editBtn = document.createElement('button');
 editBtn.innerHTML = 'Edit';
 editBtn.classList.add('edit-btn');
 newTodo.appendChild(editBtn);
 editBtn.addEventListener('click', function() {
     input.disabled = false;
     editBtn.innerHTML = 'Save';
     editBtn.addEventListener('click', function(){
        if (input.value === "") {
            errorMessages += "You can't just do nothing";
            document.getElementById('form-message').innerHTML = errorMessages;
            return false;
         } else {
            editBtn.innerHTML = 'Edit';
            editBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.274)';
            input.disabled = true;
            editBtn.remove();
         }

     })

 })

 let doneBtn = document.createElement('button');
 doneBtn.innerHTML = 'Done';
 doneBtn.classList.add('done-btn');
 newTodo.appendChild(doneBtn);
 doneBtn.addEventListener('click', function() {
    if (input.value === "") {
        errorMessages += "You can't just do nothing";
        document.getElementById('form-message').innerHTML = errorMessages;
        return false;
     } else {
        doneList.append(newTodo);
        doneBtn.remove();
     }
     editBtn.remove();
     let editBtn2 = document.createElement('button');
     editBtn2.innerHTML = 'Edit';
     newTodo.appendChild(editBtn2);
     editBtn2.addEventListener('click', function() {
        input.disabled = false;
        editBtn2.innerHTML = 'Save';
        editBtn2.addEventListener('click', function(){
            if (input.value === "") {
                errorMessages += "You can't just do nothing";
                document.getElementById('form-message').innerHTML = errorMessages;
                return false;
             } else {
                editBtn2.innerHTML = 'Edit';
                editBtn2.style.backgroundColor = 'rgba(255, 0, 0, 0.274)';
                input.disabled = true;
                editBtn2.remove();
             }
        })
    })
     

})


let deleteBtn = document.createElement('button');
 deleteBtn.innerHTML = 'Delete';
 deleteBtn.classList.add('delete-btn');
 newTodo.appendChild(deleteBtn);
 deleteBtn.addEventListener('click', function() {
 //newTodo.appendChild(deleteBtn);
 newTodo.remove();
 })


 //APPEND TO LIST
 userInput.value = "";
//  todoList.appendChild(todoList);
}