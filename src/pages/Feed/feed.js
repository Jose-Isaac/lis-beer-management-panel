import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";
import "./feed.css";

function Feed() {
  return (
    <div>
      <HeaderMain />

      {/* Parei aquiiiiiii */}
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>
                Curso consumindo API
                <img src={More} />
              </h2>

              <div className="linha"></div>

              <p>
                Nesse curso eu ensino vocês a consumirem uma api com react.js,
                uma api feita em node js e mongoDB.
              </p>

              <div className="btns">
                <div className="btn-edit">
                  <Link to="/edit" onClick={() => {window.location.href="/edit"}}>
                    <button>Edit</button>
                  </Link>
                </div>
                <div className="btn-readmore">
                <Link to="/lermais" onClick={() => {window.location.href="/lermais"}}>
                    <button>Ler mais</button>
                  </Link>
                </div>
                <div className="btn-delete">
                  <button>Delete</button>
                </div>
              </div>

            </header>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
