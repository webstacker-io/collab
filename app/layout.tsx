"use client"
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import '../styles/globals.scss'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="container-fluid">
            <div className="row">
              <Sidebar collapsed={sidebarCollapsed} />
              <div className="col col-md-offset-2 main">
                <Header onToggleCollapse={toggleSidebarCollapse} />
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
