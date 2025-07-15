import { useState } from "react";
import morning from "../data/morning";
import evening from "../data/evening";
import daily from "../data/daily";
import tips from "../data/tips";

export default function AthkarContent({ activeTab }) {
  const contentMap = { morning, evening, daily, tips };
  const content = contentMap[activeTab] || [];

  // دالة نسخ النص للحافظة
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("تم نسخ الذكر!");
    }
  };

  return (
    <div className="flex flex-col gap-2 max-h-[480px] overflow-y-auto rtl">
      {content.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-blue-50 dark:bg-gray-700 rounded-md p-3 shadow-sm"
        >
          <p className="text-blue-900 dark:text-gray-200 text-right flex-1">{item}</p>
          <button
            onClick={() => copyToClipboard(item)}
            className="ml-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
            aria-label="Copy Dhikr"
          >
            📋
          </button>
        </div>
      ))}
    </div>
  );
}
