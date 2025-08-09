import { IDropdown } from 'core/types/dropdown';
import {DropdownModel} from './dropdown.model';

export class DropdownGroupModel {

    public value: string | null = null;
    public label: number | null = null;
    public options: IDropdown[] | null = null;

    constructor(data: any) {
        this._setValue(data);
        this._setLabel(data);
        this._setOptions(data);
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

    private _setOptions({subGroups}: any) {
        this.options = subGroups.map((option: any) => new DropdownModel(option));
    }
}
