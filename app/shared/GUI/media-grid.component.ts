import {Component,OnInit} from '@angular/core'


@Component({
    moduleId:module.id,
    selector:'media-grid',
   templateUrl:'html/media-grid.component.html',
   styleUrls:['css/media-grid.component.css']
})
export class MediaGridComponent implements OnInit {
    ngOnInit(){
}
public index :number = 0;

 public users = [
    { name: 'Jilles', age: '21' },
    { name: 'Todd', age: '24' },
    { name: 'Lisa', age: '18' },
     { name: 'Jilles', age: '21' },
    { name: 'Todd', age: '24' },
    { name: 'Lisa', age: '18' }
  ];


}