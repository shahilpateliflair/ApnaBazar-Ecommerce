import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Action } from 'rxjs/internal/scheduler/Action';
import { orders } from 'src/app/models/orders';
import { productss } from 'src/app/models/productss';
import { ImageService } from 'src/app/services/image.service';
import { CartService } from 'src/app/shared/cart.service';
import { OrderService } from 'src/app/shared/order.service';
import { ProductsService } from 'src/app/shared/products.service';
import { PAYPAL } from 'src/app/shared/constants/urls';
import { Variant } from 'src/app/models/productss';
import { Image } from 'src/app/models/productss';
// declare var paypal :any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})

export class PaypalComponent {
  productForm!: FormGroup;
  newProduct: any = {
    name: '',
    description: '',
    price: 0,
    MRP: 0,
    off: 0,
    origins: [],
    deliverTime: [],
    tag: '',
    variants: []
  };
  selectedImages: File[] = [];
  constructor(private toaster:ToastrService,private fb: FormBuilder,private http:HttpClient, private productService: ProductsService, private route: ActivatedRoute,) { 
    this.newProduct = {
      name: '',
      description: '',
      price: 0,
      MRP: 0,
      off: 0,
      origins: [],
      deliverTime: [],
      tag: '',
      variants: [{}] // Initialize with empty array
    };
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      MRP: [''],
      off: [''],
      origins: [''],
      deliverTime: [''],
      tag: [''],
      // variants: [] ,
      // variants: this.fb.array([]),
      images: ['']
    });
  }
  addProduct() {
    const formData: FormData = new FormData();
    Object.entries(this.productForm.value).forEach(([key, value]: [string, any]) => {
      if (key === 'images') {
        // Handle images separately if needed
        this.selectedImages.forEach((file: File) => {
          formData.append(`images`, file);
        });
      } else if (key === 'variants') {
        // Append variants data
        formData.append(key, JSON.stringify(this.newProduct.variants));
      } else {
        formData.append(key, value);
      }
    });
  
    this.productService.addProduct1(formData).subscribe(
      () => {
        this.toaster.success('Product added successfully', 'Success');
        this.productForm.reset();
        this.newProduct.variants = [{}];
      },
      (error) => {
        console.error('Error adding product:', error);
        this.toaster.error(error.error.message || 'Failed to add product', 'Error');
      }
    );
  }
  onFileSelected(event: any) {
    this.selectedImages = event.target.files;
  }

  addVariant() {
    const newVariant: Variant = {
      size: '',
      color: '',
      available: true,
      images: []
    };
    this.newProduct.variants.push(newVariant);
  }

  uploadImages() {
   
    // this.selectedImages = [];
  
    
    this.newProduct.variants.forEach((variant: Variant) => {
      variant.images.forEach((image: Image) => { // Change Image to File
        image.urls.forEach((url: string) => {
         
          fetch(url)
            .then(response => response.blob())
            .then(blob => {
              
              const file = new File([blob], image.color + '.jpg', { type: 'image/jpeg' });
              
              this.selectedImages.push(file);
            })
            .catch(error => console.error('Error fetching image:', error));
        });
      });
    });
  }  
 }

   


 


