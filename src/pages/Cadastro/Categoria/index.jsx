import React, { useCallback, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { ButtonForm, ButtonWraper } from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/formHooks';
import {
  createNewCategory, getAllCategory,
} from '../../../repositories/categorias';
import Table from '../../../components/Table';

function CadastroCategoria() {
  const valorInicialCategoria = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const {
    handleChange, valores, clearValoresCateoria,
  } = useForm(valorInicialCategoria);

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

  // const updateCateg = useCallback((event, id) => {
  //   console.log(id);
  //   getCategory(id).then((res) => { setValoress({ ...valores, res }); });
  //   // updateCategory(valores, id).then((res) => setCategorias([...categorias, res]));
  // });

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
        <ButtonWraper>
          <ButtonForm register type="submit">
            Cadastrar
          </ButtonForm>
          <ButtonForm onClick={clearValoresCateoria}>
            Limpar
          </ButtonForm>
        </ButtonWraper>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <Table values={categorias} valorInicialCategoria={valorInicialCategoria} />

      {/* <Link to="/">
        Voltar pra home
      </Link> */}
    </PageDefault>
  );
}

export default CadastroCategoria;
