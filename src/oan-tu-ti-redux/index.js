import React, { Component } from "react";

export default class OanTuTiRedux extends Component {
  render() {
    return (
      <div className="game-ott">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-3 text-left align-self-end speech-bubble">
              <img style={{ width: "70%" }} src="./img/player.png" />
            </div>
            <div className="col-sm-6 text-center">
              <h1
                style={{
                  color: "yellow",
                  fontSize: "55px",
                  marginBottom: "55px",
                }}
                className="text-center"
              >
                I'm iron man, i love you 3000 !!
              </h1>
              <div style={{ color: "blue", fontSize: "40px" }}>
                Số bàn thắng: 0
              </div>
              <div style={{ color: "blue", fontSize: "40px" }}>
                Số bàn chơi: 0
              </div>
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Play game
              </button>
            </div>
            <div className="col-sm-3 text-right align-self-end">
              <img style={{ width: "70%" }} src="./img/playerComputer.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
