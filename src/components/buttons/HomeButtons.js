import "../../css/HomeButtons.css";
import React, { Component } from "react";
import RegisterButton from "./RegisterButton";
import TutorialButton from "./TutorialButton";

export default class HomeButtons extends Component {
  render() {
    return (
      <div className="HomeButtonList">
        <RegisterButton />
        <p>
          Already a member? Log in
          <a id="LoginRef" href="#goToLoginPage">
            here
          </a>
        </p>
        <TutorialButton />
      </div>
    );
  }
}
