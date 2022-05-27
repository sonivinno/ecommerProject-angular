import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  isLoggedIn: boolean = false;
  
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }
  onSearch() {
    this.productService.getSearchString.next(this.searchTerm)
  }

}
