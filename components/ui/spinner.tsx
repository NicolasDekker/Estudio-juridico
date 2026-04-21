"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center",
        className,
      )}
      {...props}
    >
      <Image
        src="/icon-dark.png"
        alt=""
        width={64}
        height={64}
        className="h-full w-full animate-spin object-contain"
        aria-hidden
      />
    </div>
  )
}

export { Spinner }
