
"use client";

import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

// Define the Payment type
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

// Define the columns outside the component
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Orders",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
              "order"
            )}`}
            alt="avatar"
          />
          <p>{row.getValue("order")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium text-sm w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "PENDING",
            "bg-orange-200": row.getValue("status") === "PROCESSING",
            "bg-green-500": row.getValue("status") === "COMPLETED", 
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

// Define the data outside the component
const data: Payment[] = [
  {
    order: "ORD001",
    status: "PROCESSING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD002",
    status: "PENDING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },

  {
    order: "ORD003",
    status: "PROCESSING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD004",
    status: "PROCESSING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD005",
    status: "PENDING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD006",
    status: "PENDING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD007",
    status: "PROCESSING",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    order: "ORD008",
    status: "COMPLETED",
    lastOrder: "2024-05-04",
    method: "Bank Transfer",
  },
  {
    order: "ORD009",
    status: "COMPLETED",
    lastOrder: "2024-05-04",
    method: "Cash App",
  },
  {
    order: "ORD010",
    status: "PROCESSING",
    lastOrder: "2024-05-04",
    method: "Paypal",
  },
  {
    order: "ORD011",
    status: "PENDING",
    lastOrder: "2024-12-04",
    method: "Bitcoin",
  },
  {
    order: "ORD012",
    status: "PENDING",
    lastOrder: "2024-07-04",
    method: "credit card",
  },
  {
    order: "ORD013",
    status: "COMPLETED",
    lastOrder: "2021-09-04",
    method: "credit card",
  },
  {
    order: "ORD014",
    status: "PROCESSING",
    lastOrder: "2020-05-04",
    method: "credit card",
  },
  {
    order: "ORD015",
    status: "PENDING",
    lastOrder: "2024-11-04",
    method: "credit card",
  },
  {
    order: "ORD016",
    status: "PROCESSING",
    lastOrder: "2021-05-04",
    method: "Bank Transfer",
  },
  {
    order: "ORD017",
    status: "COMPLETED",
    lastOrder: "2023-05-04",
    method: "Stripe",
  },
  {
    order: "ORD0023",
    status: "COMPLETED",
    lastOrder: "2024-05-04",
    method: "QuickBook",
  },
  // ... more data entries
];

export default function OrdersPage() { // Capitalize the component name to adhere to convention
  return (
    <div className="flex mb-4 flex-col gap-5 w-full px-10">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
















