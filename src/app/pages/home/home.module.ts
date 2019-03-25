import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeController } from './home.controller';
import { HomeRoutingModule } from './home.routinig.module';
    

@NgModule({
    declarations: [ 
        HomeController
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HomeRoutingModule
        
    ],
    providers: [  ]
})
export class HomeModule { }