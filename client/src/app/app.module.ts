import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FieldComponent } from './components/form-field/field.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
	declarations: [
		AppComponent,
		ProductFormComponent,
		ProductsComponent,
		FieldComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpLinkModule,
		HttpClientModule,
		GraphQLModule,
	],
	providers: [Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
