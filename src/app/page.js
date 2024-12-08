'use client'

import { useState } from "react";

// components
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Dashboard from "@/app/dashboard/page";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <div className="p-6 xl:p-4 !pr-0 bg-bodyBg w-[calc(100%-264px)] lg:w-[calc(100%-234px)] md:w-full">
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <div className="pr-6 xl:pr-4 h-[calc(100dvh-115px)] xl:h-[calc(100dvh-98px)] overflow-y-auto">
              <Dashboard />
            </div>
        </div>
    </div>    
  );
}
