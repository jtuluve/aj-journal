import '../../styles/archive.css'

const Archive = () => {
  return (
    <div>
      <div className="gcontainerz">
        <div className="headingz">
          <p>ARCHIVES</p>
        </div>
        <div className="item item1z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item2z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item3z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item4z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item5z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item6z">
          <p>VOLUME NO # (YEAR)</p>
        </div>
      </div><br /><br />
      <div className="currentArchivez">
        <h1>CURRENT VOLUME</h1>
        <h1>VOLUME NO #<br /> (YEAR)</h1>
        <h1>(FRONT VIEW AND DETAILS ABOUT THE VOLUME)</h1>
      </div>
      <div className="articlez">
        <p className="articleheadz">
          RESEARCH ARTICLES
        </p>
        <div className="articleitemz">
          <a href="#">article title 1 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitemz">
          <a href="#">article title 2 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
        <div className="articleitemz">
          <a href="#">article title 3 link</a>
          <br />
          <p>author details | article views :# | no of downloads : # | total no of pages : 0-#</p>
          <button>PDF download</button>
          <button>extra file/attachment file</button>
        </div>
      </div>
      <br/>
      <hr />
    </div>
  )
}
export default Archive
