import "./Wikitext.css";

//  <!-- box -->
export default function Wikitext() {
  return (
    <div className="d-flex justify-content-center ">
      <div className="box1 text-center mx-5 w-100">
        <h1 className="top-text mt-3">
          <span>Welcome to</span>
          <a href="#"> wikipedia,</a>
        </h1>
        <div className="small-text">
          <p>
            the free <a href="#">encyclopedia</a> that anyone can edit.
            <br />
            <a href="#">6,494,868</a> article in <a href="#">English</a>
          </p>
        </div>
      </div>
    </div>
  );
}
