"use client";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";

export function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4">
      <Button
        variant="secondary"
        onClick={() =>
          document
            .getElementById("portfolio")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Portfolio
      </Button>

      <Link href="/contact">
        <GradientButton>Contact us</GradientButton>
      </Link>
    </div>
  );
}
