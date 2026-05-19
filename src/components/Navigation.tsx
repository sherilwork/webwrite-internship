"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Navigation() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-border shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-1.5 flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground/80">NextSaaS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavDropdown label="Company" items={["About", "Team", "Careers"]} />
          <NavDropdown label="Collaborate" items={["For Teams", "Enterprises", "Partners"]} />
          <NavDropdown label="Resources" items={["Blog", "Documentation", "Guides"]} />
          <NavDropdown label="People & Culture" items={["Values", "Diversity", "Benefits"]} />
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </div>

        <Button className="rounded-full bg-black hover:bg-black/90 text-white px-6 font-medium">
          Get started
        </Button>
      </nav>
    </header>
  )
}

function NavDropdown({ label, items }: { label: string; items: string[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
        {label}
        <ChevronDown className="w-4 h-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48 p-2 rounded-xl">
        {items.map((item) => (
          <DropdownMenuItem key={item} className="cursor-pointer rounded-lg">
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
