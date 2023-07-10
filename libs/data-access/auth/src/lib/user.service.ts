import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export interface User {
  name: string;
}

@Injectable({providedIn: 'root'})
export class UserService {
  private _user$ = new BehaviorSubject<User | false>(false);
  user$ = this._user$.asObservable();

  setUser(name: string) {
    this._user$.next({name});
  }
}
