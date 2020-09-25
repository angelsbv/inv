import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
	constructor(
		public readonly productsService: ProductService,
		private readonly titleService: Title,
		private readonly router: Router
	) {}

	async ngOnInit() {
		await this.getProducts();
		this.titleService.setTitle('Products');
	}

	async getProducts() {
		const queryResult = await this.productsService.getAll();
		queryResult.subscribe(({ data }) => {
			this.productsService.products = data.products as Product[];
		});
	}

	async editProduct(product: Product) {
		this.router.navigate(['/AddProduct'], { state: product });
	}

	async deleteProduct(id: string) {
		if (confirm('Are you sure?')) {
			const fetchResult = await this.productsService
				.delete(id)
				.toPromise<any>();
			if (fetchResult.data.deleteProduct) {
				//product was removed successfully
			}
		}
	}
}
