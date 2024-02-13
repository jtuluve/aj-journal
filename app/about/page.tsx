
const About = () => {
  return (
    <div>
        {/* About Us Section */}
        <div>
          <p>Please choose a category:</p>
          <button>Journal</button>
          <button>Aim &amp; Scope</button>
          <button>Indexing</button>
          <button>Peer reviewing process</button>
          <button>Licencing &amp; Copyright Policy</button>
          <button>AJIMS Research Center</button>
          <button>Disclaimer</button>
          {/* Content for different sections */}
          <div id="generalSection" className="about1">
            <h2>About the Journal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
              culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
              exercitationem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
              culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
              exercitationem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
              culpa dolore beatae. Repellat modi veniam magnam animi dolorem.</p>
          </div><br /><br />
          <div id="aimSection" className="about1">
            <h2>Aim &amp; Scope</h2>
            <p>Aim &amp; Scope.</p>
          </div>
        <div id="indexingSection" className="about1">
          <h2>Indexing</h2>
          <p>Indexing.</p>
        </div>
          <div id="peerSection" className="about1">
            <h2>Peer reviewing process</h2>
            <p>Peer reviewing process.</p>
          </div>
        <div id="licenceSection" className="about1">
          <h2>Licencing &amp; Copyright Policy</h2>
          <p>Licencing &amp; Copyright Policy.</p>
        </div>
          <div id="AJIMSRCSection" className="about1">
            <h2>AJIMS Research Center</h2>
            <p>About for AJIMS Research Center.</p>
          </div>
        <div id="disclaimerSection" className="about1">
          <h2>Disclaimer</h2>
          <p>Disclaimer.</p>
        </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
  )
}
export default About
