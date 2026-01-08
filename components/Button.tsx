import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button',
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variantStyles = {
        primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-sm',
        secondary: 'bg-white text-[var(--text-primary)] border border-[var(--border)] hover:bg-gray-50',
        outline: 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white',
    };

    const sizeStyles = {
        sm: 'text-sm px-4 py-2 rounded-lg',
        md: 'text-base px-6 py-2.5 rounded-full',
        lg: 'text-lg px-8 py-3.5 rounded-full',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
}
