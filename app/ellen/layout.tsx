"use client";

import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <style jsx>{`
        .layout {
          min-height: 100vh;
          background-color: #ffeef0; /* Very light pink */
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='%23ffccd5'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
};


export default function EllenLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<Layout>
			{children}
		</Layout>
	);
}

