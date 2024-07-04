"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter()

  return (
    <div className="flex flex-col gap-2">
      Home Page {count}
      <Button onClick={() => router.push('/pokemon')}>Navigate</Button>
    </div>
  );
}
