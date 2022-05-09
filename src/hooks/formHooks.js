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

  function clearValoresCateoria(event) {
    event.preventDefault();
    setValoress(valorInicialCategoria);
  }

  const handleChange = useCallback((event) => {
    setValores(
      event.target.getAttribute('name'),
      event.target.value,
    );
  });

  return {
    handleChange, valores, clearValoresCateoria, setValores,
  };
}

export default useForm;
