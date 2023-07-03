import axios from "axios";

export const api = axios.create({
    baseURL: 'https://customers-data.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}