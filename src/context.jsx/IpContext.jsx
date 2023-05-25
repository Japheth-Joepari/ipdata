import { useEffect, createContext, useState } from "react";
import "leaflet/dist/leaflet.css";

export const IpContext = createContext();

const IpProvider = ({ children }) => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState(null);
  const [searchIp, setSearchIp] = useState("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (response.ok) {
          const data = await response.json();
          const ipAddress = data.ip;
          setIp(ipAddress);
          fetchLocation(ipAddress); // Pass the ipAddress to fetchLocation
        } else {
          throw new Error("Unable to fetch IP address");
        }
      } catch (error) {
        console.log(error); // Handle any errors that occur during the request
      }
    };

    const fetchLocation = async (ipAddress) => {
      try {
        const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        if (response.ok) {
          const data = await response.json();
          setLocation(data);
        } else {
          throw new Error("Unable to fetch location");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchIpAddress();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchIp) {
      try {
        const response = await fetch(`https://ipapi.co/${searchIp}/json/`);
        if (response.ok) {
          const data = await response.json();
          setLocation(data);
        } else {
          throw new Error("Unable to fetch location");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <IpContext.Provider
      value={{ location, handleSearch, searchIp, setSearchIp }}
    >
      {children}
    </IpContext.Provider>
  );
};

export default IpProvider;
