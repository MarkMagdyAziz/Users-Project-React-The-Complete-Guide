import React,{useState} from 'react'
import Card from '../../UI/Card/Card'
import styles from "./Form.module.css"
import Button from '../../UI/Button/Button'
import Modal from '../../UI/Modal/Modal'

export default function UserForm(props) {
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState(null)

    const submitHandler = (event)=>{
        event.preventDefault()
        if(age <= 0 || age.trim().length === 0 ) {
            setError({
                title:'age error',
                message:'the age should be greater than 0'
            })
            return;
        }
        if(username.trim().length <= 0 ) {
            setError({
                title:'username error',
                message:'insert a valid username'
            })
            return;
        }
        props.onAddUser(username,age)
        setAge('')
        setUsername('')
    }
    const handleInputChange = (event)=>{
        const {name,value} = event.target
        switch (name) {
            case "username":
                setUsername(value)
                break;
            case "age":
                setAge(value)
                break;
            default:
                break;
        }

    }
  return (
    <>
    {error && (<Modal title={error.title} message={error.message} onConfirm={() => setError(null) }/>)}
      <Card className={styles.input} >
      <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input value={username} onChange={handleInputChange} name="username" type='text' id='username'></input>
          <label htmlFor='age'>Age  (Years)</label>
          <input value={age} onChange={handleInputChange} name="age" type='number' id='age'></input>
          <Button type='submit' >Add User</Button>
        </form>
      </Card>
      </>
  )
}
