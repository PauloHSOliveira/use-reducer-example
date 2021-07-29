import React, {useReducer} from 'react'
import { Input, Button, Form} from 'antd'
import {formReducer} from '../../store/reducer'
import {ACTIONS} from '../../types'
import {button_styles,form_styles,input_styles} from './styles'

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
        <Form style={form_styles}>
            <Input placeholder="Insira seu e-mail" name="email" onChange={handleChange}/>
            <Input placeholder="Insira sua senha" name="password" onChange={handleChange} style={input_styles}/>
            <Button style={button_styles} onClick={handleSubmit}>Teste</Button>
        </Form>
    )
}

export {FormFC}