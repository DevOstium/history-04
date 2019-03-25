import { Component, HostListener, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../plataform-detector/platform-detector.service';

@Component({
    selector    : 'ap-menu',
    templateUrl : './menu.view.html',
    styleUrls   : ['./menu.css'] 
})
export class MenuController  {
    
    isShow = true;
    isShowMobile=false;
    
    toggle() {
        const innerWidth = window.innerWidth;

        if(innerWidth<1010){
            this.isShowMobile = !this.isShowMobile;
        } else {
            this.isShow = !this.isShow;
        }

    }
}

    

