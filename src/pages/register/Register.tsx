import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../service/Service';
import './Register.css';
import { ChangeEvent, useState } from 'react';
import { Customer } from '../../models/Model';
import { toast } from 'react-toastify';

export function Register() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [usuario, setUsuario] = useState<Customer>({
        id: 0,
        name: "",
        email: "",
        number: ""
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value,
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
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate("/");
            } catch (error) {
                setIsLoading(false);
                toast.error('Usamos hospedagem de backend gratuito, as vezes o sistema hiberna\nGeralmente na segunda vez funciona, \ntenta de novo!', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } else {
            toast.warning('Preencheu tudo certo?\nColoque seu nome, um email válido\nE um número válido...', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <>
            <h2 className='h3register'>Cadastrar</h2>
            <div className="form-container">
                <form onSubmit={onSubmit} className='form'>
                    <h3>Nome:</h3>
                    <input
                        placeholder='Nome'
                        className='input'
                        type="text"
                        name="name"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                    />

                    <h3>E-mail:</h3>
                    <input
                        placeholder='seuemail@example.com'
                        className='input'
                        type="email"
                        name="email"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                    />

                    <h3>Número:</h3>
                    <input
                        placeholder='(xx) xxxxxxxxx'
                        className='input'
                        type="text"
                        name="number"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                    />
                    <div className='butscad'>
                        <button disabled={isLoading} className='butsubmit'>
                            {isLoading ? (<span >Loading..</span>) : ('Cadastrar')}
                        </button>
                        <Link to='/'>
                            <button className='butcan'>
                                Cancelar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
