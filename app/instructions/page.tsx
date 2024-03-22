import '../../styles/instructions.css'
const Instructions = () => {
    return (
        <div className="instructionDiv">
            <a href='#readers' className='ia '><button className="forReaders readcls insb">For Readers</button></a>
            <a href='#authors' className='ib '><button className="forAuth authcls insb">For Authors</button></a>
            <a href='#librarians' className='ic '><button className="forLib libcls insb">For Librarian</button></a>
            {/* Content for different sections */}
            <div id="readers" className="ins id">
                <h2>READERS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem.</p>
            </div>
            <div id="authors" className="ins id">
                <h2>AUTHORS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem.</p>
            </div>
            <div id="librarians" className="ins id">
                <h2>LIBRARIANS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem optio ipsum cum, commodi dignissimos
                    exercitationem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi quae, obcaecati quasi atque consequuntur
                    culpa dolore beatae. Repellat modi veniam magnam animi dolorem.</p>
            </div>
        </div>
    )
}
export default Instructions