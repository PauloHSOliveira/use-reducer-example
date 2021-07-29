import React, {useReducer} from 'react'
import { Input, Button, Form} from 'antd'
import {formReducer} from '../../store/reducer'
import {ACTIONS} from '../../types'

const initialState = {
    email:'',
    password:''
}

const FormFC:React.FC = () => {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log(state)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        dispatch({
            type: ACTIONS.ChangeState,
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        })
    }

    return (
        <Form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Input placeholder="Insira seu e-mail" name="email" onChange={handleChange}/>
            <Input placeholder="Insira sua senha" name="password" onChange={handleChange} style={{marginTop:'20px'}}/>
            <Button style={{marginTop:'10px'}} onClick={handleSubmit}>Teste</Button>
        </Form>
    )
}

export {FormFC}