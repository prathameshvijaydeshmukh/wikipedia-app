import "./Header.css";

export default function Header() {
  return (
    <div id="mp1" className="main-page1">
      {/* top text */}
      <div className="top-menu d-flex justify-content-end mx-4">
        <div className="d-flex mt-2">
          <i className="fa fa-user mt-1"></i>
          <span className="logged-in px-1">Not logged in</span>
          <a className="services px-1" href="#">
            Talk
          </a>
          <a className="contribution px-1" href="#">
            Contributions
          </a>
          <a className="create account px-1" href="#">
            Create account
          </a>
          <a className="log in px-1" href="#">
            Log in
          </a>
        </div>
      </div>
      {/* Bottom text */}
      <div className="down-menu d-flex mt-5 justify-content-between">
        <div className="ml-4">
          <a className="mp">Main Page</a>
          <a className="talk px-2" href="#">
            Talk
          </a>
        </div>
        <div className="">
          <a className="read px-1">Read</a>
          <a className="view-source px-2" href="#">
            View source
          </a>
          <a class="view-history px-1" href="#">
            View history
          </a>
        </div>
      </div>
    </div>
  );
}
