import { useState, useEffect } from "react";
import Heading from "./components/heading/heading";
import SearchBox from "./components/searchbox/searchbox";
import CardList from "./components/card-list/cardlist";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      {/* Heading */}
      <Heading />
      {/* Search-Box */}
      <SearchBox onSearchChange={onSearchChange} />
      {/* List of Cards with Individual Card Components */}
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
