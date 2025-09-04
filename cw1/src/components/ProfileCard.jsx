function ProfileCard() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "6rem 4rem",
      width: "100%",
      maxWidth: "none",
      margin: "0",
      backgroundColor: "white",
      boxSizing: "border-box",
      flex: "1"
    }}>
      <h2 style={{ 
        margin: "0 0 3rem 0", 
        fontSize: "3.5rem",
        color: "#2c3e50",
        fontWeight: "400",
        letterSpacing: "2px"
      }}>
        Nuray
      </h2>
      <p style={{ 
        margin: "0", 
        fontSize: "2.5rem",
        color: "#7f8c8d",
        lineHeight: "1.6"
      }}>
        Email: smith@gmail.com
      </p>
    </div>
  );
}
export default ProfileCard;
