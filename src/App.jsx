import Header from "./components/Header";
import Map from "./components/Map";
import IpProvider from "./context.jsx/IpContext";

function App() {
  return (
    <div className="App">
      <IpProvider>
        <div>
          <Header />
          <Map />
        </div>
      </IpProvider>
    </div>
  );
}

export default App;
