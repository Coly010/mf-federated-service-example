import {Component, inject} from '@angular/core';
import {UserService} from "@mfexample/data-access/auth";

@Component({
  selector: 'mfexample-auth-remote-entry',
  template: `<mfexample-nx-welcome></mfexample-nx-welcome>`,
})
export class RemoteEntryComponent {
  userService = inject(UserService)
}
