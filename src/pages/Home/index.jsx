import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import { getAllWithVideos } from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    getAllWithVideos().then((res) => {
      setDadosIniciais(res);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.map((category, i) => {
        if (i === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Entenda o porque Luffy se tornará o Rei dos Piratas"
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return (<Carousel key={category.id} category={category} />);
      })}

      {/* <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />  */}

    </PageDefault>
  );
}

export default Home;
