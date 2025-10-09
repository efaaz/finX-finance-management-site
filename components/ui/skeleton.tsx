import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[#1c1c1c] animate-pulse rounded-lg", className)}
      {...props}
    />
  )
}

export { Skeleton }
