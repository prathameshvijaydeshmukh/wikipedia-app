import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Wikitext from "../../wikitext";
import FeaturedLeft from "../../FeaturedLeft/FeaturedLeft";
import NewsRight from "../../NewsRight/NewsRight";
import FeaturedPicture from "../../FeaturedLeft/FeaturedPicture/FeaturedPictured";
import OtherAreas from "../../OtherAreas/OtherAreas";
import Footer from "../../Footer/Footer";

function WikiPediaPage() {
  return (
    <div className="d-flex">
      <div className="justify-containt-center pl-0">
        <Sidebar />
      </div>
      <div className="main-page">
        <Header />
        <Wikitext />
        <div className="d-flex mx-5">
          <FeaturedLeft />
          <div className="mp-bordered mid-table"></div>
          <NewsRight />
        </div>
        <div className="mt-1 px-5">
          <FeaturedPicture />
        </div>
        <div className="div7">
          <OtherAreas />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WikiPediaPage;
