export class Request {

//    Constructor
  constructor(private _userNr: number, private _duty: string, private _specific: string, private _givenVariables: any[], private _isNewData: boolean) {
    this._userNr = _userNr;
    this._duty = _duty;
    this._specific = _specific;
    this._givenVariables = _givenVariables;
    this._isNewData = _isNewData;
  }

  // Getters and setters

  get userNr(): number {
    return this._userNr;
  }

  set userNr(value: number) {
    this._userNr = value;
  }

  get duty(): string {
    return this._duty;
  }

  set duty(value: string) {
    this._duty = value;
  }

  get specific(): string {
    return this._specific;
  }

  set specific(value: string) {
    this._specific = value;
  }

  get givenVariables() {
    return this._givenVariables;
  }

  set givenVariables(value) {
    this._givenVariables = value;
  }

  get isNewData(): boolean {
    return this._isNewData;
  }

  set isNewData(value: boolean) {
    this._isNewData = value;
  }
}
