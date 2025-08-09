export class DropdownModel {

    public value: string | null = null;
    public label: number | null = null;
    public isDefault: boolean | null = null;

    constructor(data: any) {
        this._setValue(data);
        this._setLabel(data);
        this._setIsDefault(data);
    }

    /**
     * Set value
     * @param id
     * @private
     */

    private _setValue({id, key}: any) {
        this.value = id ? id : key;
    }

    /**
     * Set label
     * @param name
     * @private
     */

    private _setLabel({name, value}: any) {
        this.label = name ? name : value;
    }

    /**
     * Set isDefault
     * @param isDefault
     * @private
     */

    private _setIsDefault({isDefault}: any) {
        this.isDefault = isDefault ? isDefault : false;
    }
}
