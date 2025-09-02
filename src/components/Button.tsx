import React from 'react';
import { Link } from 'react-router-dom';

// Defines the props for the Button component
interface ButtonProps {
  children: React.ReactNode;
  to: string;
  primary?: boolean;
}

/**
 * A reusable button component that links to other pages.
 * @param {ButtonProps} props The properties for the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({ children, to, primary = false }) => {
  const buttonClass = primary ? 'btn btn--primary' : 'btn btn--outline';

  return (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>
  );
};

export default Button;