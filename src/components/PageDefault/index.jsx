/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import PropsType from 'prop-types';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
   background-color: var(--black);
   color: var(--white);
   flex:1;
   padding: 50px 5% 0 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />

    </>
  );
}

PageDefault.propTypes = {
  children: PropsType.arrayOf().isRequired,
};

export default PageDefault;
