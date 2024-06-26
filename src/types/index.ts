export interface IProductItem {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

export interface IProductData {
	products: IProductItem[];
	preview: string | null;
	getProduct(id: string): IProductItem;
}

export interface IBasketData {
	items: IProductItem[];
	total: number;
	setProductsInBasket(product: IProductItem): void;
	getProductsInBasket(): IProductItem[];
	checkProductInBasket(product: IProductItem): boolean;
	deleteProductsInBasket(product: IProductItem): void;
	clearBasket(): void;
}

export interface IFormInfoOrder {
	payment: string;
	address: string;
}

export interface IFormInfoOrderCustomer {
	email: string;
	phone: string;
}

export interface IOrderData extends IOrderForm {
	items: string[];
	total: number;
}

export interface IOrderForm extends IFormInfoOrder, IFormInfoOrderCustomer {}

export interface IOrder {
	_order: IOrderData;
	setOrderItems(items: string[]): void;
	setOrderPrice(value: number): void;
	setOrderField(field: keyof IOrderForm, value: string): void;
	validateOrder(): boolean;
	clearOrder(): void;
}

export type FormErrors = Partial<Record<keyof IOrderData, string>>;

export interface IOrderSuccess {
	id: string;
	total: number;
}