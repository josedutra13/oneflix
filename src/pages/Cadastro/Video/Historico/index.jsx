import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { HistoryWraper } from './style';
import PageDefault from '../../../../components/PageDefault';
import { getAllWithVideos } from '../../../../repositories/categorias';
import { deleteVideo } from '../../../../repositories/videos';

function HistoryVideos() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getAllWithVideos().then((res) => setCategorias(res));
  }, []);
  const handleDelete = useCallback((id) => {
    deleteVideo(id).finally(getAllWithVideos().then((res) => setCategorias(res)));
  });

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>Ultimos Videos</h1>
      <HistoryWraper>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Videos</th>
            <th className="delete">Apagar</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => {
            if (categorias.indexOf(categoria) === 0) {
              return categoria.videos.map((video) => {
                if (categoria.videos.indexOf(video) >= 10) {
                  return (
                    <tr key={categoria.id + video.id}>
                      <td>
                        {categoria.titulo}
                      </td>
                      <td>
                        {
                        video.titulo
                        }
                      </td>
                      <td className="delete">
                        <FontAwesomeIcon onClick={() => handleDelete(video.id)} icon={faTrash} />
                      </td>
                    </tr>
                  );
                }
                return null;
              });
            }
            return categoria.videos.map((video) => {
              if (categoria.videos.indexOf(video) >= 4) {
                return (
                  <tr key={categoria.id + video.id}>
                    <td>
                      {categoria.titulo}
                    </td>
                    <td>
                      {
                        video.titulo
                        }
                    </td>
                    <td className="delete">
                      <FontAwesomeIcon onClick={() => handleDelete(video.id)} icon={faTrash} />
                    </td>
                  </tr>
                );
              }
              return null;
            });
          })}
        </tbody>
      </HistoryWraper>
    </PageDefault>
  );
}

export default HistoryVideos;
