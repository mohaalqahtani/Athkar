"use client";

import AthkarContent from "./AthkarContent";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "morning", name: "أذكار الصباح" },
    { id: "evening", name: "أذكار المساء" },
    { id: "daily", name: "أذكار يومية" },
    { id: "tips", name: "نصائح" },
  ];

  return (
    <div className="w-full flex flex-col gap-2 rtl text-right">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="collapse collapse-arrow bg-base-100 border border-base-300"
        >
          <input
            type="radio"
            name="athkar-tabs"
            checked={activeTab === tab.id}
            onChange={() => setActiveTab(tab.id)}
          />
          <div className="collapse-title font-semibold">
            {tab.name}
          </div>
          <div className="collapse-content">
            {activeTab === tab.id && (
              <AthkarContent activeTab={tab.id} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
