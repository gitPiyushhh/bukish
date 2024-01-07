import React from 'react'

function User({user}) {
  return (
    <div className='bg-white-50 p-6 shadow-md rounded-md'>
      <div className='flex w-full'>
        Name: {user.name}
      </div>
      
      <div>
        Books: {user.books}
      </div>
    </div>
  )
}

export default User