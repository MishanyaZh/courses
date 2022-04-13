import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  justify-content: flex-end;
`;

export const Title = styled.div`
  margin-right: 20px;
`;

export const Progress = styled.progress`
  width: 200px;
  height: 8px;
  border-radius: 4px;
  &::-webkit-progress-bar {
    border-radius: 4px;
    background: #eceff1;
  }
  &::-webkit-progress-value {
    border-radius: 4px 0px 0px 0px;
    background: linear-gradient(90deg, rgba(0, 172, 193, 0.4) 0%, #00acc1 100%);
  }
  &::-moz-progress-bar {
    border-radius: 4px;
    background: #eceff1;
  }
`;
