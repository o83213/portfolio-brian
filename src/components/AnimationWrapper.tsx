"use client";
import React from "react";
import { motion } from "framer-motion";
import Transition from "@/layout/Transition";
//
export default function AnimationWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main className="h-full">
      <Transition />
      {children}
    </motion.main>
  );
}
// export default function AnimationWrapper({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const pathName = usePathname();
//   return <div className="border-yellow-400">{children}</div>;
// }
