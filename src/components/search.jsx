import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function Search({ onSelectTab }) {
  const [query, setQuery] = useState("");

  const data = [
    { title: "Our Values", tabKey: "first" },
    { title: "Our Champions", tabKey: "second" },
    { title: "Our Puppies", tabKey: "third" },
    { title: "Our Condition", tabKey: "fourth" }
  ];

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (tabKey) => {
    if (onSelectTab) onSelectTab(tabKey);
    setQuery("");
  };

  const handleSearchButton = () => {
    if (filtered.length > 0) {
      handleClick(filtered[0].tabKey); // вибирає перший результат
    }
  };

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <InputGroup>
        <FormControl
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ borderRadius: "10px 0 0 10px" }}
        />
        <Button
          variant="outline-light"
          style={{ borderRadius: "0 10px 10px 0" }}
          onClick={handleSearchButton}
        >
          Search
        </Button>
      </InputGroup>

      {query && (
        <div style={{
          position: "absolute",
          top: "38px",
          width: "100%",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "0 0 10px 10px",
          zIndex: 1000
        }}>
          {filtered.length > 0 ? (
            filtered.map(item => (
              <div
                key={item.tabKey}
                style={{ padding: "5px", cursor: "pointer" }}
                onClick={() => handleClick(item.tabKey)}
              >
                {item.title}
              </div>
            ))
          ) : (
            <div style={{ padding: "5px", color: "gray" }}>
              Nothing found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;