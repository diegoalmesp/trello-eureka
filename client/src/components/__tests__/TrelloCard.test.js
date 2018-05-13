import React from 'react'
import TrelloCard from '../TrelloCard'
import { CardText } from 'reactstrap'
import { shallow } from 'enzyme'

describe('TrelloCard', () => {
  let wrapper

  const card = {
    id: 'id',
    name: 'text'
  }

  beforeEach(() => {
    wrapper = shallow(
      <TrelloCard card={card} />
    )
  })

  it('it should have an `<CardText />` element with an specific text', () => {
    expect(
      wrapper.contains(
        <CardText>{card.name}</CardText>
      )
    ).toBe(true)
  })

  it('should be a draggable element' ,() => {
    expect(
      wrapper.props().draggable
    ).toBe(true)
  })
})