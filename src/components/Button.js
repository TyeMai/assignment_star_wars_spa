import React from 'react';


const Button = (props) => {
  const {btnName, extraBtnInfo, onClick, className} = props

  return (

    <button onClick={onClick} className={className} {...props}>
      {btnName} {extraBtnInfo}
    </button>
  )


}

export default Button
