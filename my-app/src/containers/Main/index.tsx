import ProgressBar from '@Components/ProgressBar';
import React, { useEffect, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import cx from 'classnames';
import ProgressDot from '@Components/ProgressDot';
import ImgUrls from '@Imgs/imgs-url';

type IMainProps = {};

type IMainStates = {
  progressDotActive: boolean[];
  progressBarHeight: number;
  progressDotLocations: number[];
  maxScrollY: number;
};

export default function Main(props: IMainProps) {
  const bar = useRef<HTMLDivElement>(null);
  const barSection = useRef<HTMLDivElement>(null);
  const progressDots = useRef<HTMLSpanElement[]>([]);
  const contentBoxRefs = useRef<HTMLDivElement[]>([]);

  const defaultState: IMainStates = {
    progressDotActive: [],
    progressBarHeight: 0,
    progressDotLocations: [],
    maxScrollY: window.scrollY + window.innerHeight / 2,
  };

  const [loading, setLoading] = useState<boolean>(true);

  const [progressDotActive, setProgressDotActive] = useState<boolean[]>(
    defaultState.progressDotActive
  );
  const [dotTops, setDotTops] = useState<number[]>([]);
  const [maxScrollY, setMaxScrollY] = useState<number>(defaultState.maxScrollY);
  const [progressBarHeight, setProgressBarHeight] = useState<number>(
    defaultState.progressBarHeight
  );
  const [progressDotLocations, setProgressDotLocaitons] = useState<number[]>(
    defaultState.progressDotLocations
  );

  useEffect(() => {
    let curContent = 0,
      curDot = bar.current!.offsetTop || 0;
    contentBoxRefs.current.forEach((v, i) => {
      if (barSection.current) {
        console.info(v.offsetHeight, v.clientHeight, v.clientWidth, v);
        curDot += v.clientHeight / 2;
        progressDotLocations[i] = curDot + barSection.current.offsetTop;
        dotTops.push(curDot);
        curContent += v.clientHeight + 300;
        curDot += v.clientHeight / 2 + 300;
      }
    });
    dotTops.push(curDot);
    setDotTops(dotTops);
    setProgressDotLocaitons(progressDotLocations);
    setLoading(false);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);
    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  });

  useEffect(() => {
    const activeArr = progressDotLocations.map((v) => {
      return maxScrollY >= v;
    });
    setProgressDotActive(activeArr);
  }, [maxScrollY, progressDotLocations]);

  const scrollEventHandler = () => {
    bar.current &&
      barSection.current &&
      setProgressBarHeight(
        Math.max(
          progressBarHeight,
          window.scrollY -
            bar.current.offsetTop -
            barSection.current.offsetTop +
            window.innerHeight / 2
        )
      );
    setMaxScrollY(
      Math.max(maxScrollY, window.scrollY + window.innerHeight / 2)
    );
  };

  const contentBoxes = [
    <Fade right cascade key="content-box-0">
      <div
        ref={(ref) => ref && (contentBoxRefs.current[0] = ref)}
        className="content-box"
        style={{
          top: progressDots.current[0] && progressDots.current[0].offsetTop,
        }}
      >
        <div>2016-2020</div>
        <div>Bachelor of Science in Computer Science</div>
        <div>Rose-Hulman Institute of Technology</div>
        <img src={ImgUrls.rhit} alt="rhit" style={{ height: 400 }} />
      </div>
    </Fade>,
    <Fade right cascade key="content-box-1">
      <div
        className="content-box"
        ref={(ref) => ref && (contentBoxRefs.current[1] = ref)}
        style={{
          top: progressDots.current[1] && progressDots.current[1].offsetTop,
        }}
      >
        <div>Oct 2016 – Nov 2016</div>
        <div>
          <b>- [JAVA, OOD]</b>
        </div>
        <div>ARCADE Game Project</div>
        <div>
          &bull; Developed an imitation of centipede game of Boomer Man in JAVA
        </div>
        <div>
          &bull; Designed and developed the collision detection algorithm and
          the movement & split logic of the bomberman, blocks and enemies
        </div>
        <div>
          &bull; Designed the Graphical user interface (GUI), tested and
          debugged for the project
        </div>
        <img src={ImgUrls.csse220} alt="bommer-man" style={{ height: 400 }} />
      </div>
    </Fade>,
    <Fade right cascade key="content-box-2">
      <div
        ref={(ref) => ref && (contentBoxRefs.current[2] = ref)}
        className="content-box"
        style={{
          top: progressDots.current[2] && progressDots.current[2].offsetTop,
        }}
      >
        <div>Sep 2017 – Nov 2017</div>
        <div>
          <b>- [Data Structures, Algorithms]</b>
        </div>
        <div>BASIC Data Structure implementation</div>
        <div>
          &bull; Implemented an self-balanced tree data structure using JAVA
        </div>
        <div>
          &bull; Designed the concatenation and split of two self-balanced tree
        </div>
        <div>
          &bull; Developed the data structure to achieve time efficiency
          O(log(n)).
        </div>
      </div>
    </Fade>,
    <Fade right cascade key="content-box-3">
      <div
        ref={(ref) => ref && (contentBoxRefs.current[3] = ref)}
        className="content-box"
        style={{
          top: progressDots.current[3] && progressDots.current[3].offsetTop,
        }}
      >
        <div>Dec 2017 – Feb 2018</div>
        <div>
          <b>- [MS SQL]</b>
        </div>
        <div>RoseChat Project</div>
        <div>
          &bull; Developed and designed an Android app which supports online
          chat for all rose-hulman student based on MS SQL Server and Android
          Studio
        </div>
        <div>
          &bull; Implemented the sql stored procedure for acquiring user profile
          information, chat messages and user credentials
        </div>
        <img src={ImgUrls.rose_chat} alt="rose-chat" style={{ height: 400 }} />
      </div>
    </Fade>,
  ];

  return (
    <div className="main-container">
      <section className="opening ">
        <Fade left>
          <div className="text1">Hi, This Is Yifei.</div>
        </Fade>
        <Fade right>
          <div className="text2">
            嘿，叫我
            <br />
            李狗蛋 就好
          </div>
        </Fade>
      </section>
      <section className="experiences">
        <div ref={barSection} className="progress-bar">
          <Fade>
            <div>My Experiences</div>
          </Fade>
          <ProgressBar
            height={dotTops[dotTops.length - 1] + 400 || 10000}
            progressbarRef={bar}
            progressLength={progressBarHeight}
          ></ProgressBar>
          {!loading &&
            Array.from({ length: contentBoxes.length }).map((ele, index) => (
              <ProgressDot
                reff={(ref) => {
                  if (ref) {
                    progressDots.current[index] = ref;
                  }
                }}
                key={`dot-${index}`}
                className={cx('dot', `dot-${index}`)}
                active={progressDotActive[index]}
                top={dotTops[index]}
              ></ProgressDot>
            ))}
        </div>
        {!loading ? (
          <div className="content">
            {progressDotActive.map((v, i) => v && contentBoxes[i])}
          </div>
        ) : (
          <div className="content" style={{ visibility: 'hidden' }}>
            {contentBoxes}
          </div>
        )}
      </section>
    </div>
  );
}
