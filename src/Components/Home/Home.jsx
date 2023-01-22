import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';

import './Home.css'

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (
    <div>
      <div class="intro">

      <div class="container-fluid callToAction">
        <div class="calltext">
          <h6>
            Special offer
            for first time customer.
          </h6>
          <h1>
            Learn on your <br />
            schedule from <br />
            any device. <i class="faSolid fa-arrow-right"></i>
          </h1>
          <p>
            Upgrade to a paid premium plan and get premium <br />
            course creation bundle.
          </p>
          <button href="/login">Start Learning</button>
        </div>
        <video autoPlay loop muted
          src={ require('../Video/introVid.mp4') } type="video/mp4"
        />
        
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

    <div class="container reference">
      <h2>Reference of colleagues and clients</h2>
      <div class="rfpic">
        <img src={ require('../Pictures/referenceDP/dp1.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp2.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp3.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp4.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp5.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp6.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp7.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp8.jpg') } alt="" class="dp" />
        <img src={ require('../Pictures/referenceDP/dp9.jpg') } alt="" class="dp" />
      </div>
      <div class="container comments">
        <h6>SAVINNA</h6>
        <h5>
          "Vlad is greast to work with. He articulate all decision with facts
          and provides a visualy appealing product."
        </h5>
      </div>
    </div>


    <Container>
    <Swiper className='swipers'
      modules={[ Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}

      breakpoints={{
        576: {
          // width: 576,
          slidesPerView: 1.5,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
        },
        993: {
      
          slidesPerView: 3,
        },
      }}

      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div class="slides">
          <img alt='' src={ require('../Pictures/appsflyer.png') } class="testidp" />
          <h5>
            Thank you for your help in resolving a very technically challenging
            issue.
          </h5>
          <img src={ require('../Pictures/referenceDP/dp2.jpg') } alt="" class="dp"  />
          <p>James Calahan, Creative Director</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slides">
      <img alt='' src={ require('../Pictures/notion.png') } class="testidp" />
          <h5>
            I am thankful for your attitude – it educts innovative thinking.
          </h5>
          <img src={ require('../Pictures/referenceDP/dp1.jpg') } alt="" class="dp" />
          <p>Rony Gale, Sales Director</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slides">
      <img alt='' src={ require('../Pictures/sumup.png') } class="testidp" />
            <h5>
              I am incredibly pleased with the quality of customer service
              provided to me.
            </h5>
            <img src={ require('../Pictures/referenceDP/dp4.jpg') } alt="" class="dp" />
            <p>Jane Newsome, Lead Marketing</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="slides">
      <img alt='' src={ require('../Pictures/clearbit.png') } class="testidp" />
          <h5>
            I am incredibly pleased with the quality of customer service
            provided to me.
          </h5>
          <img src={ require('../Pictures/referenceDP/dp7.jpg') } alt="" class="dp" />
          <p>Kim Lee, Lead Marketing</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </Container>


    </div>
  )
}

export default Home;