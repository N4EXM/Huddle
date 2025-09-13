import React, { Children, useEffect, useState } from 'react'

const MenuBackground = ({ openMenu, children }) => {

  return (
    <div
        className={`p-5 w-full ${openMenu ? "grid" : "hidden"} justify-start items-start grid-cols-3 min-h-screen bg-background/60 absolute z-20 left-0 top-0`}
    >
      {children}
    </div>
  )
}

export default MenuBackground