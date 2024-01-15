let inputArr = JSON.parse(localStorage.getItem('inputArr')) || [{
  name : "", 
  dueDate : ''
}];


renderTodo();

localStorage.setItem('todo', JSON.stringify(inputArr));
function renderTodo(){

let todoHtml= '';
inputArr.forEach(function(todoObject,index){
   //let todoObject = inputArr[i];
    //let name = todoObject.name;
    //let dueDate = todoObject.dueDate;
    let {name , dueDate} = todoObject;
    let html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="inputArr.splice(${index},1);
    renderTodo();" class="delete-todo-btn">Delete</button>
    `;
    todoHtml += html;
});

console.log(todoHtml);
document.querySelector('.display-todo').innerHTML = todoHtml;
}


function todoName(){
  let input = document.querySelector('.enter-todo');
  let date = document.querySelector('.enter-date');
  // let name = input.value; 
  let inputTask = input.value;
  let dueDate = date.value;

  inputArr.push({
    name : inputTask,
    dueDate : dueDate
  })

  
  console.log(inputArr);
  input.value = '';

  renderTodo();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('inputArr',  JSON.stringify(inputArr));
}
