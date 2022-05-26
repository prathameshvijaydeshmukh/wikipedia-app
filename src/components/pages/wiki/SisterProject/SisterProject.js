import { getValue } from "@testing-library/user-event/dist/utils";
import WikipediaLang from "../../../WikipediaLang/WikipediaLang";
import "./SisterProject.css";

export default function SisterProject() {
  const sisterdata = [
    {
      title: "Commons",
      Value: "Free media repository",
      image: "image/Commons-logo.svg.webp",
    },

    {
      title: "MediaWiki",
      Value: "Wiki software development",
      image: "image/MediaWiki-2020-icon.svg.png",
    },

    {
      title: "Meta-Wiki",
      Value: "Wikimedia project coordination",
      image: "image/Wikimedia_Community_Logo.svg.png",
    },

    {
      title: "Wikibooks",
      Value: "Free textbooks and manuals",
      image: "image/35px-Wikibooks-logo.svg.png",
    },

    {
      title: "Wikidata",
      Value: "Free-content news",
      image: "image/35px-Wiktionary-logo-v2.svg.png",
    },
    {
      title: "Wikinews",
      Value: "Free media repository",
      image: "image/Wikivoyage-Logo-v3-icon.svg.png",
    },

    {
      title: "Wikidata",
      Value: "Free knowledge base",
      image: "image/47px-Wikidata-logo.svg.png",
    },

    {
      title: "Wikinews",
      Value: "Free-content news",
      image: "image/51px-Wikinews-logo.svg.png",
    },

    {
      title: "Wikiquote",
      Value: "Collection of quotations",
      image: "image/35px-Wikiquote-logo.svg.png",
    },

    {
      title: "Wikisource",
      Value: "Wikisource Free-content library",
      image: "image/35px-Wikisource-logo.svg.png",
    },
    {
      title: "Wikispecies",
      Value: "Directory of species",
      image: "image/35px-Wikispecies-logo.svg.png",
    },

    {
      title: "Wikiversity",
      Value: "Free learning tools",
      image: "image/41px-Wikiversity_logo_2017.svg.png",
    },
  ];
  return (
    <div className="div8 bg-transparent">
      <div>
        <h5 className="border1 mt-2 text-justify mx-2">
          <span className="ml-2 txt">wikipedia's sister projects</span>
        </h5>
        <p className="font-weight-normal mt-3 ml-2">
          Wikipedia is written by volunteer editors and hosted by the
          <a href="#"> Wikimedia Foundation </a> , a non-profit organization
          that also hosts a volunteer
          <a href="#"> projects:</a>
        </p>
        <div class="div9">
          <ul type="none" class="wiki-sis d-flex flex-wrap pl-0">
            {sisterdata.map((list, i) => (
              <li class="d-flex list" key={i}>
                <div class="logo-sm ml-2 px-3">
                  {console.log(list.image)}
                  <img class="logo-img mt-2" src={list.image} />
                </div>
                <div class="text">
                  <div>
                    <a href="https://www.google.com/">{list.title}</a>
                  </div>

                  <div>{list.Value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <WikipediaLang />
    </div>
  );
}
