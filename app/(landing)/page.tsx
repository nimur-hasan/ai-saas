import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div className="">Landing Page (Unprotected)</div>
      <Link href='/dashboard'>
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
}
