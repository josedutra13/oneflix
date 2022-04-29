import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valorInicialCategoria = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valoresCategoria, setValoresCategorias] = useState(valorInicialCategoria);

  function setValores(key, value) {
    setValoresCategorias(
      {
        ...valoresCategoria,
        [key]: value,
      },
    );
  }
  const handleChange = useCallback((event) => {
    setValores(
      event.target.getAttribute('name'),
      event.target.value,
    );
  });

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (res) => {
      const response = await res.json();
      setCategorias([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>Nova Categoria</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          valoresCategoria,
        ]);

        setValoresCategorias(valorInicialCategoria);
      }}
      >

        <FormField
          label="Nome"
          value={valoresCategoria.nome}
          name="nome"
          type="text"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={valoresCategoria.descricao}
          name="descricao"
          type="textarea"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          value={valoresCategoria.cor}
          name="cor"
          type="color"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">
        Voltar pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
