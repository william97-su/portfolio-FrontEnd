import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-up-btn',
  templateUrl: './go-to-up-btn.component.html',
  styleUrls: ['./go-to-up-btn.component.css']
})
export class GoToUpBtnComponent implements OnInit {

    isShow: boolean;
    topPosToStartShowing = 100;

    @HostListener('window:scroll')
    checkScroll() {
      
    // window scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngOnInit(): void {
  }

}
