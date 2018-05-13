import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { shallow } from 'enzyme'
import CardList from '../CardList'
import data from './CardList_mock.json'

describe('CardList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardList list={data} saveCard={() => {}} />)
  })

  describe('the \"formOpen\" state changes', () => {
    beforeEach(() => {
      wrapper.setState({formOpen:true})
    })

    it('should open a form with a submit button', () => {
      expect(
        wrapper.containsMatchingElement(
          <Button type="submit">+</Button>
        )
      ).toBe(true)
    })
  })
})