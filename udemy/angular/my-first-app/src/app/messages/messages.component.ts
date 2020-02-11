import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
    selector: 'app-message',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessageComponent implements OnInit {
    message:string = `${ Math.random() < 0.5 ? 'Success' : 'Warning' }`;

    constructor() {}

    ngOnInit(): void {
        console.log(Math.random());
    }
}