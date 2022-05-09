import React from 'react';
import PropTypes, { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import TableWraper from './style';
import useForm from '../../hooks/formHooks';
import { getCategoryById } from '../../repositories/categorias';

function Table({ values, valorInicialCategoria }) {
  const {
    setValores,
  } = useForm(valorInicialCategoria);

  function getCategory(id) {
    getCategoryById(id).then((res) => {
      console.log(res);
      setValores(res);
    });
    // console.log('CAIU AQUI');
  }

  return (
    <TableWraper>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th className="edit">Editar</th>
        </tr>
      </thead>
      <tbody>
        {values.map((value) => (
          <tr key={value.id}>
            <td>
              {value.titulo}
            </td>
            <td>
              {value.descricao}
            </td>
            <td className="edit">
              <FontAwesomeIcon onClick={() => { getCategory(value.id); }} icon={faPencil} />
            </td>
          </tr>
        ))}
      </tbody>

    </TableWraper>
  );
}

Table.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    titulo: string,
    descricao: string,
  })).isRequired,
  valorInicialCategoria: PropTypes.shape().isRequired,
};

export default Table;
