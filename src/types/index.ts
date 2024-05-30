export interface IProductItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}


export interface IProductPreview {
    products: IProductItem[];
    preview: string | null;
    getProduct(productId: string) :IProductItem;
    setPreview(productId: string | null): void;  
}

export interface IProductInBasket {
    productIndex: number; 
    productInBasket: IProductItem[]; 
    totalPrice: number;
    getProductInBasket() :IProductItem[];
    setProductInBasket(product: IProductItem[]): void;  
    deleteProduct(product: IProductItem): void;
}

export interface IFormInfoOrder {
    payment:string;
    address:string;
}

export interface IFormInfoOrderCustomer {
    email:string;
    phone:string;
}

export interface IOrderSuccess {
	id: string;
	total: number;
}