import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
	public product: Product;
	public isEditing = false;

	constructor(
		private readonly titleService: Title,
		public readonly productsService: ProductService,
		private readonly router: Router
	) {
		const selectedProduct = this.router.getCurrentNavigation().extras
			.state as Product & any;
		if (selectedProduct !== undefined) {
			this.product = new Product({ _id: selectedProduct.id,...selectedProduct });
			this.isEditing = true;
		} else {
            this.product = new Product();
		}
	}

	ngOnInit(): void {
		this.titleService.setTitle(
			this.isEditing ? 'Edit Product' : 'Add Product'
        );
        console.log(this.product)
	}

	onSubmit(form: NgForm) {
		const product = form.form.value;
		if (product.name !== '' && product.stock > 0 && product.price > 0) {
			if (this.isEditing) {
                const fetchResult = this.productsService.update(this.product);
				fetchResult.subscribe(({ data }: any) => {
					if (data.updateProduct) {
						this.router.navigate(['/']);
					}
				});
			} else {
				const fetchResult = this.productsService.addProduct(product);
				fetchResult.subscribe(({ data }: any) => {
					if (data.createProduct.id) {
						this.router.navigate(['/']);
					}
				});
			}
		}
	}
}
