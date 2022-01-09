import React, {useState, useEffect} from "react";
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

export default function ProductList(){

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
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
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
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (

      <div className="portfolio" id="portfolio">
      {/* <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Rohit</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
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
          {list.map(item=>(
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
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      </div>

  );
};

