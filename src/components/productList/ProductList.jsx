import React, { useState, useEffect, useContext } from "react";
import "./productList.css";
import "./productList.scss";
import Product from "../product/Product";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { ThemeContext } from "../../context";

export default function ProductList() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "devops",
      title: "DevOps",
    },
    {
      id: "cloud",
      title: "Cloud",
    },
    {
      id: "uiux",
      title: "UI/UX",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "devops":
        setData(mobilePortfolio);
        break;
      case "cloud":
        setData(designPortfolio);
        break;
      case "uiux":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div
      className="portfolio"
      id="portfolio"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Rohit</h1>
        <p className="pl-desc">
          rohit23421 is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
      </div> */}
      <h1>portfolio</h1>
      <ul>
        {list.map((item) => (
          <Product
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
