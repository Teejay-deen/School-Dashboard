import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string;
};

export default function Card(props: CardProps) {
  return <div className="border px-3 py-3 rounded-lg shadow">
    <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.label}</p>
       {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400"/>
    </section>

    <section className="flex mt-3 flex-col gap-1">
         <h2 className="text-2xl font-semibold">
            {props.amount}
         </h2>
         <p className="text-xs text-gray-500">{props.discription}</p>
    </section>
  </div>;
}

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-3 shadow p-5 rounded-xl border",
        props.className
      )}
    />
  );
};
