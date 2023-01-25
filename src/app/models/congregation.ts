export class Congregation {
    congregationId: number;
    name: string;
    code: number;

    constructor(congregationId: number, name: string, code: number) {
        this.congregationId = congregationId;
        this.name = name;
        this.code = code;
    }
}
