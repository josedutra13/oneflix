import styled from 'styled-components';

const TableWraper = styled.table`
   width: 70%;
   border: 1px solid var(--frontEnd);
   border-collapse: collapse;
   margin-top: 15px;
   text-align: justify;
   
   thead tr th{
      padding: 6px 10px;
      border: 1px solid var(--frontEnd);
   }

   tbody tr td{
      padding: 6px 10px;
      border: 1px solid var(--frontEnd);
   }
   .edit{
      text-align:center
   }
   .edit:hover{
      cursor: pointer;
   }

`;

export default TableWraper;
