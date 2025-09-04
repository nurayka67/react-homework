function Header() {
  return (
    <header style={{ 
      textAlign: "center", 
      padding: "4rem 2rem",
      backgroundColor: "#2c3e50",
      color: "white",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <h1 style={{ 
        margin: "0 0 2rem 0", 
        fontSize: "4rem",
        fontWeight: "300",
        letterSpacing: "3px"
      }}>
        first page
      </h1>
      <nav style={{ 
        fontSize: "2rem",
        letterSpacing: "2px"
      }}>
        Home page | about | contacts
      </nav>
    </header>
  );
}
export default Header;
