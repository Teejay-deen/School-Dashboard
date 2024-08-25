"use client";

import React, { useState } from "react";
import { Nav } from "./nav";

type Props = {};

import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  Search,
  Send,
  Settings,
  Settings2,
  ShoppingCart,
  Trash2,
  Users2,
  UsersRound,
} from "lucide-react";
import { Button } from "./button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  const toggleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && <div className="absolute right-[-20px] top-7">
        <Button
          onClick={toggleSideBar}
          variant="secondary"
          className="rounded-full p-2"
        >
          <ChevronRight />
        </Button>
      </div> }
      

      <Nav
        isCollapsed={mobileWidth  ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "ghost",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
