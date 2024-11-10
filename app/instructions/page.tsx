import '@/styles/instructions.css'
import React from 'react'
const Instructions = () => {
    return (
        <div className="instructionDiv">
            <a href='#readers'><button className="forReaders readcls">For Readers</button></a>
            <a href='#authors'><button className="forAuth authcls">For Authors</button></a>
            <a href='#librarians'><button className="forLib libcls">For Librarian</button></a>
            {/* Content for readers sections */}
            <div id="readers" className="ins">
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
            {/* Content for authors sections */}
            <div id="authors" className="ins">
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
            {/* Content for librarians sections */}
            <div id="librarians" className="ins">
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