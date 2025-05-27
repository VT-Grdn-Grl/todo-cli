import React from "react";

interface UniversalViewProps {
  children: React.ReactNode;
  className?: string;
  style?: string | React.CSSProperties;
  variant?: "default" | "card";
  padding?: "sm" | "md" | "lg";
  margin?: "sm" | "md" | "lg";
}

const UniversalView: React.FC<UniversalViewProps> = ({
  children,
  className = "",
  style,
  variant = "default",
  padding = "md",
  margin,
}) => {
  const baseClasses = "w-full";
  const variantClasses = variant === "card" ? "bg-white rounded-lg shadow-md" : "";
  const paddingClasses = {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  }[padding];
  const marginClasses = margin
    ? {
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
      }[margin]
    : "";

  // Handle style prop - if it's a string, treat it as className
  const finalClassName = typeof style === "string" 
    ? `${baseClasses} ${variantClasses} ${paddingClasses} ${marginClasses} ${className} ${style}`
    : `${baseClasses} ${variantClasses} ${paddingClasses} ${marginClasses} ${className}`;

  const finalStyle = typeof style === "object" ? style : undefined;

  return (
    <div className={finalClassName} style={finalStyle}>
      {children}
    </div>
  );
};

export default UniversalView;