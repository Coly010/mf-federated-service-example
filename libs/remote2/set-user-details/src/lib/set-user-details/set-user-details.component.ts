import {Component, inject} from "@angular/core";
import {UserService} from "@mfexample/data-access/auth";


@Component({
  selector: 'mfexample-remote2-set-user-details',
  template: `
    <div class="set-user-details">
      <div *ngIf="user$ | async as user" class="user-details">
        User is {{user?.name}}
      </div>
      <div>
        <input type="text" [(ngModel)]="userName" placeholder="Enter name"/>
        <button (click)="setUser()">Set</button>
      </div>
    </div>`,
  styles: [`
    .set-user-details {
      border: 1px solid black;
      padding: 4px;
    }

    .user-details {
      border: 1px solid cyan;
      padding: 4px;
    }
  `]
})
export class SetUserDetailsComponent {
  userService = inject(UserService);
  user$ = this.userService.user$;
  userName = '';

  setUser() {
    this.userService.setUser(this.userName);
  }
}
