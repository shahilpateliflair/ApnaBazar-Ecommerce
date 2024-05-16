import { Component } from '@angular/core';
import { Review } from 'src/app/models/productreview';
import { productss } from 'src/app/models/productss';
import { profile } from 'src/app/models/profile';
import { user } from 'src/app/models/user';
import { wishlist } from 'src/app/models/wishlist';
import { DynamicService } from 'src/app/shared/dynamic.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
//   product!: wishlist;
//   products!: any;
//   availableSizes: string[] = ['S', 'M', 'L', 'XL'];
//   availableColors: string[] = ['Black', 'Blue', 'Gray', 'Red', 'White'];
//   cart!: wishlist;
//   isInWishlist: boolean = false;

//   items: any;

//   useremail = '';
//   users!: user;
//   selectedSize: string = '';
//   productss: productss[] = [];
//   profiles: profile[] = [];
//   selectedRating!: number;
//   commentText!: string;
//   productId: string | null = null;
//   selectedColor: string = 'White';
//   imageFilter: string = 'none';
//   colors: string[] = ['White', 'Gray', 'Blue', 'Red', 'Black'];
//   review: Review = { productId: '', rating: 0, comment: '' };
//   isLast: any;
//   category!: string;
//   reviews: Review[] = [];
//   isAuth: boolean = false;
//   profiless: { [profileId: string]: profile } = {};
// }
// constructor(private dynamic:DynamicService) {
//   userservice.userObservable.subscribe((newUser) => {
//     this.users = newUser;
//   });
// }

// ngOnInit(): void {
//   this.fetchProfiles();
//   this.checkAuthentication();
//   // this.fetchProfilesForReviews();

//   if (this.productId) {
//     this.fetchReviewsForProduct(this.productId);
//   }

//   this.route.paramMap.subscribe((params) => {
//     this.productId = params.get('id');
//     if (this.productId) {
//       this.fetchReviewsForProduct(this.productId);
//     }
//   });

//   this.route.params.subscribe((params) => {
//     const productId = params['id'];

//     this.getProductDetails(productId);
//     this.isInWishlist = this.dynamic1.isProductInWishlist(productId);
//     if (this.items) {
//       this.isInWishlist = this.isAddedToWishlist(this.items);
//     }

//     this.userservice.userObservable.subscribe((user) => {
//       console.log('User:', user);
//       this.useremail = user.email;
//     });
//   });

//   const cartFromLocalStorage = this.dynamic1.getCartFromLocalStorage();
//   if (cartFromLocalStorage) {
//     this.cart = cartFromLocalStorage;
//   } else {
//     this.dynamic1.getCartObservable().subscribe((dynamiccart: wishlist) => {
//       this.cart = dynamiccart;
//     });
//   }

//   this.route.paramMap.subscribe((params) => {
//     this.productId = params.get('id');
//   });
// }

// getProductDetails(productId: string): void {
//   this.productService.getProductById(productId).subscribe(
//     (product: product) => {
//       this.items = product;
//       this.products.forEach((product: any) => {
//         console.log('Image URLs:', product.imageUrl);
//       });
//     },
//     (error) => {
//       console.error('Error fetching product:', error);
//       this.items = null;
//     }
//   );
// }

// addToCart(): void {
//   if (this.items) {
//     this.dynamic.addToCart(this.items, this.selectedSize, this.selectedColor);
//     this.router.navigateByUrl('/dynamiccart');
//   } else {
//     console.error('Cannot add to cart: No product selected.');
//   }
// }

// toggleWishlist(): void {
//   this.isInWishlist = !this.isInWishlist;
//   if (this.items) {
//     if (this.isInWishlist) {
//       this.dynamic1.addToCart(
//         this.items,
//         this.selectedSize,
//         this.selectedColor
//       );
//     } else {
//       this.dynamic1.removeFromCart(this.items!._id); // Assert non-null with ! operator
//     }
//   } else {
//     console.error('Cannot add to cart: No product selected.');
//   }
// }

// isAddedToWishlist(product: product): boolean {
//   return this.dynamic1.isAddedToWishlist(product._id);
// }

// removeFromCart(cartItem: any): void {
//   if (cartItem && cartItem.itm._id) {
//     this.dynamic1.removeFromCart(cartItem.itm._id);
//   }
// }

// getProductImageUrl(product: product): string {
//   // return `http://localhost:42000/${product.imageUrl}`;
//   return `${UPLOAD_IMAGE}${product.imageUrl}`;
// }
// getImageUrlByColor(color: string, items: any): string {
//   switch (color) {
//     case 'White':
//       return `${UPLOAD_IMAGE}` + items.imageUrl;

//     case 'Gray':
//       return `${UPLOAD_IMAGE}` + items.image1;

//     case 'Blue':
//       return `${UPLOAD_IMAGE}` + items.image2;

//     case 'Red':
//       return `${UPLOAD_IMAGE}` + items.image3;

//     case 'Black':
//       return `${UPLOAD_IMAGE}` + items.image4;

//     default:
//       return `${UPLOAD_IMAGE}` + items.imageUrl;
//   }
// }


// submitReview(): void {
//   console.log('productId:', this.productId);
//   console.log('users.id:', this.users?.id);

//   const token = localStorage.getItem('token');
//   if (!token) {
//     this.toaster.error('Token not found', 'Error');
//     return;
//   }

//   const headers = new HttpHeaders({
//     Authorization: `Bearer ${token}`,
//   });

//   if (!this.productId) {
//     this.toaster.error('Product or user information is missing.');
//     return;
//   }

//   this.review.productId = this.productId;

//   this.productreview.submitReview(this.review, headers).subscribe(
//     () => {
//       this.toaster.success('Review submitted successfully');
//       this.review = { productId: '', rating: 0, comment: '' };
//     },
//     (error: any) => {
//       this.toaster.error('Failed to submit review');
//       console.error('Error submitting review:', error);
//     }
//   );
// }

// fetchReviewsForProduct(productId: string): void {
//   console.log('Fetching reviews for product:', productId);
//   this.productreview.getReviewsForProduct(productId).subscribe(
//     (reviews: Review[]) => {
//       console.log('Received reviews:', reviews);
//       this.reviews = reviews;
  
//       this.fetchProfilesForReviews();
//     },
//     (error) => {
//       console.error('Error fetching reviews:', error);
//     }
//   );
// }

// checkAuthentication() {
  
//   const token = localStorage.getItem('token');
//   if (token) {
//     this.isAuth = true; 
   
//   } else {
//     this.isAuth = false; 
//   }
}