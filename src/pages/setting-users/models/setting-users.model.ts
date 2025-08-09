export class UserModel {
    public id: number | null = null;
    public name: string | null = null;
    public username: string | null = null;
    public position: string | null = null;
    public active: boolean | null = null;
    public createdDate: string | null = null;
    public employeeTypeId: number | null = null;
    public divisionId: number | null = null;
    public division: string | null = null;

    constructor(data: any) {
        this._setId(data);
        this._setName(data);
        this._setUsername(data);
        this._setPosition(data);
        this._setActive(data);
        this._setCreatedDate(data);
        this._setEmployeeTypeId(data);
        this._setDivisionId(data);
        this._setDivision(data);
    }

    private _setId({ id }: any) {
        this.id = id;
    }

    private _setName({ name }: any) {
        this.name = name;
    }

    private _setUsername({ username }: any) {
        this.username = username;
    }

    private _setPosition({ position }: any) {
        this.position = position;
    }

    private _setActive({ active }: any) {
        this.active = active;
    }

    private _setCreatedDate({ createdDate }: any) {
        this.createdDate = createdDate;
    }

    private _setEmployeeTypeId({ employeeTypeId }: any) {
        this.employeeTypeId = employeeTypeId;
    }

    private _setDivisionId({ divisionId }: any) {
        this.divisionId = divisionId;
    }

    private _setDivision({ division }: any) {
        this.division = division;
    }
}
