import { observable, decorate } from "mobx";

class UserStore {
    name = "guest";
}

decorate(UserStore, {
    name: observable
})

export default UserStore;