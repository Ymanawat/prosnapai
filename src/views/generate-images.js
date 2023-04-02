import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './generate-images.css'

const GenerateImages = (props) => {
  return (
    <div className="generate-images-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="generate-images-generate-images">
        <div className="generate-images-logo">
          <img
            alt="logoprosnapai1200w1126"
            src="/playground_assets/logoprosnapai1200w1126-687f-200h.png"
            className="generate-images-logoprosnapai1200w1"
          />
          <span className="generate-images-text">
            <span>ProSnapAI</span>
          </span>
        </div>
        <div className="generate-images-container1">
          <div className="generate-images-tabs">
            <div className="generate-images-frame1">
              <Link to="/train-model" className="generate-images-text02">
                <span>Train Model</span>
              </Link>
            </div>
            <div className="generate-images-frame2">
              <span className="generate-images-text04">
                <span>Generate Images</span>
              </span>
            </div>
          </div>
          <div className="generate-images-tab-container">
            <label className="generate-images-text06">
              <span>Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="generate-images-emailinput"
            />
            <label className="generate-images-text08">
              <span>Link to Model</span>
            </label>
            <input
              type="text"
              placeholder="Link"
              className="generate-images-linkto-modelinput"
            />
            <div className="generate-images-hint">
              <span className="generate-images-text10">
                Below are some basic requirements to generate your image, Fill
                Whatever you want
              </span>
            </div>
            <label className="generate-images-text11">
              <span>Background</span>
              <br></br>
            </label>
            <input
              type="text"
              placeholder="for e.g. Nature Cityscape Rural Mountains Beach Skyline Nighttime"
              className="generate-images-prompinput"
            />
            <label className="generate-images-text14">
              <span>Location</span>
              <br></br>
            </label>
            <input
              type="text"
              placeholder="for e.g. Studio Kitchen Office School Hospital"
              className="generate-images-prompinput1"
            />
            <label className="generate-images-text17">Clothing</label>
            <input
              type="text"
              placeholder="for e.g. Casual Formal Sportswear Business Traditional"
              className="generate-images-prompinput2"
            />
            <label className="generate-images-text18">Emotions</label>
            <input
              type="text"
              placeholder="for e.g. Happy Sad Angry Surprised Confused"
              className="generate-images-prompinput3"
            />
            <label className="generate-images-text19">Anything else</label>
            <input
              type="text"
              placeholder="Write here what you want"
              className="generate-images-prompinput4"
            />
            <button className="generate-images-train-model-button">
              <span className="generate-images-text20">Generate Images</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages
