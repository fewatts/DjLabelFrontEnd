import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../service/Service';
import './Register.css';
import { Customer } from '../../models/Model';
import { toast } from 'react-toastify';

export function Register() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [usuario, setUsuario] = useState<Customer>({
        id: 0,
        name: '',
        email: '',
        number: ''
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        });
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        if (usuario.name.length > 2 && usuario.number.length >= 11) {
            try {
                setIsLoading(true);
                console.log(usuario);
                await cadastrarUsuario('/customer/register', usuario, setUsuario);
                toast.success('Usuário cadastrado!', {
                    position: 'bottom-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                });
                navigate('/');
            } catch (error) {
                setIsLoading(false);
                toast.error(
                    'Usamos hospedagem de backend gratuito, as vezes o sistema hiberna\nGeralmente na segunda vez funciona, \ntenta de novo!',
                    {
                        position: 'bottom-center',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored'
                    }
                );
            }
        } else {
            toast.warning(
                'Preencheu tudo certo?\nColoque seu nome, um email válido\nE um número válido...',
                {
                    position: 'bottom-center',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored'
                }
            );
        }
    }

    return (
        <main className='main-register'>
            <h2 className="h3register">Cadastrar</h2>
            <div className="form-container">
                <form onSubmit={onSubmit} className="form">
                    <h3>Nome:</h3>
                    <input
                        placeholder="Nome"
                        className="input"
                        type="text"
                        name="name"
                        value={usuario.name}
                        onChange={updateModel}
                    />
                    <h3>E-mail:</h3>
                    <input
                        placeholder="seuemail@exemplo.com"
                        className="input"
                        type="email"
                        name="email"
                        value={usuario.email}
                        onChange={updateModel}
                    />
                    <h3>Número:</h3>
                    <input
                        placeholder="(xx) xxxxxxxxx"
                        className="input"
                        type="text"
                        name="number"
                        value={usuario.number}
                        onChange={updateModel}
                    />
                    <div className="butscad">
                        <button disabled={isLoading} className="butsubmit">
                            {isLoading ? <span>Loading..</span> : 'Cadastrar'}
                        </button>
                        <Link to="/">
                            <button className="butcan">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
            <br />
        </main>
    );
}
