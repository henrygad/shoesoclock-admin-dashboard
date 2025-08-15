export type CouponTypeProps = {
  code: string;
  type: "Percentage" | "Fixed amount";
  value: string;
  start_date: string;
  end_date: string;
  usage_limit: number | "Unlimited";
  status: "Active" | "Inactive";
};
