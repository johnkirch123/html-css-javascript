import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isDisplayed = false;
  // clickCount = 0;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    // this.clickCount += 1;
    // this.clicks.push(this.clickCount);
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
    this.isDisplayed === true ? this.isDisplayed = false : this.isDisplayed = true;
  }

  getDate() {
    var currentdate = new Date(); 
    return currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
  }

}
