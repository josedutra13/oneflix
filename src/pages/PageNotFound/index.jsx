import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFoundTitle = styled.h1`
   text-align:center;
   color: var(--grayStrong);
   font-size: 200px;
   font-weight: bold;
   margin: 0 0 15px 0;
   line-height: 1;
   .ban{
       color: red;
       height:170px;
       margin: 0 5px 0 5px;
   }

   @media (max-width: 800px){
       font-size: 100px;
       padding-top: 55%;
       .ban{
       color: red;
       height: 85px;
       margin: 0 5px 0 5px;
   }
   }
`;

const NotFoundParagrath = styled.p`
   color: var(--grayStrong);
   font-size: 20px;
   font-weight: bold;
   line-height: 1; 
   text-align:center;
   .link{
       text-decoration: none;
   }
`;

function PageNotFound() {
  return (
    <>
      <NotFoundTitle>
        4
        <FontAwesomeIcon icon={faBan} className="ban" />
        4
      </NotFoundTitle>
      <NotFoundParagrath>
        Página não encontrada vamos voltar para o
        {' '}
        <Link to="/">Início</Link>
        .
      </NotFoundParagrath>
    </>

  );
}

export default PageNotFound;
