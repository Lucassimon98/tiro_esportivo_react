import { InputLabel } from '../../component/inputLabel/InputLabel';
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
            <input type="submit" value="Conectar" className="w-25"/>
        </form>
    </div>
  );
}

export default Login;
