import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productss } from 'src/app/models/productss';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  products: productss[] = [];
  activeProductId: string | null = null;
  constructor(private productService: ProductsService,private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
    
  }

  getProducts(): void {
    this.productService.getProducts1()
      .subscribe(productss => {this.products = productss;
        console.log(productss); 
      });
  }
  fetchProducts(category?: string): void {
    let url = '/products';
    if (category) {
      url += `?category=${category}`;
    }
    this.http.get<any[]>(url)
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

