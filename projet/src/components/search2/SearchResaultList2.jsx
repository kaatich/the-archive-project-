import "./SearchResaultList2.css";
import { SearchResault2 } from "./SearchResault2";

 const SearchResaultsList2 = ({ results }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <SearchResault2 result={result.name} key={id} />;
                
            })}
        </div>
    );
};
export default SearchResaultsList2;