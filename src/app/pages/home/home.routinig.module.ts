import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeController } from './home.controller';

const routes: Routes = [
    { 
        path        : '',  
        component   : HomeController
    }     
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

