import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header">
        <h1>My Website</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>

      <div className="topnav">
        <Link href="#">Link</Link>
        <Link href="#">Link</Link>
        <Link href="#">Link</Link>
        <Link href="#" style={{ float: "right" }}>
          Link
        </Link>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: "100px" }}>
              Image
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
            <div className="fakeimg">
              <p>Image</p>
            </div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
};
const About = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      About
    </div>
  );
};
const Contact = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      Contact
    </div>
  );
};
const Services = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      Services
    </div>
  );
};
const Account = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      Account
    </div>
  );
};

export { About, Account, Contact, Home, Services };
