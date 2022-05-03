import React, { useCallback, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../../hooks/formHooks';
import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import createNewVideo from '../../../repositories/videos';
import { getAllCategory } from '../../../repositories/categorias';

function CadastroVideo() {
  const navigate = useNavigate();
  const { handleChange, valores } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=eYuI4krrKBM',
    categoria: 'Front END',
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getAllCategory().then((res) => setCategorias(res));
  }, []);

  const suggestionTitles = categorias.map(({ titulo }) => titulo);

  const createVideos = useCallback((event) => {
    event.preventDefault();

    if (valores.titulo !== '' && valores.url !== '' && valores.categoria !== '') {
      const choiceCategory = categorias.find((categoria) => categoria.titulo === valores.categoria);
      createNewVideo({
        titulo: valores.titulo,
        url: valores.url,
        categoriaId: choiceCategory.id,
      }).then(() => {
        console.log('CADASTRADO');
        navigate('/');
      });
    } else {
      console.log('preencha os dados');
    }
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={createVideos}>
        <FormField
          label="Titulo"
          value={valores.titulo}
          name="titulo"
          type="text"
          onChange={handleChange}
        />
        <FormField
          label="Url"
          value={valores.url}
          name="url"
          type="text"
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          value={valores.categoria}
          name="categoria"
          type="text"
          onChange={handleChange}
          suggestions={suggestionTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
