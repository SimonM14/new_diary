import React from "react";
import RegistrationForm from "./regform";

function Myhome() {
  return (
    <div className="back2">
      <h1 className="h1">Mi-Thoughts</h1>

      <div className="homediv">
        <text className="tfont">
          Welcome to Mi-thoughts-Your Personal Digital Diary.In this fast-paced
          world, it's easy to lose track of our thoughts, emotions, and
          experiences. That's why we created Mi-Thoughts. A place where you can
          record, reflect, and relive your personal journey with ease and joy.
          <br />
          <br />
          With our intuitive and beautifully designed interface, documenting
          your daily musings, significant events, and inspiring discoveries has
          never been simpler. Whether you're looking to express your deepest
          thoughts or simply capture the highlights of your day. is here to help
          you tell your story.
        </text>
        <div className="logindiv">
          <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-black">
              <h3 className="homtxt"> Sign up to Mi-thoughts</h3>
            </div>
          </nav>
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </div>
  );
}

export default Myhome;
