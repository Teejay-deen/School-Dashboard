"use client";
import { DataTable } from "@/components/ui/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex mb-4 flex-col gap-5 w-full px-10">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">

          <img className="h-10 w-10"
            
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`}
            alt="avatar"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
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

export const data: Payment[] = [
  {
    name: "Tajudeen",
    email: "Tajudeen@gmail.com",
    lastOrder: "2024-05-04",
    method: "credit card",
  },
  {
    name: "Byna",
    email: "Byna@gmail.com",
    lastOrder: "2023-05-04",
    method: "credit card",
  },
  {
    name: "Endurance",
    email: "Endurance@gmail.com",
    lastOrder: "2024-03-20",
    method: "credit card",
  },
  {
    name: "Omaye",
    email: "Omaye@gmail.com",
    lastOrder: "2024-01-01  ",
    method: "Cash App",
  },
  {
    name: "Byna",
    email: "Byna@gmail.com",
    lastOrder: "2023-05-04",
    method: "Paypal",
  },
  {
    name: "Ibrahim",
    email: "Ibrahim@gmail.com",
    lastOrder: "2023-05-04",
    method: "Wire Transfer",
  },
  {
    name: "Olufunmi",
    email: "Olufunmi@gmail.com",
    lastOrder: "2021-03-04",
    method: "Google pay",
  },
  {
    name: "Sadiq",
    email: "Sadiq@gmail.com",
    lastOrder: "2022-05-24",
    method: "Apple pay",
  },
  {
    name: "Farouq",
    email: "Farouq@gmail.com",
    lastOrder: "2023-05-04",
    method: "Google pay",
  },
  {
    name: "Kehinde",
    email: "Kehinde@gmail.com",
    lastOrder: "2021-03-14",
    method: "Paypal pay",
  },
  {
    name: "Idowu",
    email: "Idowu@gmail.com",
    lastOrder: "2020-05-17",
    method: "Cash App",
  },
  {
    name: "Olamiposi",
    email: "Olamiposi@gmail.com",
    lastOrder: "2023-05-14",
    method: "Apple pay",
  },
  {
    name: "Yusuf",
    email: "Yusuf@gmail.com",
    lastOrder: "2023-05-09",
    method: "Google pay",
  },
  {
    name: "Adeola",
    email: "Adeola@gmail.com",
    lastOrder: "2023-05-10",
    method: "Google pay",
  },
  {
    name: "Oluwani",
    email: "Oluwani@gmail.com",
    lastOrder: "2022-05-04",
    method: "Google pay",
  },
  {
    name: "Ismaila",
    email: "Ismaila@gmail.com",
    lastOrder: "2023-05-04",
    method: "Google pay",
  },
  // ...
];
