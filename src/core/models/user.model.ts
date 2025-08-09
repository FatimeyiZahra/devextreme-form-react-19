export class UserModel {

    public branch: string | null = null;
    public branchId: number | null = null;
    public company: string | null = null;
    public companyId: number | null = null;
    public employeeId: number | null = null;
    public id: number | null = null;
    public name: string | null = null;
    public userRole: string | null = null;
    public userRoleId: number | null = null;
    public userName: string | null = null;

    constructor(data: any) {
        this._setBranch(data);
        this._setBranchId(data);
        this._setCompany(data);
        this._setCompanyId(data);
        this._setEmployeeId(data);
        this._setId(data);
        this._setName(data);
        this._setUserRole(data);
        this._setUserRoleId(data);
        this._setUserName(data);
    }

    /**
     * set branch
     * @param branch
     * @private
     */

    private _setBranch({branch}: any) {
        this.branch = branch;
    }

    /**
     * set branch id
     * @param branchId
     * @private
     */

    private _setBranchId({branchId}: any) {
        this.branchId = branchId;
    }

    /**
     * set company
     * @param company
     * @private
     */

    private _setCompany({company}: any) {
        this.company = company;
    }

    /**
     * set company id
     * @param companyId
     * @private
     */

    private _setCompanyId({companyId}: any) {
        this.companyId = companyId;
    }

    /**
     * set employee id
     * @param employeeId
     * @private
     */

    private _setEmployeeId({employeeId}: any) {
        this.employeeId = employeeId;
    }

    /**
     * set id
     * @param id
     * @private
     */

    private _setId({id}: any) {
        this.id = id;
    }

    /**
     * set name
     * @param name
     * @private
     */

    private _setName({name}: any) {
        this.name = name;
    }

    /**
     * set user role
     * @param userRole
     * @private
     */

    private _setUserRole({userRole}: any) {
        this.userRole = userRole;
    }

    /**
     * set user role id
     * @param userRoleId
     * @private
     */

    private _setUserRoleId({userRoleId}: any) {
        this.userRoleId = userRoleId;
    }

    /**
     * set userName
     * @param username
     * @private
     */

    private _setUserName({username}: any) {
        this.userName = username;
    }
}