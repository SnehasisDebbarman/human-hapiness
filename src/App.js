import "./App.css";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo"> placeholder</div>
        <div className="navItemContainer">
          <div className="navItem">
            Home
            <div className="dot"> .</div>
          </div>
          <div className="navItem">
            {" "}
            Products
            <div className="dot">.</div>
          </div>
          <div className="navItem">
            {" "}
            about
            <div className="dot">.</div>
          </div>
          <div className="navItem">
            {" "}
            contacts
            <div className="dot">.</div>
          </div>
        </div>
      </header>
      <div className="sectionContainer">
        <section className="section-1">
          <div className="leftSection">
            <div className="subHeading">Pursue</div>
            <div className="heading">
              Of Human <br /> Happiness One
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              harum repellat corporis quis deleniti odit totam. Voluptate,
              corporis. Voluptate, a!
            </div>
          </div>
          <div className="rightSection">timeLine</div>
        </section>
        <section className="section-2">
          <div className="tabs"></div>
          <div className="tabs"></div>
          <div className="tabs"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
