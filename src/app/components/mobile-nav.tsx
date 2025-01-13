'use client'

import Link from "next/link"
import Image from "next/image"
import { X, Menu, ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-screen pt-6 bg-[#020817]">
        <SheetHeader className="mb-8">
          <div className="flex justify-center">
            <Image
              src="/recall-logo.svg"
              alt="Recall logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </SheetHeader>
        <nav className="flex flex-col items-center space-y-6 text-lg">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/summaries"
            onClick={() => setOpen(false)}
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Summaries
          </Link>
          <Link
            href="/docs"
            onClick={() => setOpen(false)}
            className="inline-flex items-center text-foreground hover:text-foreground/80 transition-colors"
          >
            Docs
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </Link>
        </nav>
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center space-y-4 px-6">
          <Button
            variant="outline"
            className="w-full max-w-[280px] text-lg h-12 border-[#0066FF]/30 bg-[#020817] hover:bg-[#020817]/90 hover:border-[#0066FF]/50 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)',
            }}
            asChild
          >
            <Link href="/login" onClick={() => setOpen(false)}>
              Log in
            </Link>
          </Button>
          <Button
            variant="outline"
            className="w-full max-w-[280px] text-lg h-12 border-[#0066FF]/30 bg-[#020817] hover:bg-[#020817]/90 hover:border-[#0066FF]/50 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)',
            }}
            asChild
          >
            <Link href="/signup" onClick={() => setOpen(false)}>
              Sign up
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

