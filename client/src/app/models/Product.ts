export class Product {
	_id: string;
	name: string;
	price: number;
	stock: number;
	createdAt?: Date;
	updatedAt?: Date;

	constructor(fields = { _id: '', name: '', stock: 1, price: 1 }) {
        this._id = fields._id;
        this.name = fields.name;
        this.price = fields.price;
        this.stock = fields.stock;
    }
}
