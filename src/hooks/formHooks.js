import { useCallback, useState } from 'react';

function useForm(valorInicialCategoria) {
  const [valores, setValoress] = useState(valorInicialCategoria);

  function setValores(key, value) {
    setValoress(
      {
        ...valores,
        [key]: value,
      },
    );
  }

  function clearValoresCateoria() {
    setValoress(valorInicialCategoria);
  }

  const handleChange = useCallback((event) => {
    setValores(
      event.target.getAttribute('name'),
      event.target.value,
    );
  });

  return { handleChange, valores, clearValoresCateoria };
}

export default useForm;
