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
  padding-bottom: 20px;
`;

const ButtonForm = styled.button`
   color: ${(props) => (props.register ? 'var(--white)' : 'var(--white)')};
   background-color: ${(props) => (props.register ? 'var(--primary)' : 'var(--black)')};
   box-sizing: border-box;
   cursor: pointer;
   font-size: 18px;
   font-style: normal;
   font-weight: bold;
   outline:none;
   border:${(props) => (props.register ? 'none' : '1px solid white')};
   margin-right: 15px;
   border-radius: 5px;
   text-decoration: none;
   display: inline;
   width: 180px;
   height: 54px;
`;

export {
  Button, ButtonForm, ButtonWraper,
};
