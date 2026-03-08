/*import { useState } from "react";

function Search({ onSelectTab }) {
  const [query, setQuery] = useState("");

  const data = [
    { title: "Our Values", tabKey: "First" },
    { title: "Our Champions", tabKey: "Second" },
    { title: "Our Puppies", tabKey: "Third" },
    { title: "Our Condition", tabKey: "Fourth" }
  ];

  const filtered = data.filter(item =>
    item.title && item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (tabKey) => {
    if (onSelectTab) onSelectTab(tabKey);
    setQuery("");
  };

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "5px" }}
      />
      {query && filtered.length > 0 && (
        <div style={{
          position: "absolute",
          top: "30px",
          width: "100%",
          background: "#fff",
          border: "1px solid #ccc",
          zIndex: 1000
        }}>
          {filtered.map(item => (
            <div
              key={item.tabKey}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => handleClick(item.tabKey)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;*/