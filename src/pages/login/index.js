import React from 'react';
import { Space, Spin } from 'antd';
import "antd/dist/antd.css";
import { InputLabel } from '../../components/inputLabel/InputLabel';
import './index.css'

function Login() {

    function handleSubmit(e) {
        e.preventDefault();
        alert('Clicou');
    }

  return (
    <div className="bg-login d-flex justify-content-center align-items-center">
        <form method='post' onSubmit={handleSubmit} className='d-flex flex-column w-25'>
            <div className='d-flex flex-column'>
                <InputLabel id="email" type="text" text="Email" />
                <InputLabel id="senha" type="password" text="Senha" />
            </div>
            <div className='d-flex'>
                <input type="submit" value="Conectar" className="w-25 btn-color"/>
                <Spin />
            </div>
        </form>
    </div>
  );
}

export default Login;
