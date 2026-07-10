import React from 'react'

function Card(props) {
  return (
   <div className="card">
        <img
          src="https://i.pinimg.com/736x/e4/09/11/e409112d79e77426606d15573bf207c4.jpg"
          alt="photo"
        />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card