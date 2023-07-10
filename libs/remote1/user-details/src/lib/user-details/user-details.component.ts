import {Component, inject} from "@angular/core";
import {UserService} from "@mfexample/data-access/auth";


@Component({
  selector: 'mfexample-remote1-user-details',
  template: `<div class="user-details">
    <div *ngIf="user$ | async as user; else noUser">
      User signed in is: {{user.name}}
    </div>
    <ng-template #noUser>No user has been set</ng-template>
  </div>`,
  styles: [``]
})
export class UserDetailsComponent {
  userService = inject(UserService);
  user$ = this.userService.user$;
}
