import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TagList from "./components/TagList";

function App() {
    return (
        <div className="layout-container">
            <Header />
            <SearchBar />
            <TagList />
        </div>
    );
}

export default App;
