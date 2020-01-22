import React from 'react';
import jess_bday from '../assets/jess_bday.jpg';
import germaine from '../assets/germaine.jpeg';
import instagram from '../assets/instagram.png';
import sacred_geometry from '../assets/sacred_geometry.png'



function Podcast() {
   
    return (
        <div className="podcasts">
        
            <div className="queens">
                <h3>Ascended Queens</h3>
                <img 
                    className="jess-bday"
                    alt="jess-bday"
                    src={jess_bday}
                    width="350"
                    height="350"
                    />

                    <img 
                    className="germaine"
                    alt="germaine"
                    src={germaine}
                    width="350"
                    height="350"
                    />

                    <p>Tune into these dope queens as they discuss spirituality, love, relationships, being queer, life and of course ascension.</p>
                    
                    <p>
                    Follow us on instagram
                        <a href="https://www.instagram.com/ascendedqueens/">
                            <img 
                                className="insta-btn" 
                                alt="insta-icon"
                                src={instagram}
                                width="50"
                                height="50"
                            />
                        </a>
                    </p>

                <iframe title="intro" src="https://open.spotify.com/embed-podcast/episode/3fHT2V8wRnDMQYVWIqmc8H" width="50%" height="232" 
                frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe><br></br>
            </div>
        
        <div className="jewel">
        <h3>Jewel Drop Wednesday's</h3> 
          <p>Every Wednesday, I drop some spirituality jewels on you via instagram.</p>
          <a href="https://www.instagram.com/p/B2kyFVogY-c/">
            <img 
                className="jewel-img"
                alt="jewel-img"
                src={sacred_geometry}
                width="350"
                height="350"
            />
          </a>
        </div> 

        <div className="ascended-radio">
        <h3>Ascended Radio</h3> 
            <p>This show will provide intriguing and life transforming wisdom regarding the process of ascension or spiritual awakening in a simple and easily understood manner.</p>
            <a href="https://www.blogtalkradio.com/ascended-radio">
            
            </a>
        </div>   

    </div> 
    )
}

export default Podcast;

