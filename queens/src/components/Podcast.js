import React from 'react';



function Podcast() {
   
    return (
        <div className="podcasts">
        
            <div className="queens">
                <h3>Ascended Queens</h3>
                {/* <img 
                    className="ascended-queens"
                    alt="ascended-queens"
                    src={ascended_queens}
                    width="350"
                    height="300"
                    /> */}
                <iframe title="intro" src="https://open.spotify.com/embed-podcast/episode/3fHT2V8wRnDMQYVWIqmc8H" width="50%" height="232" 
                frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe><br></br>
            </div>
        
        <div className="jewel">
          {/* IG vids here */}
        </div>    

    </div> 
    )
}

export default Podcast;

