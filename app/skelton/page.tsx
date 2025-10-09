"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonPage() {
  return (
    <section className="bg-black min-h-screen flex flex-col p-4 pt-24 md:pt-28 md:p-10 lg:p-28 gap-6">
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-4 p-4 w-[280px] lg:w-[350px]"
          >
            {/* Main skeleton block */}
            <Skeleton className="h-[150px] w-full rounded-xl " />
            {/* Text skeletons */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
