import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

type IProgressDotProps = {
  className?: string;
  top: number;
  active: boolean;
  reff: (ref: HTMLSpanElement | null) => void;
};

const ProgressDotContainer = styled.div`
  .progress-dot {
    width: 20px;
    height: 20px;
    position: relative;
    display: inline-block;
    background-color: black;
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border: 3px solid #fff;
      border-radius: 50%;
      animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  .progress-dot.active {
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 50%;
      border-color: #fff;
      animation: grow 1s linear infinite;
      transform: scale(1.5);
    }
  }

  @keyframes ring {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1.3);
    }

    75% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
export default function ProgressDot(props: IProgressDotProps) {
  return (
    <ProgressDotContainer>
      <span
        className={cx('progress-dot', props.className, {
          active: props.active,
        })}
        style={{ top: props.top }}
        ref={(ref) => {
          props.reff(ref);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </span>
    </ProgressDotContainer>
  );
}
