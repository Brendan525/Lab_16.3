import { Component } from '@angular/core';
import { Z_FILTERED } from 'zlib';

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
}

addTask()  {
  const newTask = {task: this.inputTask, complete: false};

  this.choreList.push(newTask);
  this.inputTask;
  console.log(newTask);
  
}

removeTask = (index) =>  {
  this.choreList.splice(index,1); 

};

doneTasks() {
  if (this.choreList.length == 0) {
    return true;
    
  }
  else {
    return false;
  }
}


filterSearch()  {

  const filter = document.getElementById('filter');
  filter.addEventListener('keyup', () => {
    Array.from(list.children).map(li => {
        const matchFound = new RegExp (filter.value, 'gi').test(li.innerText);
        if (!matchFound) {
            li.classList.add('hidden');
        } else {
            li.classList.remove('hidden');
        }
    });
    });
}

// filterSearch() {
//   const search = this.searchInput ? this.searchInput.toLocaleLowerCase(): '';
//   this.filteredTask = this.choreList.filter(ToDo => ToDo.task.toLocaleLowerCase().includes(search));
//   console.log(this.filteredTask);
// }


}


interface ToDo  {
  task: string;
  complete: boolean; 
  // hideTitle: boolean;
}




