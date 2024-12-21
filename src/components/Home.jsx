import Header from "./Header";
import Footer from "./Footer";
import masterImage from "../assets/uday.jpeg";
function Home() {
  return (
    <div>
      <Header />
      <div className="home-page">
        <div>
          <h1>SP UDAY KIRAN REDDY</h1>
          <div className="typing">React Developer and Java Programmer</div>
          <button
            className="btn"
            onClick={() => window.open("https://shorturl.at/3OjrC", "_blank")}
          >
            Download CV{" "}
          </button>
        </div>
        <img src={masterImage} alt="master-image" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
