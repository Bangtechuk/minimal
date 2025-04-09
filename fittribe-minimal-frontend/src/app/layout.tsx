import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'FitTribe - Find Your Perfect Fitness Trainer',
  description: 'Connect with certified fitness trainers for personalized workouts and training sessions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
