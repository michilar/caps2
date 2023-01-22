import React from 'react';
import './aboutus.css';


const AboutUs = () => {
  return (
<div>
    <div class="intro">
        <div class="container-fluid callToAction">
        <div class="calltext1">
            <h2 class="hero-title">About Us</h2>
            <h1>
              Powerful Online <br />
                Learning <br />
                 </h1>
              <p>
            Co.Education is the first full online education in the Philippines. It upholds the vision and mission of its institution as it responds to the cultural shift to a digitized age, opening its doors for anyone from the Philippines and abroad, who are willing to learn and advance their knowledge in a wide variety of courses. OEd endeavors to stress the importance of educating the youth, as well as employed individuals seeking degrees, and the fostering of everyone’s potential as a productive portion of today’s competitive society.
            <br/> 
            <br/>
            The program is open to all interested applicants: those who wanted to take up refresher courses or second degree, undergraduates, working students, Filipinos from various regions in the Philippines, and Overseas Filipino Workers (OFWs) who sought to pursue a degree. The program also gives an opportunity for international students and people afflicted with disabilities, who can study in the comfort of their own homes.
              </p>
            </div>
        {/* <div class="callimg">
        <img  src={ require('../Pictures/image 149.png')} alt="" />
    </div> */}
  </div>
</div>
<div class="container company">
      <h3 class="pb-1">
        Improve skills together with official graduation certificates from
        world's biggest companies.
      </h3>
      <div class="companyLogo">
        <img alt='' src={ require('../Pictures/amazon.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/appsflyer.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/clearbit.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/databrick.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/docker.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/github.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/google.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/microsoft.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/notion.png') } id="compLogo" />
        <img alt='' src={ require('../Pictures/sumup.png') } id="compLogo" />
      </div>
    </div>

    <div class="portfolio-card">
      <div class="card">
        <div class="card-border-top"></div>
        <div class="img d-flex justify-content-center" id="portDP">
            <img src={ require('../Pictures/referenceDP/micoh.jpg') } alt=""/>
            </div>
        <span>Jon Micoh Hilario</span>
        <p class="job">Web Developer | Backend</p>
        <button>Visit Site</button>
      </div>
      <div class="card">
        <div class="card-border-top"></div>
         <div class="img d-flex justify-content-center" id="portDP">
            <img src={ require('../Pictures/referenceDP/pat.png') } alt=""/>
            </div>
        <span> John Patrick Rigucira</span>
        <p class="job">Web Developer | Frontend</p>
        <button>Visit Site</button>
      </div>
      <div class="card">
        <div class="card-border-top"></div>
        <div class="img d-flex justify-content-center" id="portDP">
            <img src={ require('../Pictures/referenceDP/nicolai.jpg') } alt=""/>
            </div>
        <span>Mark Nicolai San Pedro</span>
        <p class="job">Web Developer | UI/UX</p>
        <button>Visit Site</button>
      </div>
      <div class="card">
        <div class="card-border-top"></div>
                <div class="img d-flex justify-content-center" id="portDP">
                    <img src={ require('../Pictures/referenceDP/RR1.jpg') } alt=""/></div>
        <span>Ar-ar Mijares</span>
        <p class="job">Web Developer | Backend</p>
        <button>Visit Site</button>
      </div>
      <div class="card">
        <div class="card-border-top"></div>
        <div class="img d-flex justify-content-center" id="portDP">
            <img src={ require('../Pictures/referenceDP/jonard.jpg') } alt=""/></div>
        <span>Jonard</span>
        <p class="job">Web Developer | Frontend</p>
        <button>Visit Site</button>
      </div>
    </div>

</div>





  )
};

export default AboutUs;