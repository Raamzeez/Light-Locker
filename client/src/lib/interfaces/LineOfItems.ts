export interface iLineOfItems {
  price_data?: {
    currency: string;
    product_data?: {
      name: string;
    };
    unit_amount?: number;
  };
  price?: string;
  quantity: number;
}
