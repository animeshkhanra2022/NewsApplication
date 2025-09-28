import React, { Component } from 'react'
import loading from '../../public/loading.gif'

const Spinner = () => {

  return (
    <div className='text-center my-5'>
      <img src={loading} alt="loading" />
    </div>
  )

}

export default Spinner
