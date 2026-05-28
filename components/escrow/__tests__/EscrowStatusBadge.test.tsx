import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EscrowStatusBadge } from "../EscrowStatusBadge";

describe("EscrowStatusBadge", () => {
  it("renders Pending state correctly", () => {
    render(<EscrowStatusBadge status="Pending" />);
    const badge = screen.getByText("Pending");
    expect(badge).toBeInTheDocument();
    // 'secondary' variant uses zinc-100/800
    expect(badge.className).toContain("bg-zinc-100");
  });

  it("renders Funded state correctly", () => {
    render(<EscrowStatusBadge status="Funded" />);
    const badge = screen.getByText("Funded");
    expect(badge).toBeInTheDocument();
    // 'default' variant uses zinc-900
    expect(badge.className).toContain("bg-zinc-900");
  });

  it("renders Shipped state correctly", () => {
    render(<EscrowStatusBadge status="Shipped" />);
    const badge = screen.getByText("Shipped");
    expect(badge).toBeInTheDocument();
    // 'outline' variant text-zinc-950
    expect(badge.className).toContain("text-zinc-950");
  });

  it("renders Completed state correctly", () => {
    render(<EscrowStatusBadge status="Completed" />);
    const badge = screen.getByText("Completed");
    expect(badge).toBeInTheDocument();
    // 'success' variant uses emerald-500
    expect(badge.className).toContain("bg-emerald-500");
  });

  it("renders Disputed state correctly", () => {
    render(<EscrowStatusBadge status="Disputed" />);
    const badge = screen.getByText("Disputed");
    expect(badge).toBeInTheDocument();
    // 'destructive' variant uses red-500
    expect(badge.className).toContain("bg-red-500");
  });

  it("renders Refunded state correctly", () => {
    render(<EscrowStatusBadge status="Refunded" />);
    const badge = screen.getByText("Refunded");
    expect(badge).toBeInTheDocument();
    // 'warning' variant uses amber-500
    expect(badge.className).toContain("bg-amber-500");
  });

  it("renders Cancelled state correctly", () => {
    render(<EscrowStatusBadge status="Cancelled" />);
    const badge = screen.getByText("Cancelled");
    expect(badge).toBeInTheDocument();
    // 'secondary' variant
    expect(badge.className).toContain("bg-zinc-100");
  });

  it("normalizes case-insensitive status strings", () => {
    render(<EscrowStatusBadge status="pEnDiNg" />);
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("handles unknown states safely", () => {
    render(<EscrowStatusBadge status="UNKNOWN_STATE" />);
    const badge = screen.getByText("UNKNOWN_STATE");
    expect(badge).toBeInTheDocument();
    // falls back to secondary
    expect(badge.className).toContain("bg-zinc-100");
  });

  it("accepts and applies custom className", () => {
    render(<EscrowStatusBadge status="Funded" className="custom-class" />);
    const badge = screen.getByText("Funded");
    expect(badge.className).toContain("custom-class");
  });
});
