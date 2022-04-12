import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  margin-right: 20px;
`;

export const Progress = styled.progress`
  width: 200px;
  height: 12px;

  & progress[value] ::-webkit-progress-bar {
    /* height: 8px; */
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(0, 172, 193, 0.4) 0%, #00acc1 100%);
  }
  & progress[value]::-webkit-progress-value {
    /* height: 8px; */
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(0, 172, 193, 0.4) 0%, #00acc1 100%);
  }
`;
