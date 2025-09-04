import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({required: true})usersList: IUser []= [];

  @Output('usedSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected (user: IUser) {
    console.log('user', user);

    this.userSelectedEmitt.emit(user);
  }
}
