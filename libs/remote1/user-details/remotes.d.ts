declare module 'auth-remote/auth' {
  import {Observable} from "rxjs";

  interface User {
    name: string;
  }

  class UserService {
    user$: Observable<User | false>
    setUser(name: string): void;
  }
}
