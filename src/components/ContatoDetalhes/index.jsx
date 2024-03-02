import React from 'react'
import { useParams } from 'react-router-dom'

const ContatoDetalhes = () => {

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
    </>
  )
}

export default ContatoDetalhes