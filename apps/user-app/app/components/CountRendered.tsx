"use client";
import { useBalance } from "@repo/store/useBalance";

export default function CountRenderer() {
  const balance = useBalance();
  return (
    <div>
       Hii there {balance}
    </div>
  );
}