document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const dateTimeInput = document.getElementById('datetime-input').value;

    if (taskInput.trim() === '') {
        alert('Task cannot be empty!');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = `${taskInput} (Due: ${dateTimeInput || 'No date set'})`;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        const newTaskName = prompt('Edit task:', taskName.textContent.split(' (Due:')[0]);
        const newDateTime = prompt('Edit date and time:', dateTimeInput);
        if (newTaskName) {
            taskName.textContent = `${newTaskName} (Due: ${newDateTime || 'No date set'})`;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskName);
    taskItem.appendChild(actions);
    taskList.appendChild(taskItem);

    // Clear input fields after adding task
    document.getElementById('task-input').value = '';
    document.getElementById('datetime-input').value = '';
}
