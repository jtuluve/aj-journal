import '../../styles/about.css'

const About = () => {
  return (
    <div>
        {/* About Us Section */}
        <div>
          <p>Please choose a category:</p>
          <button>Journal</button>
          <button>Aim &amp; Scope</button>
          <button>Indexing</button>
          <button>AJIMS Research Center</button>
          {/* Content for different sections */}
          <div id="generalSection" className="about">
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
          <div id="submissionSection" className="about">
            <h2>Aim &amp; Scope</h2>
            <p>Aim &amp; Scope.</p>
          </div>
          <div id="editorialSection" className="about">
            <h2>Indexing</h2>
            <p>Indexing.</p>
          </div>
          <div id="technicalSection" className="about">
            <h2>AJIMS Research Center</h2>
            <p>About for AJIMS Research Center.</p>
          </div>
        </div>
      </div>
  )
}
export default About
