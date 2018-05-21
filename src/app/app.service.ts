import { Component, Injectable } from '@angular/core';

@Injectable()
export class ShareRouting {
  public selectedID: number;

  constructor() {
    this.selectedID = 2;
  }
  
  setData(data) {
    this.selectedID = data;
  }
  getData() {
    return this.selectedID;
  }
}
