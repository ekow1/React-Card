import React, { Component } from "react";
import Description from "./Description";
import logo from "./darwin.jpg";
import Profile from "./Profile";
import Title from "./Title";
import "./App.css";
import "./Fonts.css";

export class SimpleCard extends Component {
  render() {
    return (
      <div className="section">
        <div className="card-body">
          <Profile img={logo} />
          <div className=" details">
            <Title name="Darwin Nunez  " />
            <Description
              descript={`Center Forward @ Liverpool FC`}
              desc={`Born in Uruguay, raised in the United States. `}
              age={"Age : 22years old "}
              height={` Height : 5ft 6in `}
              weight={` Weight : 160lbs `}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
