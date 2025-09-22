import React from 'react'

const OverlayBackground = ({ children, toggleOverlayBackground }) => {

  return (
    <div
      className={`p-5 w-full ${toggleOverlayBackground ? "flex" : "hidden"} justify-start items-start min-h-screen bg-background/60 absolute z-20 left-0 top-0 max-h-screen flex-row-reverse overflow-hidden gap-4`}
    >
      {children}
    </div>
  )
}

export default OverlayBackground