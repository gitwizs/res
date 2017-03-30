import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
//Resource
import {NavigationBarService} from './services/navigation-bar.service';
import {NavigationBarComponent} from './GUI/navigation-bar.component';
import {HeaderComponent} from './GUI/header.component';
import {MediaGridComponent} from './GUI/media-grid.component';
import { MaterialModule } from '@angular/material';


@NgModule({

    imports:[MaterialModule,BrowserModule,CommonModule,FormsModule,HttpModule],
    providers:[NavigationBarService],
    declarations:[NavigationBarComponent,HeaderComponent,MediaGridComponent],
    exports:[NavigationBarComponent,HeaderComponent,MediaGridComponent]
})

export class SharedModule { } 