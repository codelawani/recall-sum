import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { montserrat } from "../fonts";

export default function Header() {
  return (
    <header
      className={`flex justify-center sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${montserrat.className}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 xl:w-4/5">
        <Link href="/" className="flex items-center">
          <Image
            src="/recall-logo.svg"
            alt="Recall logo"
            width={137}
            height={50}
          />
        </Link>
        <nav className="hidden md:flex items-center justify-center space-x-1 font-medium">
          <Link
            href="https://www.getrecall.ai/"
            target="_blank"
            className="transition-colors hover:bg-secondary rounded-2xl px-4 py-2 text-foreground"
          >
            Home
          </Link>
          <Link
            href="https://www.getrecall.ai/blog"
            target="_blank"
            className="transition-colors hover:bg-secondary rounded-2xl px-4 py-2 text-foreground"
          >
            Blog
          </Link>
          <Link
            href="https://www.getrecall.ai/pricing"
            target="_blank"
            className="transition-colors hover:bg-secondary rounded-2xl px-4 py-2 text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="https://www.getrecall.ai/summaries"
            target="_blank"
            className="transition-colors hover:bg-secondary rounded-2xl px-4 py-2 text-foreground"
          >
            Summaries
          </Link>
          <Link
            href="https://docs.getrecall.ai"
            target="_blank"
            className="inline-flex items-center transition-colors hover:bg-secondary rounded-2xl px-4 py-2 text-foreground"
          >
            Docs
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            asChild
            className="hover:bg-secondary rounded-2xl px-4"
          >
            <Link href="https://app.getrecall.ai/login" target="_blank">
              Log in
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-2xl border-2 border-white hover:bg-blue-700 hover:border-blue-700"
          >
            <Link href="https://app.getrecall.ai/signup" target="_blank">
              Sign up
            </Link>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
