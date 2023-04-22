import React from 'react'
import styles from './List.module.css'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'

 const UsersList = (props) => {
    console.log('sssss',props)

    const onDeleteUser = (key) =>{
         props.onRemoveUser(key)
    }
  return (
    <Card className={styles.users}>
    <ul>
        {props.users.map((user)=>{
         return (
            <li key={user.key}>
       <span> {user.username} ({user.age} years old) </span>
        <Button className={styles.btn} clickHandler={(e) => onDeleteUser(user.key)}>Remove</Button>
        </li> )
        })}
    </ul>
    </Card>
  )
}
export default UsersList