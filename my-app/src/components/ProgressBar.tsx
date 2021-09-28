import React, { RefObject } from 'react';
import styled from 'styled-components';

type IProgressBarContianerProps = {
  height?: number;
  width?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  marginTop?: string;
  borderRadius?: string;
};

type IProgressBarProps = {
  progressLength: number;
  progressbarRef: RefObject<HTMLDivElement>;
} & IProgressBarContianerProps;

const ProgressBarContainer = styled.div<IProgressBarContianerProps>`
  z-index: 1;
  margin-top: ${(props: IProgressBarContianerProps) =>
    props.marginTop || '30px'};
  border-radius: ${(props: IProgressBarContianerProps) =>
    props.borderRadius || '40px'};
  width: ${(props: IProgressBarContianerProps) => props.width || '10px'};
  .bar-fill {
    z-index: 2;
    border-radius: 40px;
    width: 8px;
    background: ${(props: IProgressBarContianerProps) =>
      `linear-gradient(180deg, ${props.color1 || 'black'}, ${
        props.color2 || 'rgb(190, 190, 190)'
      }, ${props.color3 || 'black'}, ${props.color4 || 'rgb(190, 190, 190)'})
            `};
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }
`;

export default function ProgressBar(props: IProgressBarProps) {
  return (
    <ProgressBarContainer style={{ height: props.height }}>
      <div ref={props.progressbarRef} className="bar">
        <div
          className="bar-fill"
          style={{ height: props.progressLength }}
        ></div>
      </div>
    </ProgressBarContainer>
  );
}
