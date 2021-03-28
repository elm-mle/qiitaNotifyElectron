import {DateManager} from "../date-manager";

export abstract class Job{

    constructor(private _hours: number) {
    }

    async runAsync(){
        const dateManager = new DateManager();
        while (true){
            if(this.runMethod()){
                this.notify();
            }

            await dateManager.sleepAsync(this._hours);
        }
    }

    abstract runMethod(): boolean;
    abstract notify(): void;
}
