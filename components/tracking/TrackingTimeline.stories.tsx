import type { Meta, StoryObj } from "@storybook/react";
import TrackingTimeline from "./TrackingTimeline";
import { Escrow } from "@/types";

const meta: Meta<typeof TrackingTimeline> = {
  title: "Tracking/TrackingTimeline",
  component: TrackingTimeline,
};

export default meta;

const mockEscrowPending: Escrow = {
  id: "esc_123",
  vendorId: "vendor_1",
  buyerId: "buyer_1",
  amount: 150.00,
  item: "Wireless Headphones",
  status: "PENDING",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  history: [],
};

const mockEscrowFunded: Escrow = {
  ...mockEscrowPending,
  status: "FUNDED",
};

const mockEscrowShipped: Escrow = {
  ...mockEscrowPending,
  status: "SHIPPED",
};

const mockEscrowCompleted: Escrow = {
  ...mockEscrowPending,
  status: "COMPLETED",
};

const mockEscrowDisputed: Escrow = {
  ...mockEscrowPending,
  status: "DISPUTED",
};

export const Loading: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowPending,
    loading: true,
  },
};

export const OrderPlaced: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowPending,
  },
};

export const PaymentConfirmed: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowFunded,
  },
};

export const Shipped: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowShipped,
  },
};

export const Delivered: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowCompleted,
  },
};

export const Disputed: StoryObj<typeof TrackingTimeline> = {
  args: {
    escrowId: "esc_123",
    initialEscrow: mockEscrowDisputed,
  },
};
