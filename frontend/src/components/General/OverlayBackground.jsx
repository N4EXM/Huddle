import React, { Children, useEffect, useState } from 'react'
import { useMenu } from '../../context/MenuContext'

const OverlayBackground = ({ children }) => {

  const { toggleOverlayBackground } = useMenu()

  return (
    <div
      className={`p-5 w-full ${toggleOverlayBackground ? "grid" : "hidden"} justify-start items-start grid-cols-3 min-h-screen bg-background/60 absolute z-20 left-0 top-0 max-h-screen overflow-y-hidden grid`}
    >
      {children}
    </div>
  )
}

export default OverlayBackground