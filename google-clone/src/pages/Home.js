import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* Header starts here */}
        <div className="home-header">
          <div className="header-left">
            {/* About Link */}
            <Link to="/about">About</Link>
            {/* Store Link */}
            <Link to="/store">Store</Link>
          </div>
          <div className="header-right">
            {/* Gmail Link */}
            <Link to="/mail">Gmail</Link>
            {/* Images Link */}
            <Link to="/images">Images</Link>
            <AppsIcon />
            <AccountCircleIcon />

            {/* Icon */}
            {/* Avatar */}
          </div>
        </div>
        {/* Header ends here */}

        {/* Body starts here */}
        <div className="home-body">
          <img
            src="https://cdn.vox-cdn.com/thumbor/ULiGDiA4_u4SaK-xexvmJVYUNY0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3218223/google.jpg"
            alt=""
          />{" "}
          <div className="input-container">
            <Searchbar hideButtons />
          </div>
        </div>

        {/* Body ends here */}
      </div>
    </>
  );
};

export default Home;
