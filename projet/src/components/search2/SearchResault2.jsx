import "./SearchResault2.css";

export const SearchResault2 = ({ result }) => {
    return (
        <div
            className="search-result"
            onClick={(e) => alert(`You selected ${result}!`)}
        >
            {result}
        </div>
    );
};