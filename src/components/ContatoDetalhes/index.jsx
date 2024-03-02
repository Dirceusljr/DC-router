import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ContatoDetalhes = () => {
    const navigate = useNavigate();
    const click = () => {
        return navigate('/')
    }

    const {id} = useParams();
    const contatos = [{
        nome: 'Raylan',
        user: "raylancordeiro",
    },
    {
        nome: 'Dirceu',
        user: "dirceusljr"
    }
    ]

  return (
    <>
        <div>Contato do Criador {id}</div>
        <h2>Nome: {contatos[id-1].nome}</h2>
        <img src={`https://github.com/${contatos[id-1].user}.png`} alt="" />
        <button onClick={click}>Voltar</button>
    </>
  )
}

export default ContatoDetalhes