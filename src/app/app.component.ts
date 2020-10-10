import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 16-3';

  choreList: ToDo[] =  [
    {task: 'Brushing teeth and wash face', complete: true}, 
    {task: 'Iron clothes', complete: false},
    {task: 'Cook and eat breakfast', complete: true},
    {task: 'Go to work', complete: false},
    {task: 'Go home', complete: false},
  ]



completeTask(choreList: ToDo)  {
  var element = document.getElementById("target");
  element.classList.toggle("stylesList");
  choreList.complete = true;
}

addTask() {
  this.choreList.push({task: 'Go to sleep', complete: false})
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


// toggleHeader = () => {
//   this.hideTitle = !this.hideTitle;
// };

// toggleStrike= () => {
//   this.hideTitle = !this.hideTitle;
// }


// togglestylesList= () => {
//    stylesList = !stylesList;
// }

// filterToDos = () => {
//   this.filterToDos = this.filterToDos.filter(todo =>
//     todo.name.includes(this.filterText)
//   );
//   };

}

interface ToDo  {
  task: string;
  complete: boolean; 
  // hideTitle: boolean;
}



