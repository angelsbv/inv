import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from '../models/Product';

const GET_PRODUCTS = gql`
	query {
		products {
            id
			name
			stock
			price
		}
	}
`;

const DELETE_PRODUCT = gql`
	mutation DeleteProduct($id: String!) {
		deleteProduct(id: $id)
	}
`;

const UPDATE_PRODUCT = gql`
	mutation UpdateProduct($id: String!, $input: ProductUpdateInput!) {
		updateProduct(id: $id, input: $input)
	}
`;

const ADD_PRODUCT = gql`
    mutation CreateProduct($input: ProductInput!) {
        createProduct(input: $input){ id name stock price }
    }
`

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor(private readonly apollo: Apollo) {}
	products: Product[];

	async getAll() {
		return this.apollo.watchQuery<any>({
			query: GET_PRODUCTS,
		}).valueChanges;
    }
    
    addProduct(data: Product){
        return this.apollo.mutate({
            mutation: ADD_PRODUCT,
            variables: { input: data },
            refetchQueries: [{
                query: GET_PRODUCTS
            }]
        })
    }

    update(data: Product){
        const { _id, ...dataInput } = data;
        return this.apollo.mutate({
            mutation: UPDATE_PRODUCT,
            variables: { id: _id, input: { ...dataInput } },
            refetchQueries: [{
                query: GET_PRODUCTS
            }]
        })
    }

    delete(id: string) {
        return this.apollo.mutate({
            mutation: DELETE_PRODUCT,
            variables: { id },
            refetchQueries: [{
                query: GET_PRODUCTS
            }]
        });
    }
}
