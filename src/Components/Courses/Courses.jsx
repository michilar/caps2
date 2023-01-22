import React from 'react'
import './courses.css'

const Courses = () => {
  return (
    <div>
         <section class="container-fluid m-2">
    <h2>Let's start learning!</h2>
    <p>Choose from 204,000 online video courses with new additions published every month.
    </p>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <div class="card" >
          <img alt='' src={ require('../Pictures/python.jpg') } id="" />
            <div class="card-body">
                <h5 class="card-title p-0">Python Development</h5>
                <div class="card-text">
                <div>Laila Manalo</div>
                <br/>
                ₱4,499.00
                <br/>
                <div><a href="/" class="btn btn-primary">Learn more</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" >
          <img alt='' src={ require('../Pictures/UI.jpg') } id="" />
            <div class="card-body">
              <h5 class="card-title p-0">UI/UX Design</h5>
              <div class="card-text">
                <div>Laila Manalo</div>
                <br/>
                ₱4,499.00
                <br/>
                <div><a href="/" class="btn btn-primary">Learn more</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" >
          <img alt='' src={ require('../Pictures/gitcourse.jpg') } id="" />
            <div class="card-body">
              <h5 class="card-title p-0">GitHub Actions</h5>
              <div class="card-text">
                <div>Laila Manalo</div>
                <br/>
                ₱4,499.00
                <br/>
            
                <div><a href="/" class="btn btn-primary">Learn more</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" >
          <img alt='' src={ require('../Pictures/reactcourse.jpg') } id="" />
            <div class="card-body">
              <h5 class="card-title p-0">React Development</h5>
              <div class="card-text">
                <div>Laila Manalo</div>
                <br/>
                ₱4,499.00
                <br/>
            
                <div><a href="/" class="btn btn-primary">Learn more</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <div class="container-fluid bg-secondary topics pt-3">
  <h2>Featured Topics by Category</h2>
  <div class="category d-flex justify-content-around">
      <div class="development">
          <h3>Development</h3>
          <ul>
              <li>
                  <a href="/"><h4>Python</h4></a>
                  <p class="students">36,354,994 students</p>
              </li>
              <li>
                  <a href="/"><h4>Web Development</h4></a>
                  <p class="students">11,415,615 students</p>
              </li>
              <li>
                  <a href="/"><h4>Machine Learning</h4></a>
                  <p class="students">7,070,015 students</p>
              </li>
          </ul>
      </div>
      <div class="business">
          <h3>Business</h3>
          <ul>
              <li>
                  <a href="/"><h4>Financial Analyst</h4></a>
                  <p class="students">1,195,282 students</p>
              </li>
              <li>
                  <a href="/"><h4>SQL</h4></a>
                  <p class="students">5,977,561 students</p>
              </li>
              <li>
                  <a href="/"><h4>PMP</h4></a>
                  <p class="students">1,733,398 students</p>
              </li>
          </ul>
      </div>
      <div class="software">
          <h3>IT and Software</h3>
          <ul>
              <li>
                  <a href="/"><h4>AWS Certification</h4></a>
                  <p class="students">6,078,244 students</p>
              </li>
              <li>
                  <a href="/"><h4>Ethical Hacking</h4></a>
                  <p class="students">10,931,066 students</p>
              </li>
              <li>
                  <a href="/"><h4>Cyber Security</h4></a>
                  <p class="students">3,998,037 students</p>
              </li>
          </ul>
      </div>
      <div class="design">
          <h3>Design</h3>
          <ul>
              <li>
                  <a href="/"><h4>Photoshop</h4></a>
                  <p class="students">10,909,736 students</p>
              </li>
              <li>
                  <a href="/"><h4>Graphic Design</h4></a>
                  <p class="students">3,381,052 students</p>
              </li>
              <li>
                  <a href="/"><h4>Drawing</h4></a>
                  <p class="students">2,410,849 students</p>
              </li>
          </ul>
      </div>
  </div>
  <a href="/"><input class="m-3 bg-dark p-3" type="button" name="explore" id="explore" value="Explore more Topics" /></a>
</div>
<div class="game-main-container gameSec">
		<h1 class="font-weight-bold text-dark">EDUCATIONAL  GAMES</h1>
      <div class="container-game gap-2">
        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/memorygame4.JPEG') } id="" />
            <p class="text-title">Fruit Memory Game</p>
            <p class="text-body">
              The purpose of this memory game is to make pairs of cards by
              turning them over 2 by 2.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>
        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/addition.png') } id="" />
            <p class="text-title">Adding Ninja</p>
            <p class="text-body">
              This game helps you learn new techniques about addition.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>
        <div class="card-game">
          <div class="card-details">
            <img alt='' src={ require('../Pictures/games/typing-test-2.jpg') } id="" />
            <p class="text-title">Rapid Typing</p>
            <p class="text-body">
              The app starts with basic lessons where you have to type
              paragraphs.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>
        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/history.png') } id="" />
            <p class="text-title">Our History</p>
            <p class="text-body">
              This game helps you learn about our history.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>
        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/math-2.png') } id="" />
            <p class="text-title">EZ Math</p>
            <p class="text-body">
              This game where you need to type the correct answer to move ahead
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>

        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/english-quiz.png') } id="" />
            <p class="text-title">Mini Quiz</p>
            <p class="text-body">
              A general knowledge quiz tests quiz-takers knowledge on a
              particular topic.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>

        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/Food and safety 3.jpg') } id="" />
            <p class="text-title">Food & Safety</p>
            <p class="text-body">
              This app will teach pupils food safety steps with these coloring
              pages.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>

        <div class="card-game">
          <div class="card-details">
          <img alt='' src={ require('../Pictures/games/english-quiz-2.png') } id="" />
            <p class="text-title">English Grammar</p>
            <p class="text-body">
              The app is initiated for kids of all types with problems aimed at
              developing Noun, pronoun, verb, and adjective.
            </p>
          </div>
          <a href="/">
            <button class="card-button">Play Now</button>
          </a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Courses;