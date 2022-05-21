import "./Wikitext.css";

//  <!-- box -->
export default function Wikitext() {
  return (
    <div class="d-flex justify-content-center">
      <div class="box1 text-center mx-5">
        <h1 class="top-text mt-3">
          <span>Welcome to</span> <a href="#">wikipedia,</a>
        </h1>
        <div class="small-text">
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
