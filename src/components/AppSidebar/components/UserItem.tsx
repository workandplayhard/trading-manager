import React from 'react'

export const UserItem: React.FC<{
  name: string
  email: string
  avatar: string
}> = ({ name, email, avatar }) => {
  return (
    <div className="user-data">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  )
}
