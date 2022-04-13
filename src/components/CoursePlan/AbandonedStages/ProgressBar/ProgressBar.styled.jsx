import styled from '@emotion/styled';

export const ProgresItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;
export const Progress = styled.progress`
  width: 250px;
  height: 4px;
  margin-top: 5px;
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

export const Value = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #00acc1;
`;
export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  color: #78909c;
`;
