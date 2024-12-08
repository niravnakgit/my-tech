import Link from 'next/link';
import React from 'react';

const Button = (props) => {
  const { href, type, onClick, children, className } = props;

  if (href) {
    return (
      <Link href={href} className={`py-2.5 px-3.5 rounded-lg bg-secondary-50 flex items-center duration-300 text-secondary-600 text-xxs font-semibold capitalize hover:text-secondary-50 hover:bg-secondary-600 ${className}`}>
            {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`py-2.5 px-3.5 rounded-lg bg-secondary-50 flex items-center duration-300 text-secondary-600 text-xxs font-semibold capitalize hover:text-secondary-50 hover:bg-secondary-600 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
