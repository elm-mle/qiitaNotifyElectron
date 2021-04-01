export class DateManager{

    sleepAsync = (hours:number) => new Promise(resolve => setTimeout(resolve, hours*1000*60*60));

    private static createHours(hoursTime: number): number{
        return hoursTime / (1000*60*60);
    }

    isNotOverTime(obj:{source: Date, destination: Date, limitHours: 1}): boolean{
        return !this.isOverTime(obj);
    }

    isOverTime(obj:{source: Date, destination: Date, limitHours: 1}):boolean{
        const sourceTime = obj.source.getTime();
        const desTime = obj.destination.getTime();
        const diffHours = DateManager.createHours(desTime-sourceTime);
        return  diffHours > obj.limitHours;
    }

}
