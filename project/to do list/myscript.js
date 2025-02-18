//variable
const textareaEl = document.querySelector('.textarea');
const addButtonEl = document.querySelector('.addButton');
const deleteButtonEl = document.querySelector('.deleteButton');
const ulEl = document.querySelector('.taskList');
const liEl = document.querySelectorAll('li');
const deselectAllButtonEl = document.querySelector('.deselectAllButton');
const timeEl = document.querySelector('.time');





//functions
const saveTasks = () => {
    console.log("hi");
    
    const tasks = [];
    document.querySelectorAll('.taskList li').forEach(task => {
        const parts = task.textContent.split(' ');
        const time = parts.pop(); // گرفتن آخرین مقدار به عنوان ساعت
        const text = parts.join(' '); // باقی‌مانده را به عنوان متن ذخیره کن
        tasks.push({ text, time });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const loadTasks = () => {

    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const newLi = document.createElement('li');
            newLi.textContent = `${task.text} ${task.time}`;
            ulEl.appendChild(newLi);
            newLi.addEventListener('click', selectedTask);
        });
    }
}

const addOnClick = ()=> {
    let timeValue = timeEl.value;
    let textareaText = textareaEl.value.trim();
    if (textareaText === '') return;

    const newLi = document.createElement('li');
    newLi.textContent = textareaText + '  ' + timeValue;
    ulEl.appendChild(newLi);
    textareaEl.value = '';
    newLi.addEventListener('click', selectedTask);
    timeEl.value = 0;

    saveTasks();
}
const deleteTask = ()=> {
    let taskForDelete = document.querySelector('.selected');
    if (taskForDelete) {
        taskForDelete.classList.add('scale-down');
        setTimeout(() => {
            taskForDelete.remove();
            saveTasks();
        }, 800);
    }
} 
const next = (e) => {
    if (e.key === 'Enter') { 
        e.preventDefault();
        addOnClick();
    }
    
}
function selectedTask() {
    document.querySelectorAll('.taskList li').forEach(task => {
        task.classList.remove('selected');
    });

    this.classList.add('selected');


}


function deselectAll() {
    document.querySelectorAll('.taskList li').forEach(task => {
        task.classList.remove('selected');
    });
}

loadTasks();


// events
addButtonEl.addEventListener('click', addOnClick);
deleteButtonEl.addEventListener('click', deleteTask);
deselectAllButtonEl.addEventListener('click', deselectAll);
textareaEl.addEventListener('keydown',next);