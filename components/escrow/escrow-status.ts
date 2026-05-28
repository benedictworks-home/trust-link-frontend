import { BadgeProps } from "@/components/ui/Badge";

export type EscrowState =
  | "Pending"
  | "Funded"
  | "Shipped"
  | "Completed"
  | "Disputed"
  | "Refunded"
  | "Cancelled";

export interface EscrowStatusConfig {
  label: string;
  variant: BadgeProps["variant"];
}

export const ESCROW_STATUS_MAP: Record<EscrowState, EscrowStatusConfig> = {
  Pending: { label: "Pending", variant: "secondary" },
  Funded: { label: "Funded", variant: "default" },
  Shipped: { label: "Shipped", variant: "outline" },
  Completed: { label: "Completed", variant: "success" },
  Disputed: { label: "Disputed", variant: "destructive" },
  Refunded: { label: "Refunded", variant: "warning" },
  Cancelled: { label: "Cancelled", variant: "secondary" },
};
