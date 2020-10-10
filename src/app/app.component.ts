import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 16-3';
  searchInput: string;
  inputTask: string;

  choreList: ToDo[] =  [
    {task: 'Brushing teeth and wash face', complete: true}, 
    {task: 'Iron clothes', complete: false},
    {task: 'Cook and eat breakfast', complete: true},
    {task: 'Go to work', complete: false},
    {task: 'Go home', complete: false},
  ];

  filteredTask = [...this.choreList];



completeTask = ToDo => {
  let index = this.choreList.indexOf(ToDo)
  this.choreList[index].complete = true;
  this.filterToDo();

}

addTask()  {
  const newTask = {task: this.inputTask, complete: false};

  this.choreList.push(newTask);
  this.filterToDo();
  this.inputTask;
  
  
}

removeTask = (index) =>  {
  this.choreList.splice(index,1); 
  this.filterToDo();
};

doneTasks() {
  if (this.choreList.length == 0) {
    return true;
  }
  else {
    return false;
  }
}

filterToDo() {
  const lower = this.searchInput ? this.searchInput.toLowerCase() : '';
  this.filteredTask = this.choreList.filter(choreList => choreList.task.toLowerCase().includes(lower));
};

}

interface ToDo  {
  task: string;
  complete: boolean; 
  // hideTitle: boolean;
}




