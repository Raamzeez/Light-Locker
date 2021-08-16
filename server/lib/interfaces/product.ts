import { iPackageDimensions } from "./packageDimensions";

export interface iProduct {
  id: string;
  object: string;
  active: boolean;
  created: Date;
  description: string;
  images: string[] | [];
  livemode: boolean;
  metadata: {};
  name: string;
  package_dimensions: iPackageDimensions;
  shippable: boolean;
  statement_descriptor: string;
  tax_code: string;
  unit_label: string;
  updated: Date;
  url: string;
}
