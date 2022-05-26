import SisterProject from "../pages/wiki/SisterProject/SisterProject";
import "./OtherAreas.css";

export default function OtherAreas() {
  const otherAreadata = [
    {
      title: "Community portal",
      value:
        "The central hub for editors, with resources, links, tasks, and announcements.",
    },

    {
      title: "Village pump",
      value:
        "Forum for discussions about Wikipedia itself, including policies and technical issues.",
    },

    {
      title: "Site news",
      value:
        "Sources of news about Wikipedia and the broader Wikimedia movement.",
    },
    {
      title: "Site news",
      value:
        "The central hub for editors, with resources, links, tasks, and announcements.",
    },
    {
      title: "Help desk",
      value:
        "The central hub for editors, with resources, links, tasks, and announcements.",
    },
    {
      title: "Reference desk",
      value:
        "The central hub for editors, with resources, links, tasks, and announcements.",
    },
  ];
  return (
    //   <!-- Other areas 0f wikipedia -->

    <div className="border mt-1 mx-5 bg-transparent">
      <div className="div px-2">
        <h5 className="border mt-2 text-justify ">
          <span className="ml-2 txt">Other areas 0f wikipedia</span>
        </h5>
        <ul className="text-justify " type="disc">
          {otherAreadata.map((info, i) => (
            <li key={i}>
              <a href="#" className="font-weight-bold">
                {info.title}
              </a>
              - {info.value}
            </li>
          ))}
          {/* <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Village pump{" "}
            </a>{" "}
            - Forum for discussions about Wikipedia itself, including policies
            and technical issues.
          </li>
          <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Site news{" "}
            </a>{" "}
            - Sources of news about Wikipedia and the broader Wikimedia
            movement.
          </li>
          <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Site news{" "}
            </a>{" "}
            - Ask basic questions about using or editing Wikipedia.
          </li>
          <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Help desk{" "}
            </a>{" "}
            - Ask questions about using or editing Wikipedia.
          </li>
          <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Reference desk{" "}
            </a>{" "}
            - Ask research questions about encyclopedic topics.
          </li>
          <li>
            <a href="#" className="font-weight-bold">
              {" "}
              Content portals{" "}
            </a>{" "}
            - A unique way to navigate the encyclopedia.
          </li> */}
        </ul>
      </div>
      <SisterProject />
    </div>
  );
}
