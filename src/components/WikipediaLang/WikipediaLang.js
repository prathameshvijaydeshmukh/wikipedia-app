import "./WikipediaLang.css";

function WikipediaLang() {
  const WikipediaLangdata = [
    {
      numberOfArticles: "1,000,000",
      languges: [
        " العربية",
        "Deutsch",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
      ],
    },

    {
      numberOfArticles: "250,000",
      languges: [
        " العربية",
        "Deutsch",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
      ],
    },

    {
      numberOfArticles: "50,000",
      languges: [
        " العربية",
        "Deutsch",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
        " Español",
      ],
    },
  ];

  return (
    <div class="div10">
      <div>
        <h5 class="border mt-2 text-justify mx-2">
          <span class="ml-2">Wikipedia languages</span>
        </h5>
        <p class="font-weight-normal mt-3 ml-3">
          This Wikipedia is written in
          <a href="#"> English.</a> Many
          <a href="#"> other Wikipedias are available; </a>
          some of the largest are listed below.
        </p>
        <ul class="lastdiv mr-5 p-0">
          {WikipediaLangdata.map((info, i) => (
            <li>
              <div class="lastdiv-text">
                <div class="single-line"></div>

                <>
                  <div class="number">{info.numberOfArticles}+ articles</div>
                  <div class="single-line1"></div>
                </>
              </div>
              <ul type="" class="mid-list">
                {info.languges.map((info, i) => (
                  <li class="mid-list1 px-3">
                    <a class="anchor-text" href="#">
                      {info}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WikipediaLang;
