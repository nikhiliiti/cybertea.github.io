import "./Header.css";
import { useState, useEffect } from "react";

export default function TopHeader() {
  const [subBio, setsubBio] = useState(true);
  const arraySub = subBio ? "02nd-06th January 2024" : "5 Days Online Workshop";
  useEffect(() => {
    let xd = setInterval(() => {
      setsubBio((prev) => !prev);
    }, 4000);
    return () => {
      clearInterval(xd);
    };
  }, []);
  return (
    <>
      <div className="header_container">
        <h1>
          CyberTEA:{" "}
          <span>
            Cybersecurity Trends <br /> and Emerging Applications
          </span>
        </h1>
        <div className="div_holder">
          <h4 className="sub_header">{arraySub}</h4>
        </div>
      </div>
    </>
  );
}
