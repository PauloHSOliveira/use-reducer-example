import React from 'react'
import { Input, Button, Form} from 'antd'

const FormFC:React.FC = () => {

    return (
        <Form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Input />
            <Input style={{marginTop:'20px'}}/>
            <Button style={{marginTop:'10px'}}>Teste</Button>
        </Form>
    )
}

export {FormFC}