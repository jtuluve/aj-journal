import '../styles/globals.css'
const Main = () => {
  return (
    <div>
      <div className="mainAboutIns">
        <div className="about">
          <p>ABOUT THE JOURNAL</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque
            consequuntur
            culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
            exercitationem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque
            consequuntur
            culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
            exercitationem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque
            consequuntur
            culpa dolore beatae. Repellat modi veniam magnam animi dolorem.</p>
        </div>
        <div className="InsSub">
          <div className="sub">
            <h3 className="ins">Instructions</h3>
            <div className="InsButtonGrid">
              <a href="index.html#readers"><button className="sub-btn">FOR READERS</button></a>
              <a href="index.html#authors"><button className="sub-btn"  value="readers">FOR
                AUTHORS</button></a>
              <a href="index.html#librarian"><button className="sub-btn" >FOR
                LIBRARIAN</button></a>
            </div>
          </div>
          <div className="subm">
            <div className="d">
              <a  href='/submission'><button className="btn sbmbtn">
                <p className="p">SUBMISSION</p>
              </button></a>
            </div>
          </div>
        </div>
        <div className="gcontainer">
          <div className="heading">
            <p>CURRENT ISSUE</p>
          </div>
          <div className="item item1">
            <p>VOLUME NO # (YEAR)</p>
          </div>
        </div>
      </div>
      <br /><br />
      <br /><br />
      <div className="article">
        <p className="articlehead">
          RESEARCH ARTICLES
        </p>
        <div className="articleitem">
          <a href="#">article title 1 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 2 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitem">
          <a href="#">article title 3 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
      </div>
    </div>
  )
}

export default Main
