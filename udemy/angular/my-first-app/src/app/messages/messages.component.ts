import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessageComponent implements OnInit {
    message:string = `${ Math.random() < 0.5 ? 'Success' : 'Warning' }`;
    color: string = '';

    constructor() {}

    ngOnInit(): void {
        this.toggleColor();
    }
    
    toggleColor() {
        this.color = this.message === 'Success' ? 'color: darkolivegreen;' : 'color: goldenrod;';
    }
}