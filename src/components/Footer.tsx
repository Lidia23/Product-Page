import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-customBlue dark:text-white mt-5 mx-auto text-center mb-5">
      <p className="text-sm">&copy; {currentYear} Company! All rights reserved.</p>
    </footer>
  );
}
