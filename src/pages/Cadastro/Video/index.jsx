import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import useForm from '../../../hooks/formHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { ButtonForm, ButtonWraper } from '../../../components/Button';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { createNewVideo } from '../../../repositories/videos';
import { getAllCategory } from '../../../repositories/categorias';
import isYoutubeVideo from './validateUrl';

function CadastroVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const suggestionTitles = categorias.map(({ titulo }) => titulo);
  const formik = useFormik({
    initialValues: {
      titulo: '',
      url: '',
      categoria: '',
    },
    onSubmit: (values) => {
      const choiceCategory = categorias.find((categoria) => categoria.titulo === values.categoria);
      createNewVideo({
        titulo: values.titulo,
        url: values.url,
        categoriaId: choiceCategory.id,
      }).then(() => {
        navigate('/');
      });
    },
    validate: (values) => {
      const errors = {};
      const hasCategory = suggestionTitles.find((titles) => (titles === values.categoria));
      if (values.titulo === '') {
        errors.titulo = 'Campo Obrigatório';
      }
      if (values.url === '') {
        errors.url = 'Campo obrigatório';
      } else if (!isYoutubeVideo(values.url)) {
        errors.url = 'Informe uma Url válida';
      }
      if (values.categoria === '') {
        errors.categoria = 'Campo obrigatório';
      } else if (!hasCategory) {
        errors.categoria = 'Insira uma categoria existente';
      }

      return errors;
    },
  });

  useEffect(() => {
    getAllCategory().then((res) => setCategorias(res));
  }, []);

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>Novo Vídeo</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormField
          label="Titulo"
          value={formik.values.titulo}
          name="titulo"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.titulo}
        />
        <FormField
          label="Url"
          value={formik.values.url}
          name="url"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.url}
        />
        <FormField
          label="Categoria"
          value={formik.values.categoria}
          name="categoria"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.categoria}
          suggestions={suggestionTitles}
        />
        <ButtonWraper>
          <ButtonForm register type="submit">
            Cadastrar
          </ButtonForm>
          <ButtonForm type="button" onClick={formik.resetForm}>
            Limpar
          </ButtonForm>

        </ButtonWraper>
      </form>
      <Link className="history" to="/cadastro/video/historico">
        <FontAwesomeIcon className="icon" icon={faHistory} />
        History
      </Link>
      {/* <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
