document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const type = document.getElementById('type').value;
        const description = document.getElementById('description').value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div>
                <strong>${title}</strong> - ${type}
                <p>${description}</p>
            </div>
            <button class="delete-task">x</button>
        `;

        tasksList.appendChild(taskItem);

        taskForm.reset();
    });

    tasksList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-task')) {
            event.target.parentElement.remove();
        }
    });
});
