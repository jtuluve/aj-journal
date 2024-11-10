import React from "react";
import "@/styles/globals.css";

const Main = () => {
  return (
    <div className="abCur">
      <div className="mainAboutIns">
        <div className="about">
          <b>
            <p>ABOUT THE JOURNAL</p>
          </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
            quae, obcaecati quasi atque consequuntur g culpa dolore beatae.
            Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi
            dignissimos exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
            quae, obcaecati quasi atque consequuntur culpa dolore beatae.
            Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi
            dignissimos exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
            quae, obcaecati quasi atque consequuntur culpa dolore beatae.
            Repellat modi veniam magnam animi dolorem.
          </p>
        </div>

        <div className="InsSub">
          <div className="sub">
            <h3 className="ins">Instructions</h3>
            <div className="InsButtonGrid">
              <a href="/instructions#readers">FOR READERS</a>
              <a href="/instructions#authors">FOR AUTHORS</a>
              <a href="/instructions#librarians">FOR LIBRARIAN</a>
            </div>
          </div>
          <a href="/submission" className="subm btn sbmbtn">
            SUBMISSION
          </a>
        </div>

        <div className="gcontainer">
          <div className="heading">CURRENT ISSUE</div>
          <div className="items">
            <div>
              <p>VOLUME NO # (YEAR)</p>
            </div>
            <div>
              <p>VOLUME NO # (YEAR)</p>
            </div>
            <div>
              <p>VOLUME NO # (YEAR)</p>
            </div>
            <div>
              <p>VOLUME NO # (YEAR)</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="article">
        <p className="articlehead">RESEARCH ARTICLES</p>
        <div className="articleitem">
          <a href="#">article title 1 link</a>
          <br />
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 2 link</a>
          <br />
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 3 link</a>
          <br />
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
