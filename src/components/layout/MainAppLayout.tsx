import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the layout container.
   */
  className?: string;
}

/**
 * A full-screen layout component that centers its children both vertically and horizontally.
 * Ideal for pages like login, signup, or 404 pages that require a focused view.
 * 
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
