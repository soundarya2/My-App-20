
    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app_submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.css']
    })
    export class SubmenuComponent implements OnInit {
    menuList = [{"displayName":"Judges","url":"judges"},{"displayName":"Participants","url":"participants"}]
    constructor() { }

    ngOnInit() {
    }

    }

