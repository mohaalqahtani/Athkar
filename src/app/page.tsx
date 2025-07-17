"use client";

import { useState, useEffect } from "react";
import Navbar from "../app/components/Navbar";
export default function Page() {
  const [activeTab, setActiveTab] = useState("morning");


  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-8 px-4 font-sans transition-colors duration-500">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6">
          <header className="flex justify-between items-center mb-4">
            {/* <h1 className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 rtl">
              🌙 تطبيق الأذكار
            </h1> */}
          </header>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

      </div>
  );
}
