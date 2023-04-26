import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="base">
      <div className="base_card">
        <img src="icon-star.svg" alt="" className="avatar_card" />
        <div>
          <h1 className="title_card">How did we do?</h1>
          <p className="paraf_card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad
            optio dolorem alias obcaecati quae? Non quasi aperiam saepe, earum,
            et voluptas officiis ducimus, quisquam nostrum tempore eum. Iste,
            suscipit!
          </p>
        </div>
        <div className="card_button">
          <button className="font_button">1</button>
          <button className="font_button">2</button>
          <button className="font_button">3</button>
          <button className="font_button">4</button>
          <button className="font_button">5</button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
