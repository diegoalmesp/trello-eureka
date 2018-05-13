import React from 'react'
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  Form,
  Input } from 'reactstrap';

const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Form inline>
              <Input type="text" name="search" placeholder="..." />
            </Form>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

export default Header;
