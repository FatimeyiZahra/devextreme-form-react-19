export class SelectModel {
  public value: string | null = null;
  public label: number | null = null;

  constructor(data: any) {
    this._setValue(data);
    this._setLabel(data);
  }

  /**
   * Set value
   * @param id
   * @private
   */

  private _setValue({ id, key }: any) {
    this.value = id ? id : key;
  }

  /**
   * Set label
   * @param name
   * @private
   */

  private _setLabel({ name, value }: any) {
    this.label = name ? name : value;
  }
}
