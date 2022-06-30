import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MapIcon from "@mui/icons-material/Map";
import Searchbar from "../components/Searchbar";
import { useStateValue } from "../context/context";
import useGoogleSearch from "../hooks/useGoogleSearch";
import response from "../keys/response";

const Search = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); // Live API Call

  // // Local API Call
  // const data = response;
  // console.log(data);

  return (
    <>
      <div className="search-page">
        <div className="search-page-header">
          <Link to="/">
            <img
              className="searchPage-logo"
              src="https://www.brandinginasia.com/wp-content/uploads/2015/09/New-Google-Logo-great.jpg"
              alt="logo"
            />
          </Link>
          <div className="header-body">
            <Searchbar />
            <div className="search-page-options">
              <div className="search-page-options-left">
                <div className="search-page-option">
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className="search-page-option">
                  <NewspaperIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className="search-page-option">
                  <ImageSearchIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className="search-page-option">
                  <ShoppingCartIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="search-page-option">
                  <MapIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="search-page-option">
                  <MoreHorizIcon />
                  <Link to="/more">More</Link>
                </div>
              </div>
              <div className="search-page-options-right">
                {" "}
                <Link to="/settings">Settings </Link>
                {/* <Link to="/tools"> Tools</Link> */}
              </div>
            </div>
          </div>
        </div>
        {term && (
          <div className="search-page-results">
            <p className="search-page-result-count">
              About {data?.searchInformation.formattedTotalResults} results in (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map((item) => (
              <div className="search-page-result">
                {/* Link */}
                <a href={item.link}>{item.displayLink}</a>
                {/* Link Title */}
                <a href={item.link} className="search-page-result-title">
                  <h2>{item.title}</h2>
                </a>{" "}
                {/* Snippet */}
                <p className="search-page-result-snippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Search;
