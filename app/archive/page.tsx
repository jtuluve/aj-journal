import "../../styles/archive.css";

const Archive = () => {
  return (
    <div className="container1archieve">
      <div className="gcontainerz">
        <p className="headingz">ARCHIVES</p>
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

        <div>
          <p>VOLUME NO # (YEAR)</p>
        </div>

        <div>
          <p>VOLUME NO # (YEAR)</p>
        </div>
      </div>
      <br />
      <br />

      <div className="currentArchivez">
        <h1>CURRENT VOLUME</h1>
        <h1>
          VOLUME NO #<br /> (YEAR)
        </h1>
        <h1>(FRONT VIEW AND DETAILS ABOUT THE VOLUME)</h1>
      </div>

      <div className="articlez articlezArch">
        <u>
          <p className="articleheadz">RESEARCH ARTICLES</p>
        </u>
        <div className="articleitemz">
          <a href="#">article title 1 link</a>
          <br />
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>

        <div className="articleitemz">
          <a href="#">article title 2 link</a>
          <br />
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>

        <div className="articleitemz">
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
      <br />
      <hr />
    </div>
  );
};
export default Archive;
