import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // <-- düzeltildi
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS.slice(1,2);
  selectedUserId = 'u1';

   get selectedUser() {
     return this.users.find((user) => user.id === this.selectedUserId);
   }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
