import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './train-model.css'

const TrainModel = (props) => {
  return (
    <div className="train-model-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="train-model-train-model">
        <div className="train-model-logo">
          <img
            alt="logoprosnapai1200w113"
            src="/playground_assets/logoprosnapai1200w113-nc-200h.png"
            className="train-model-logoprosnapai1200w1"
          />
          <span className="train-model-text">
            <span>ProSnapAI</span>
          </span>
        </div>
        <div className="train-model-tabs">
          <div className="train-model-tabs1">
            <div className="train-model-train-model-active list-item">
              <label className="train-model-text02">
                <span>Train Model</span>
              </label>
            </div>
            <div className="train-model-generate-images list-item">
              <Link to="/generate-images" className="train-model-navlink">
                <label className="train-model-text04">
                  <span>Generate Images</span>
                </label>
              </Link>
            </div>
          </div>
          <div className="train-model-tab-container">
            <span className="train-model-text06">
              <span>Email</span>
            </span>
            <input
              type="text"
              placeholder="Email"
              className="train-model-emailinput"
            />
            <span className="train-model-text08">
              <span>Upload Images</span>
            </span>
            <div className="train-model-uploadimagesinput">
              <img
                alt="Vector121"
                src="/playground_assets/vector121-01d.svg"
                className="train-model-vector"
              />
              <span className="train-model-text10">
                <span>Upload atleast 20 pictures</span>
              </span>
            </div>
            <span className="train-model-text12">
              <span>
                <span>
                  Note : All pictures should be taken from different angles, in
                  different cloths and background
                </span>
                <br></br>
                <span>Link to your trained model will be e-mailed to you</span>
              </span>
            </span>
            <button className="train-model-train-model-button">
              <span className="train-model-text17">
                <span>Train Model</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainModel
