import '../styles/globals.css'
const Main = () => {
  return (
    <>
      <br></br>
      <div className="sub">
        <h3>Instructions</h3>
        <a href="index.html#readers">
          <button className="sub-btn">FOR READERS</button>
        </a>
        <a href="index.html#authors">
          <button className="sub-btn" value="readers">
            FOR AUTHORS
          </button>
        </a>
        <a href="index.html#librarian">
          <button className="sub-btn">FOR LIBRARIAN</button>
        </a>
      </div>
      <div className="subm">
        <div className="d">
          <button className="btn sbmbtn">
            <p className="p">SUBMISSION</p>
          </button>
        </div>
      </div>
      <div className="about">
        <p>ABOUT THE JOURNAL</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          quae, obcaecati quasi atque consequuntur culpa dolore beatae. Repellat
          modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
          exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          quae, obcaecati quasi atque consequuntur culpa dolore beatae. Repellat
          modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
          exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          quae, obcaecati quasi atque consequuntur culpa dolore beatae. Repellat
          modi veniam magnam animi dolorem.
        </p>
      </div>
      <br></br>
      <div className="gcontainer">
        <div className="heading">
          <p>CURRENT ISSUE</p>
        </div>
        <div className="item item1">
          <p>VOLUME NO # (YEAR)</p>
        </div>
      </div>
      <br></br>
      <div className="article">
        <p className="articlehead">RESEARCH ARTICLES</p>
        <div className="articleitem">
          <a href="#">article title 1 link</a>
          <br></br>
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 2 link</a>
          <br></br>
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 3 link</a>
          <br></br>
          <p>
            author details | article views :# | no of downloads : # | total no
            of pages : 0-#
          </p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default Main
