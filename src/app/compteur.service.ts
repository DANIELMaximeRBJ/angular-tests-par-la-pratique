import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CompteurService {
  private _nombre = 1;
  constructor() {}
  incrementer(): number {
    return this._nombre++;
  }
}
