import { useContext } from "react";
import logo from "../assets/images/3d-rendering-gps-travel-icon_23-2149389115_prev_ui.png";
import { IpContext } from "../context.jsx/IpContext";

export default function Header() {
  const { location, handleSearch, searchIp, setSearchIp } =
    useContext(IpContext);

  return (
    <header>
      <div className="container">
        <h1>
          <img src={logo} alt="" className="logo" />
          <b> IP Tracker</b>
        </h1>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            value={searchIp}
            onChange={(e) => setSearchIp(e.target.value)}
            name="searchInput"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <small>
          <b>Made with 🔥 by Japheth Joepari</b>
        </small>
        <div className="search-result">
          <div className="ip-addr">
            <span>IP Address</span>
            <h2>{location?.ip || "__"}</h2>
          </div>
          <div className="location">
            <span>Location</span>
            <h2>{location?.city || "__"}</h2>
          </div>
          <div className="timezone">
            <span>Timezone</span>
            <h2>{location?.timezone || "__"}</h2>
          </div>
          <div className="isp">
            <span>Isp</span>
            <h2>{location?.org || "__"}</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
