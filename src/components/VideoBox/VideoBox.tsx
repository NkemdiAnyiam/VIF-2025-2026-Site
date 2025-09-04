import React, { useState, useEffect, useRef } from 'react';

type VideoBoxProps = {
  /** String used for the iframe title attribute, loading text, and caption. */
  title: string;
  /** YouTube id. */
  videoId: string;
  /** If `true`, the {@link VideoBoxProps.title|title} prop is displayed below the video. */
  includeCaption?: boolean;
  /** If `true`, the scaling hover effect is disabled. */
  fixedScale?: boolean;
}

export function VideoBox(props: VideoBoxProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const spinnerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const spinnerEl = spinnerRef.current;
    if (!spinnerEl) { throw new Error('spinnerRef.current is null'); }

    const animation = new Animation(
      new KeyframeEffect(
        spinnerEl,
        [{ rotate: `z 360deg` }],
        {
          iterations: Infinity,
          duration: 2000,
        }
      )
    );
    animation.play();

    return () => {
      animation.cancel();
    };
  }, []);

  const onLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    setLoaded(true);
  }

  return (
    <div className={`video-box${!loaded ? ' video-box--loading' : ''}`}>
      {
        !loaded &&
        <div className="video-box__loading-notification">
          <span ref={spinnerRef} className="spinner"></span>
          <p className="video-box__loading-text">
            Loading <a className="video-box__link link" href={`https://www.youtube.com/watch?v=${props.videoId}`} target="_blank" rel="noreferrer">{props.title}</a>
          </p>
        </div>
      }

      <div className={`video-box__video-container${!loaded ? ' video-box__video-container--loading' : ''}`}>
        <iframe
          ref={iframeRef}
          className={`video-box__video${!loaded ? ' video-box__video--loading' : ''}${props.fixedScale ? ' video-box__video--fixed-scale' : ''}`}
          title={props.title}
          allowFullScreen
          onLoad={onLoad}
          src={`https://www.youtube.com/embed/${props.videoId}`.replace('youtube', 'youtube-nocookie')+'?autoplay=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com&theme=dark&color=red'}
        >
        </iframe>
        {props.includeCaption && <p className="video-box__caption">{props.title}</p>}
      </div>
    </div>
  );
}
