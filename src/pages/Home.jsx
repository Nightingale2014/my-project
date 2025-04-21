import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header.jsx";

function Home() {
    return (
        <div className=" min-h-screen"> {/* 부모 relative */}

        <Header/>

            {/* 가운데 정렬된 콘텐츠 */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                <SearchBar />
            </div>
        </div>
    );
}
export default Home;


