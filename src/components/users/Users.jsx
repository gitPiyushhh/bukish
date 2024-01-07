import React from 'react';
import { useSelector } from 'react-redux';
import User from '../user/User';

function Users() {
  const {users} = useSelector(state => state.user)

  return (
    <div className='w-full h-full mt-[10rem] flex justify-between items-center'>
      {users.map(user => <User user={user}/>)}
    </div>
  )
}

export default Users