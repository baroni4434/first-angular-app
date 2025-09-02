import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent]
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name?: string;
  tasks = [
   {
   id:'t1',
   userId:'u1',
   title:'Master Angular',
   summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
   dueDate: '2025-12-31'
   },

   {
      id:'t2',
      userId:'u3',
      title:'build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-12-31'
      },
  ];
  get selectedUserTasks(){
  return this.tasks.filter((task) => task.userId === this.userId)}


}
