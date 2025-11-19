import React from 'react'

const PageLayout = (props) => {
  return (
    <div>
      {props.header}
      {props.children}
      {props.footer}
    </div>
  )
}

export default PageLayout
