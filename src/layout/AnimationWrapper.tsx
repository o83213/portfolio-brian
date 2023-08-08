"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/layout/Transition";
import { usePathname } from "next/navigation";
//
// export default function AnimationWrapper({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const pathName = usePathname();
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div>
//         <Transition />
//         <div className="border-yellow-400">{children}</div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
export default function AnimationWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return <div className="border-yellow-400">{children}</div>;
}
