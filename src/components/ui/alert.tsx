import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/shadcn.ts"

const alertVariants = cva(
  "lh-relative lh-w-full lh-rounded-lg lh-border lh-px-4 lh-py-3 lh-text-sm [&>svg+div]:lh-translate-y-[-3px] [&>svg]:lh-absolute [&>svg]:lh-left-4 [&>svg]:lh-top-4 [&>svg]:lh-text-foreground [&>svg~*]:lh-pl-7",
  {
    variants: {
      variant: {
        default: "lh-bg-background lh-text-foreground",
        destructive:
          "lh-border-destructive/50 lh-text-destructive dark:lh-border-destructive [&>svg]:lh-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("lh-mb-1 lh-font-medium lh-leading-none lh-tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("lh-text-sm [&_p]:lh-leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
