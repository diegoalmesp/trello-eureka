import React from 'react'
import './loading.css';

const Loading = ({color}) => (
  <div className="lds-ellipsis">
    <div style={{background: color ? color : 'inherit'}}></div>
    <div style={{background: color ? color : 'inherit'}}></div>
    <div style={{background: color ? color : 'inherit'}}></div>
    <div style={{background: color ? color : 'inherit'}}></div>
  </div>
)

export default Loading
