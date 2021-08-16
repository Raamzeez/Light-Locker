export interface iRecurring {
  aggregate_usage: string;
  interval: "month" | "year" | "week" | "day";
  interval_count: number;
  usage_type: "metered" | "license";
  type: string;
  unit_amount: number;
}
