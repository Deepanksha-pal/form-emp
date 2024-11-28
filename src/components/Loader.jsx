import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full opacity-50"></div>
    </div>
  </div>
  )
}

export default Loader
