export class SettingBranchModel {
    public id: number | null = null;
    public name: string | null = null;
    public address: string | null = null;
    public branchAccess: string | null = null;

    constructor(data: any) {
        this._setId(data);
        this._setName(data);
        this._setAddress(data);
        this._setBranchAccess(data);
    }

    private _setId({id}: any) {
        this.id = id;
    }

    private _setName({name}: any) {
        this.name = name;
    }

    private _setAddress({address}: any) {
        this.address = address;
    }

    private _setBranchAccess({branchAccess}: any) {
        this.branchAccess = branchAccess;
    }

}
