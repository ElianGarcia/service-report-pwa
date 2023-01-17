export class Activity {
    activityId: number;
    hours : number;
    placements : number;
    videos : number;
    date: Date;
    userId: number;

    constructor() {
        this.activityId = 0;
        this.hours = 0;
        this.placements = 0;
        this.videos = 0;
        this.date = new Date();
        this.userId = 1;
    }
}
