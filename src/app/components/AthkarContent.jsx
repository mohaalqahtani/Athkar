'use client';

import { useState } from "react";
import morning from "../data/morning";
import evening from "../data/evening";
import daily from "../data/daily";
import tips from "../data/tips";

export default function AthkarContent({ activeTab }) {
  const contentMap = { morning, evening, daily, tips };
  const content = contentMap[activeTab] || [];

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2 max-h-[480px] overflow-y-auto rtl text-right relative">
      {copied && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
          ✅ تم النسخ!
        </div>
      )}

      {content.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-blue-50 dark:bg-gray-700 rounded-md p-3 shadow-sm"
        >
          <p className="text-blue-900 dark:text-gray-200 text-right flex-1">
            {`${i + 1}- ${item}`}
          </p>
          <button
            onClick={() => copyToClipboard(item)}
            className="ml-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
            aria-label="نسخ الذكر"
          >
            📋
          </button>
          
        </div>
      ))}
    </div>
  );
}
