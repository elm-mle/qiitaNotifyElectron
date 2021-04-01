import {DateManager} from "../date-manager";

export abstract class Job{

    constructor(private _hours: number) {
    }

    async runAsync(){
        const dateManager = new DateManager();
        while (true){
            if(await this.runMethodAsync()){
                this.notify();
            }

            await dateManager.sleepAsync(this._hours);
        }
    }

    protected abstract runMethodAsync(): Promise<boolean>;
    protected abstract notify(): void;
}
