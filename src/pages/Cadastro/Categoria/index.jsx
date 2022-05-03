import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/formHooks';
import { createNewCategory, getAllCategory } from '../../../repositories/categorias';

function CadastroCategoria() {
  const valorInicialCategoria = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearValoresCateoria } = useForm(valorInicialCategoria);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getAllCategory().then((res) => setCategorias(res));
  }, []);

  const createCategory = useCallback((event) => {
    event.preventDefault();
    if (valores.titulo !== '' && valores.descricao !== '' && valores.cor !== '') {
      createNewCategory(valores).then((res) => setCategorias([...categorias, res]));
      clearValoresCateoria();
    } else {
      console.log('preencha os dados');
    }
  });

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>Nova Categoria</h1>
      <form onSubmit={createCategory}>

        <FormField
          label="Nome"
          value={valores.titulo}
          name="titulo"
          type="text"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={valores.descricao}
          name="descricao"
          type="textarea"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          value={valores.cor}
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
        {categorias.map((categoria) => <li key={`${categoria.titulo}`}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">
        Voltar pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
