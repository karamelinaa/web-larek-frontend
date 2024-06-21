import { IOrderData, IOrderSuccess, IProductItem } from '../types';
import { Api, ApiListResponse } from './base/api';

export interface IAppAPI {
	getCardItem: (id: string) => Promise<IProductItem>;
	getCardList: () => Promise<IProductItem[]>;
	orderProduct: (order: IOrderData) => Promise<IOrderSuccess>;
}

export class WebAPI extends Api implements IAppAPI {
	readonly cdn: string;

	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	getCardItem(id: string): Promise<IProductItem> {
		return this.get(`/product/${id}`).then((item: IProductItem) => ({
			...item,
			image: this.cdn + item.image,
		}));
	}

	getCardList(): Promise<IProductItem[]> {
		return this.get('/product').then((data: ApiListResponse<IProductItem>) =>
			data.items.map((item) => ({
				...item,
				image: this.cdn + item.image,
			}))
		);
	}

	orderProduct(order: IOrderData): Promise<IOrderSuccess> {
		return this.post('/order', order).then((data: IOrderSuccess) => data);
	}
}