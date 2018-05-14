import React, {Component} from 'react';
import Webcam from 'react-webcam';
import {Image} from 'semantic-ui-react'

class Camera extends Component {

  render(){
    return (
      <div>
        <h2><center>Try it on!</center></h2>
        <div className='webcam'>
          <Webcam
            id="content"
            className="camera"
            audio={false}
            height={200}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
          <Image className='glasses' size='small' src={require('../pictures/glasses.png')} />
        </div>
      </div>
    )
  }
}

export default Camera
