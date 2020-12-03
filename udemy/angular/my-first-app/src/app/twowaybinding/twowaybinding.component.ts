import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  username: string = '';
  isName: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChange(): any {
    if(this.username !== '') {
      this.isName = true;
    } else {
      this.isName = false;
    }
  }

  onClearUser() {
    this.username = '';
    this.isName = false;
  }

}
