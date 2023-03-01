export class Activity {
    activityId: number;
    hours : number;
    placements : number;
    videos : number;
    returnVisits : number;
    date: Date;
    userId: number;

    constructor() {
        this.hours = 0;
        this.placements = 0;
        this.videos = 0;
        this.returnVisits = 0;
        this.date = new Date();
        this.userId = 1;
    }
}
