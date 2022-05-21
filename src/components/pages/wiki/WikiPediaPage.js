import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Wikitext from "../../wikitext";
import FeaturedLeft from "../../FeaturedLeft/FeaturedLeft";
import NewsRight from "../../NewsRight/NewsRight";

function WikiPediaPage() {
  return (
    <div className="d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Header />
        <Wikitext />
        <div className="d-flex mx-5">
          <FeaturedLeft />
          <div className="mp-bordered mid-table"></div>
          <NewsRight />
        </div>
      </div>
    </div>
  );
}

export default WikiPediaPage;
