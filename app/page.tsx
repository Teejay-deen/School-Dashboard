import PageTitle from "@/components/ui/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/ui/Card";
import Image from "next/image";
import BarChart from "@/components/ui/BarChart";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";

const CardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,000.34",
    discription: "+20.% from last month",
    icon: DollarSign,
  },

  {
    label: "Subscription",
    amount: "+23450",
    discription: "+80.% from last month",
    icon: Users,
  },

  {
    label: "Sales",
    amount: "$12,546.89",
    discription: "+20.% from last month",
    icon: CreditCard,
  },

  {
    label: "Active Now",
    amount: "+489",
    discription: "+19% from last month",
    icon: Activity,
  },
];

const userSaleData: SalesProps[] = [
  {
    name: "Tajudeen",
    email: "Tajudeen@gmail.com",
    saleAmount: "+$12,000",
  },
  {
    name: "Bynalab",
    email: "Bynalab@gmail.com",
    saleAmount: "+$2,000",
  },
  {
    name: "Endurance",
    email: "Endurance@gmail.com",
    saleAmount: "+$6,000",
  },
  {
    name: "Farouq",
    email: "Farouq@gmail.com",
    saleAmount: "+$12,000",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full px-10">
      <PageTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 translate-all sm:grid-cols-2 xl:grid-cols-4">
        {CardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 mb-6 gap-4 sm:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-4" >
          <section>
            <p className="font-semibold">Recent Sales</p>
            <p className="text-gray-500 text-sm">
              You made 365 sales this month
            </p>
          </section>
          {userSaleData.map((data, index) => (
            <SalesCard
              key={index}
              name={data.name}
              email={data.email}
              saleAmount={data.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
