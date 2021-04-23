import {makeAutoObservable} from "mobx";

class RootStore {
    incomesStore: any;

    constructor() {
        makeAutoObservable(this)
    }

}

export default new RootStore();