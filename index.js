import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider';
import LazyImage from './components/LazyImage';

const element = document.getElementById('botBody')

const app = (
  <div>
    <h1 id="gittags">GitTags</h1>
    <p>Git your Tag from Git</p>
    <h2 id="how-to-use">How to use</h2>
    <ol>
      <li>Make a GitHub repository and make a folder called <code>tags</code> within it</li>
      <li>The names of the files are the name of the tags</li>
    </ol>
    <h3 id="set-command">Set command</h3>
    <p><em>You need the "Manage Guild" role to set a repository</em></p>
    <ul>
      <li>
        <code>git&lt;set</code>
        <ul>
          <li>Use the default GitHub repository.</li>
        </ul>
      </li>
      <li>
        <code>git&lt;set [owner]</code>
        <ul>
          <li>Use the <strong>[owner]/gittag</strong> repository.</li>
        </ul>
      </li>
      <li><code>git&lt;set [owner];[repo]</code>
        <ul>
          <li>Use the <strong>[owner]/[repo]</strong> repository.</li>
        </ul>
      </li>
    </ul>
    <h3 id="info-command">Info command</h3>
    <ul>
      <li><code>git&lt;info</code>
        <ul>
          <li>Get information about where GitTags is currently pointing to</li>
        </ul>
      </li>
    </ul>
    <h3 id="tag-command">Tag command</h3>
    <ul>
      <li><code>git&gt;[tag]</code>
        <ul>
          <li>Obtain text with the tag name</li>
        </ul>
      </li>
    </ul>
    <Slider>
      <LazyImage src="https://api.discordapps.dev/appdata/5a339dd5ba3e02cccaa721eeba85cf8c3a728a78b0613f829b40c9cf597956db.png" />
      <LazyImage src="https://api.discordapps.dev/appdata/d3a41805f6fa93949d443f74715b73f5f27141fb5968eaa914322694cc1cc0eb.png" />
      <LazyImage src="https://api.discordapps.dev/appdata/3b5aed27ae412f0a493304ee4860303622f524869d254bde7eb97381dc933d3d.png" />
    </Slider>
  </div>
)

ReactDOM.render(app, element)
