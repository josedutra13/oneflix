import URL_BACKEND from '../config/url';

const URL_CATEGORY = `${URL_BACKEND}/categorias`;

function getAllCategory() {
  return fetch(`${URL_CATEGORY}`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error(`ERROR NA BUSCA${res.status}`);
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORY}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error(`ERROR NA BUSCA${res.status}`);
  });
}

function createNewCategory(valoresCategoria) {
  return fetch(URL_CATEGORY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(valoresCategoria),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }
    throw new Error(`ERROR NA BUSCA${res.status}`);
  });
}

export {
  getAllCategory, getAllWithVideos, createNewCategory,
};
