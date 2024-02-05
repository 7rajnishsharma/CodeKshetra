import React from 'react'

export default function HeroAbout() {
  return (
    <>
      <div className="hero-about section">

        <h1 className='main-heading'>How it works</h1>
        
        <div className="hero-about-contaniner">
            <div className="hero-about-container-image">
                <img src="garbage-identify.png" alt="..." />
            </div>
            <div className="hero-about-container-content">
                <h1>Real-time Garbage Identification</h1>
                <p>Utilize your device camera to scan and identify various types of garbage in real-time. Our advanced AI algorithms analyze the visual data and provide instant results.</p>
            </div>
        </div>

        <div className="hero-about-contaniner  hero-about-contaniner-reverse">
            <div className="hero-about-container-image">
                <img src="garbage-classify.png" alt="..." />
            </div>
            <div className="hero-about-container-content">
                <h1>Accurate Classification</h1>
                <p>EcoScan doesn't just identify the presence of waste; it classifies it into specific categories such as recyclable, non-recyclable, organic, and more. This information empowers users to make informed decisions about proper disposal methods.</p>
            </div>
        </div>

        <div className="hero-about-contaniner">
            <div className="hero-about-container-image">
                <img src="garbage-ui.png" alt="..." />
            </div>
            <div className="hero-about-container-content">
                <h1>User-Friendly Interface: </h1>
                <p>Our intuitive and user-friendly interface ensures a seamless experience. Simply point your camera at the waste material, and let EcoScan do the rest. It's that easy!</p>
            </div>
        </div>

      </div>
    </>
  )
}
