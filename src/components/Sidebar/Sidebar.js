import "./Sidebar.css";
export default function Sidebar() {
  const Sidebardata = [
    "Main Page",
    "Contents",
    "Current events",
    "Random artical",
    "About wikipedia",
    "contact us",
    "Donate",
  ];

  return (
    <div class="d-flex h-auto">
      {/* left side list  */}
      <div className="list-group">
        <div>
          <img className="image5 ml-3" src="image/wikipedia-logo.png" />
        </div>
        <ul type="none" className="list-menu mt-4 text pl-0 ml-4 text-justify">
          {Sidebardata.map((list, i) => (
            <li key={i}>
              <a href="#">{list}</a>
            </li>
          ))}
        </ul>
        {/* <li>
          <a href="#">Contents</a>
        </li>
        <li>
          <a href="#">Current events</a>
        </li>
        <li>
          <a href="#">Random artical</a>
        </li>
        <li>
          <a href="#">About wikipedia</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
        <li>
          <a href="#">Donate </a>
        </li> */}

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" text class="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>

        <ul type="none" className="text pl-0 ml-4 text-justify">
          <li>
            <a>Contribute</a>
          </li>
          <li>
            <a href="#">Learn to edit</a>
          </li>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Current events</a>
          </li>
          <li>
            <a href="#">Random artical</a>
          </li>
          <li>
            <a href="#">About wikipedia</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">Donate </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
