export class Placement {
    placementId : number;
    name : string;
    shortName : string;

    constructor(id : number, name : string, shortName : string) {
        this.placementId = id;
        this.name = name;
        this.shortName = shortName;
    }

    public static fromJson(json : any) : Placement {
        return new Placement(json.id, json.name, json.shortName);
    }
}
