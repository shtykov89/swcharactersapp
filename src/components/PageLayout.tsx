import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledLayout = styled.main`
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
