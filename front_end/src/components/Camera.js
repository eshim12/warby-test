import React, {Component} from 'react';
import Webcam from 'react-webcam';
import {Image, Dropdown} from 'semantic-ui-react'

const glasses = [
  {
    key: 'roundGlasses',
    src: require('../pictures/roundGlasses.png'),
    category: 'eye glass'
  },
  {
    key: 'rimGlasses',
    src: require('../pictures/rimGlasses.png'),
    category: 'eye glass'
  },
  {
    key: 'redGlasses',
    src: require('../pictures/redGlasses.png'),
    category: 'eye glass'
  },
  {
    key: 'harryPotter',
    src: require('../pictures/harryPotter.png'),
    category: 'eye glass'
  },
  {
    key: 'chromeGlass',
    src: require('../pictures/chromeGlass.png'),
    category: 'sunglass'
  },
  {
    key: 'warbyGlasses',
    src: require('../pictures/warbyGlasses.png'),
    category: 'sunglass'
  }
]

class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glassModel: 'redGlasses',
      category: 'all'
    }
  }

  setRef = (webcam) => {
    this.webcam = webcam
  }

  getCat = () => {
    const cat = [...new Set(glasses.map(glass => glass.category))]
    return cat
  }

  handleClick = (e) => {
    console.log(e.target.id)
    this.setState({
      glassModel: e.target.id
    })
  }

  handleCategory = (e) => {
    console.log(e.target.id);
    this.setState({
      category: e.target.id
    })
  }

  render(){
    const {glassModel, category} = this.state
    const cat = this.getCat()

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
          <Image className='glasses' size='small' src={require(`../pictures/${glassModel}.png`)} />
        </div>
        <div className='dropdown'>
          <Dropdown text={category.toUpperCase()}>
            <Dropdown.Menu>
              {cat.map(category => <Dropdown.Item id={category} key={category} onClick={this.handleCategory}>{category}</Dropdown.Item>)}
              <Dropdown.Item id='all' onClick={this.handleCategory}>all</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <center>
            {category != 'all' ? glasses.filter(glass => glass.category === category).map(glass => <div key={glass.key} id={glass.key} onClick={this.handleClick}><img style={{width:'50%'}} src={glass.src} id={glass.key}/></div>) : glasses.map(glass => <div key={glass.key} id={glass.key} onClick={this.handleClick}><img style={{width:'50%'}} src={glass.src} id={glass.key}/></div>)}
          </center>
        </div>
      </div>
    )
  }
}

export default Camera
