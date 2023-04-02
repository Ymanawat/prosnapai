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
            src="/playground_assets/logoprosnapai1200w1126-687f-200h.png"
            alt="logoprosnapai1200w1126"
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
            <label className="generate-images-text10">
              <span>Prompt</span>
            </label>
            <input
              type="text"
              placeholder="Write here what you want"
              className="generate-images-prompinput"
            />
            <span className="generate-images-text12">
              <span>
                Note : All pictures should be taken from different angles, in
                different cloths and background
              </span>
            </span>
            <button className="generate-images-train-model-button">
              <span className="generate-images-text14">Generate Images</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages
