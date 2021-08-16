interface iPrice {
  id: string;
  object: string;
  active: true;
  billing_scheme: string;
  created: Date;
  currency: string;
  livemode: false;
  lookup_key: string;
  metadata: {};
  nickname: string;
  product: string;
  recurring: iRecurring;
  tax_behavior: string;
  tiers_mode: string;
  transform_quantity: iTransformQuantity;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}
