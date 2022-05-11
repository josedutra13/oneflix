import styled from 'styled-components';

const HistoryWraper = styled.table`
   width: 70%;
   border: 1px solid var(--frontEnd);
   border-collapse: collapse;
   margin-left: 11.5%;
   margin-top: 15px;
   text-align: center;
   
   thead tr th{
      padding: 6px 10px;
      border: 1px solid var(--frontEnd);
   }

   tbody tr td{
      padding: 6px 10px;
      border: 1px solid var(--frontEnd);
   }
   .delete:hover{
      cursor: pointer;
   }

`;

const HistoryModal = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100px;
  height: 100px;
  background-color: var(--grayMedium);
  z-index:10;
`;

export { HistoryWraper, HistoryModal };
