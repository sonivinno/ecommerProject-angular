import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  // isLoggedIn: boolean = false;
  isLoggedIn : boolean = false;
  hoverProfile! : boolean;
  
  constructor(private productService: ProductServiceService , private authService : AuthService,private router : Router) { 
    this.hoverProfile = false;
  }

  ngOnInit(): void {
    this.isCheckingLogIn();
    // this.isCheckingLogout()
  }
  onSearch() {
    this.productService.getSearchString.next(this.searchTerm)
  }
 
  isCheckingLogIn(){
  this.authService.isLoggedIn.subscribe(data =>{
    console.log(data)
    this.isLoggedIn = data;
  })
  }

  isCheckingLogout(){
    this.authService.logout()
    }

    showProfileContent(show: boolean){
      this.hoverProfile = show
    }

    // reloadPage(){
    //   window.location.reload()
    // }

}
