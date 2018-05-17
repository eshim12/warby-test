import React, {Component} from 'react';
import {Image, Modal, Rating} from 'semantic-ui-react'

const handleClick = () => {
  console.log("clicked rating");
}

const GlassDetail = ({glass}) => (
  <Modal trigger={<Image className='glasses' size='medium' src={require(`../pictures/${glass.key}.png`)}/>}>
  <Modal.Content image>
    <Image className='glasses' size='medium' src={require(`../pictures/${glass.key}.png`)}/>
    <Modal.Description>
      <p>{glass.key}</p>
      <p>Like it? <Rating icon='heart' defaultRating={0} maxRating={1} onRate={handleClick}/></p>
    </Modal.Description>
  </Modal.Content>
  </Modal>
)

export default GlassDetail
