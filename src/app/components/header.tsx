import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recall-Summarize-Anything-Forget-Nothing-01-13-2025_01_56_PM-GDqpbPAHbgGNIUMmunEa65XTVStr6E.png"
            alt="Recall logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/summaries"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Summaries
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center transition-colors hover:text-foreground/80 text-foreground"
          >
            Docs
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">
              Log in
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

