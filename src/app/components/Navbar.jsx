export default function Navbar({ activeTab, setActiveTab }) {
    const tabs = [
      { id: "morning", name: "أذكار الصباح" },
      { id: "evening", name: "أذكار المساء" },
      { id: "daily", name: "أذكار يومية" },
      { id: "duaa", name: "أدعية" },
      { id: "tips", name: "نصائح" },
    ];
  
    return (
      <nav className="flex flex-col gap-1 mb-4 rtl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-right text-lg font-semibold rounded-md py-2 px-3 transition
              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-300"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    );
  }
  