/* eslint-disable react/react-in-jsx-scope */
import styled, { css } from 'styled-components';
import PropsType from 'prop-types';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
   background-color: var(--black);
   color: var(--white);
   flex:1;
   padding: 50px 5% 0 5%;
   ${({ paddingAll }) => (paddingAll !== 1 ? css`
     padding: ${paddingAll};
   ` : css`
     padding: 50px 5% 0 5%;
   `)}

   .history{
     padding-right:20px;
     margin-left: 20px;
     text-decoration: none;
     font-size: 20px;
     font-weight: bold;
   }

   .history .icon{
     padding-right:10px;
   }

   @media (max-width: 800px){
     .history{
       margin-top: 10px ;
       margin-left: 15px; 
     }
   }
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />

    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: 1,
};

PageDefault.propTypes = {
  children: PropsType.arrayOf(PropsType.shape()).isRequired,
  paddingAll: PropsType.number,
};

export default PageDefault;
