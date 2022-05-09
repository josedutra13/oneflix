import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
  }
`;

const ButtonWraper = styled.div`
  display:flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;

const ButtonForm = styled.button`
   color: ${(props) => (props.register ? 'var(--white)' : 'var(--black)')};
   background-color: ${(props) => (props.register ? 'var(--primary)' : 'var(--grayMedium)')};
   box-sizing: border-box;
   cursor: pointer;
   font-size: 18px;
   font-style: normal;
   font-weight: bold;
   outline:none;
   border:none;
   margin-right: 15px;
   border-radius: 5px;
   text-decoration: none;
   display: inline;
   width: 180px;
   height: 54px;

   @media (max-width: 800px){
      
   }
`;

export {
  Button, ButtonForm, ButtonWraper,
};
