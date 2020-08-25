import React from 'react'

export default function LayoutSimple({children}) {
  return (
    <div>
      {/* TAR ALLA underordnade och renderar ut dem */}
      {/* Behövs en extra div! */}
      <div>
        <h1>FactCat</h1>
        {/* <Link className="btn btn-primary btn-block" to="/">Home</Link> */}
      </div>
      {children}
    </div>
  )
}
