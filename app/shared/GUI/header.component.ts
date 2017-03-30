import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:'header',
    templateUrl:'html/header.component.html',
})

export class HeaderComponent { 
@Input('Description') Desc:string;

}