import "./FeaturedPicture.css";

export default function FeaturedPicture() {
  return (
    //    <!-- Today's featured picture -->
    <div className="div6 border bg-transparent">
      <div className="d-5 mt-1 px-3">
        <h5 className="border1 mt-2 text-justify">
          <span className="ml-2 txt">Today's featured picture</span>
        </h5>
        <img className="image px-1" src="image/Crab_spider.jpg.webp" />
        <p>
          Hattie Wyatt Caraway (1878-1950) was an American politician who became
          the first woman elected to serve a full term as a United States
          senator, representing the state of Arkansas from 1931 to 1945. This
          photograph was taken in 1914, when her husband was a member of the
          United States House of Representatives. Although she took an interest
          in her husband's political career at the time, Caraway avoided the
          capital's social and political life as well as the campaign for
          women's suffrage, recalling: "After equal suffrage I just added voting
          to cooking and sewing and other household duties." Photograph credit:
          Harris Ewing; restored by Adam Cuerden Recently featured: Misumena
          vatiaInterwar periodHernando de Soto ArchiveMore featured pictures (
          <a href="#">Full article...</a>)
        </p>
      </div>
    </div>
  );
}
