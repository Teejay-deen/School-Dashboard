
"use client"

import React, { useState } from 'react'
import { Nav } from './nav'

type Props = {}

import {
    AlertCircle,
    Archive,
    ArchiveX,
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
  } from "lucide-react"

export default function SideNavBar({}: Props) {
  
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
        <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                href: '/',
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
  )
}