import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  progress1 = signal<number>(0);
  progress2 = signal<number>(0);
  constructor() {}
}
