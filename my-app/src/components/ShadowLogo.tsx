import React from 'react';
import styled from 'styled-components';

type IShadowLogoProps = {
  className?: string;
  href?: string;
  text: string;
} & IShadowLogoStyleProps;

type IShadowLogoStyleProps = {
  color: string;
  fontSize: number;
};

const Container = styled.div<IShadowLogoStyleProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;

  .shadow-logo--inverse {
    opacity: 0.2;
    transform: rotateX(128deg);
    display: block;
  }
`;

export default function ShadowLogo(props: IShadowLogoProps) {
  return (
    <Container className={props.className} {...props}>
      <a className="shadow-logo" href={props.href}>
        {props.text} <span className="shadow-logo--inverse">{props.text}</span>
      </a>
    </Container>
  );
}
