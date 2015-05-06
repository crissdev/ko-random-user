import ko from 'knockout';
import {next as getUser} from '../../services/random-user';


export default class HomePage {
  constructor() {
    this.user = ko.observable();
    this.busy = ko.observable(false);
    this.nextUser();
  }

  nextUser() {
    if (!this.busy()) {
      this.busy(true);

      getUser().then((data) => {
        this.user(data);
        this.busy(false);
      });
    }
  }
}
