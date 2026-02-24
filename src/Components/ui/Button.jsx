// import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = "button",
  variant = "default",
  size = "default",
  className = "",
  ...rest 
}) => {
  
  // Base styles for all buttons
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body";
  
  // Variant styles
  const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-card",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated hover:shadow-card hover:-translate-y-0.5 text-base px-8 py-6",
        heroOutline: "border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:-translate-y-0.5 text-base px-8 py-6",
        cta: "bg-cta text-cta-foreground hover:bg-cta/90 shadow-card hover:shadow-elevated hover:-translate-y-0.5 font-semibold",
  };
  
  // Size styles
  const sizeStyles = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
  };
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();
  

  // console.log('Button variant:', variant);
  // console.log('Button classes:', buttonClasses);
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;