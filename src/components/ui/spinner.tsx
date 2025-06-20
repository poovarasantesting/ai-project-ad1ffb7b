import React from "react";
import { cn } from "@/lib/utils";

export type SpinnerVariant = "circle" | "dots" | "pulse" | "wave";
export type SpinnerSize = "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  color?: SpinnerColor;
}

export function Spinner({
  variant = "circle",
  size = "md",
  color = "primary",
  className,
  ...props
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const colorClasses = {
    default: "text-gray-400",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  };

  const renderSpinner = () => {
    switch (variant) {
      case "circle":
        return (
          <div className={cn("animate-spin", sizeClasses[size], colorClasses[color], className)} {...props}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        );
      case "dots":
        return (
          <div className={cn("flex space-x-1", className)} {...props}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "animate-bounce rounded-full",
                  colorClasses[color],
                  size === "sm" ? "h-1 w-1" : 
                  size === "md" ? "h-2 w-2" : 
                  size === "lg" ? "h-3 w-3" : "h-4 w-4",
                  "bg-current"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        );
      case "pulse":
        return (
          <div
            className={cn(
              "animate-pulse rounded-full",
              sizeClasses[size],
              colorClasses[color],
              "bg-current",
              className
            )}
            {...props}
          ></div>
        );
      case "wave":
        return (
          <div className={cn("flex items-end space-x-1", className)} {...props}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "animate-wave bg-current",
                  colorClasses[color],
                  size === "sm" ? "h-2 w-1" : 
                  size === "md" ? "h-4 w-1" : 
                  size === "lg" ? "h-6 w-1.5" : "h-8 w-2",
                  "rounded-full"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return renderSpinner();
}