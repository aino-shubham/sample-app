import { Source } from "./source";

export class UserService {
  source = new Source();

  demo() {
    this.source.fun();
  }
}
