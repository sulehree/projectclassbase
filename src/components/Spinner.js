import React, { Component } from 'react'
import banner from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>

        <img src={banner} alt="Its Loading" />
      </div>
    )
  }
}


export default Spinner