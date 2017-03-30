import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'nav-bar',
    templateUrl:'html/navigation-bar.component.html',
    styleUrls:['css/navigation-bar.component.css'],
})

export class NavigationBarComponent {
    private name : string="LOGO";
}