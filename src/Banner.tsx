// src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="container my-4 p-4 rounded bg-light text-center">
      {children}
    </div>
  );
};

export default Banner;
