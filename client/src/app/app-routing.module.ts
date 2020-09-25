import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
	{
		path: 'AddProduct',
		component: ProductFormComponent,
	},
	{
		path: '',
		component: ProductsComponent,
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
