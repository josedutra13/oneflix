import URL_BACKEND from '../config/url';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function createNewVideo(valoresVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(valoresVideo),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }
    throw new Error(`ERROR NA BUSCA${res.status}`);
  });
}

export default createNewVideo;
