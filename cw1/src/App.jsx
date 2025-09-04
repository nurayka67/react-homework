import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Footer from "./components/Footer"

function App() {
  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "#ecf0f1",
      padding: "0",
      margin: "0",
      width: "100vw",
      overflowX: "hidden"
    }}>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}
export default App;
