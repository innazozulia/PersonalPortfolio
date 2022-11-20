import React from "react";
import { layout, reactjs, fullstack, featured } from "../../data";
import PortfolioContent from "../portfolioContent/PortfolioContent";
// import { Link } from "react-router-dom";
import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = React.useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "layout",
      title: "Web App HTML CSS JS",
    },
    {
      id: "reactjs",
      title: "Web App ReactJS",
    },
    {
      id: "fullstack",
      title: "ReactJS NodeJS Express Database",
    },
  ];

  React.useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "layout":
        setData(layout);
        break;
      case "reactjs":
        setData(reactjs);
        break;
      case "fullstack":
        setData(fullstack);
        break;
      default:
        setData(reactjs);
    }
  }, [selected]);
  return (
    <div
      className="portfolio"
      id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioContent
            key={item.id}
            title={item.title}
            // src={item.src}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div
            className="item"
            key={d.id}>
            <a href={d.src}>
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </a>

            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
