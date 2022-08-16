import * as React from "react"
import "./Button.scss"

const SvgComponent = (props) => (
  <svg viewBox="0 0 242 109" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g className="ears">
      <g className="ear-left">
        <ellipse
          className="ear-left-outer"
          transform="rotate(-20.099 48.548 19.1)"
          cx={48.5}
          cy={19.1}
          rx={11.4}
          ry={13.8}
        />
        <ellipse
          className="ear-left-inner"
          transform="rotate(-20.099 47.34 19.705)"
          cx={47.3}
          cy={19.7}
          rx={7.3}
          ry={11.2}
        />
      </g>
      <g className="ear-right">
        <ellipse
          className="ear-right-outer"
          transform="rotate(-69.904 189.094 18.724)"
          cx={189.1}
          cy={18.7}
          rx={14.4}
          ry={11.9}
        />
        <ellipse
          className="ear-right-inner"
          transform="rotate(-69.904 190.427 19.321)"
          cx={190.4}
          cy={19.3}
          rx={11.7}
          ry={7.7}
        />
      </g>
    </g>
    <g className="eyes">
      <defs>
        <clipPath id="a">
          <path d="M175 25c0-11-7.8-20-17.5-20S140 14 140 25c0 .7 0 1.3.1 2h34.8c.1-.7.1-1.3.1-2z" />
        </clipPath>
      </defs>
      <g className="eye-right">
        <path
          className="eye-right-outer"
          d="M174.9 27H186v-1c0-14.4-11.6-26-26-26s-26 11.6-26 26v1h40.9z"
        />
        <path
          className="eye-right-inner"
          d="M175 25c0-11-7.8-20-17.5-20S140 14 140 25c0 .7 0 1.3.1 2h34.8c.1-.7.1-1.3.1-2z"
        />
        <g clipPath="url(#a)">
          <circle className="eye-right-pupil" cx={158} cy={18} r={5} />
        </g>
      </g>
      <defs>
        <clipPath id="b">
          <path d="M97 25c0-11-7.8-20-17.5-20S62 14 62 25c0 .7 0 1.3.1 2h34.8c.1-.7.1-1.3.1-2z" />
        </clipPath>
      </defs>
      <g className="eye-left">
        <path
          className="eye-left-outer"
          d="M96.9 27h6.1v-1c0-14.4-11.6-26-26-26S51 11.6 51 26v1h45.9z"
        />
        <path
          className="eye-left-inner"
          d="M97 25c0-11-7.8-20-17.5-20S62 14 62 25c0 .7 0 1.3.1 2h34.8c.1-.7.1-1.3.1-2z"
        />
        <g clipPath="url(#b)">
          <circle className="eye-left-pupil" cx={80} cy={17.7} r={5} />
        </g>
      </g>
    </g>
    <g className="nostrils">
      <g className="nostril-right">
        <ellipse
          className="nostril-right-outer"
          cx={130.5}
          cy={27.5}
          rx={6.5}
          ry={5.5}
        />
        <circle className="nostril-right-inner" cx={130} cy={28} r={4} />
      </g>
      <g className="nostril-left">
        <ellipse
          className="nostril-left-outer"
          cx={106.5}
          cy={27.5}
          rx={6.5}
          ry={5.5}
        />
        <circle className="nostril-left-inner" cx={107} cy={28} r={4} />
      </g>
    </g>
    <path
      className="body"
      d="M218 98H24C10.8 98 0 87.2 0 74V51c0-13.2 10.8-24 24-24h194c13.2 0 24 10.8 24 24v23c0 13.2-10.8 24-24 24z"
    />
    <g className="freckles">
      <circle className="freckle" cx={13.7} cy={41.4} r={1.6} />
      <circle className="freckle" cx={20.1} cy={44.7} r={1.6} />
      <circle className="freckle" cx={19.6} cy={37.8} r={1.6} />
    </g>
    <defs>
      <clipPath id="c">
        <path d="M218 98H24C10.8 98 0 87.2 0 74V51c0-13.2 10.8-24 24-24h194c13.2 0 24 10.8 24 24v23c0 13.2-10.8 24-24 24z" />
      </clipPath>
    </defs>
    <g className="mouth" clipPath="url(#c)">
      <g className="mouth-pieces">
        <path
          className="mouth-back"
          d="m23.6 168.2-3-56.1c0-7.8 6.4-14.1 14.1-14.1h172.4c7.8 0 14.1 6.4 14.1 14.1l-3 56.1"
        />
        <path
          className="tongue"
          d="M174.9 168.2c-7.3-5-24.5-9.9-54.8-9.9s-48 5.1-54.8 9.9"
        />
      </g>
    </g>
    <g className="teeth">
      <path
        className="tooth-left"
        d="M115 97.9v7.5c0 2-1.7 3.6-3.6 3.6H89.7c-2 0-3.6-1.7-3.6-3.6v-7.5H115z"
      />
      <path
        className="tooth-right"
        d="M154 97.9v7.5c0 2-1.7 3.6-3.6 3.6h-21.7c-2 0-3.6-1.7-3.6-3.6v-7.5H154z"
      />
    </g>
  </svg>
)

export default SvgComponent
