function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  
      var taskText = document.createElement('span');
      taskText.innerText = taskInput.value;
  
      var buttonsContainer = document.createElement('div');
  
      var deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger btn-sm';
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function () {
        listItem.remove();
      });
  
      var completedButton = document.createElement('button');
      completedButton.className = 'btn btn-success btn-sm';
      completedButton.innerText = 'Mark as Completed';
      completedButton.addEventListener('click', function () {
        listItem.classList.toggle('completed');
      });
  
      buttonsContainer.appendChild(deleteButton);
      buttonsContainer.appendChild(completedButton);
  
      listItem.appendChild(taskText);
      listItem.appendChild(buttonsContainer);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  }
  