import '../../styles/archive.css'

const Archive = () => {
  return (
    <div className='arch'>
      <div className='gccontainermain'>
      <div className="gcontainer" id="#ARCHIVE">
        <div className="heading">
          <p>ARCHIVES</p>
        </div>
        <div className="item item1">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item2">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item3">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item4">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item5">
          <p>VOLUME NO # (YEAR)</p>
        </div>
        <div className="item item6">
          <p>VOLUME NO # (YEAR)</p>
        </div>
      </div>
      </div>
      <br />
      <br />
      <div className="currentArchive">
        <h1>CURRENT VOLUME</h1>
        <h1>VOLUME NO #<br /> (YEAR)</h1>
        <h1>(FRONT VIEW AND DETAILS ABOUT THE VOLUME)</h1>
      </div>
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
      <br/>
      <br/>
      <hr/>
      <br/>
    </div>
  )
}
export default Archive
