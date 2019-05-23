import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider';
import LazyImage from './components/LazyImage';

const element = document.getElementById('botBody')

const app = (
  <div>
    <h1>GitTags enhances your performance</h1>
    <Slider>
      <LazyImage src="https://api.discordapps.dev/appdata/5a339dd5ba3e02cccaa721eeba85cf8c3a728a78b0613f829b40c9cf597956db.png" />
      <LazyImage src="https://api.discordapps.dev/appdata/d3a41805f6fa93949d443f74715b73f5f27141fb5968eaa914322694cc1cc0eb.png" />
      <LazyImage src="https://api.discordapps.dev/appdata/3b5aed27ae412f0a493304ee4860303622f524869d254bde7eb97381dc933d3d.png" />
    </Slider>
  </div>
)

ReactDOM.render(app, element)
