import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50";
    
    let variantStyles = "";
    switch (variant) {
      case 'outline':
        variantStyles = "border border-gray-300 bg-transparent shadow-sm hover:bg-gray-100 text-gray-900";
        break;
      case 'ghost':
        variantStyles = "hover:bg-gray-100 hover:text-gray-900 text-gray-700";
        break;
      case 'link':
        variantStyles = "text-brand-blue underline-offset-4 hover:underline";
        break;
      default:
        variantStyles = "bg-brand-blue text-white shadow hover:bg-brand-blue/90";
    }

    let sizeStyles = "";
    switch (size) {
      case 'sm':
        sizeStyles = "h-8 rounded-md px-3 text-xs";
        break;
      case 'lg':
        sizeStyles = "h-12 rounded-md px-8 text-base";
        break;
      case 'icon':
        sizeStyles = "h-9 w-9";
        break;
      default:
        sizeStyles = "h-10 px-4 py-2";
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
