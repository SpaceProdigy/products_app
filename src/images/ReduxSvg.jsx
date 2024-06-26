export const ReduxSvg = ({ color, width, height }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '30.000000pt'}
      height={height ?? '23.000000pt'}
      viewBox="0 0 30.000000 23.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,23.000000) scale(0.100000,-0.100000)"
        fill={color ?? '#000000'}
        stroke="none"
      >
        <path
          d="M114 199 c-11 -13 -18 -35 -18 -57 1 -47 21 -95 35 -87 7 5 4 14 -8
27 -21 23 -24 88 -4 112 21 25 57 19 81 -11 20 -26 20 -27 9 -3 -22 46 -63 54
-95 19z"
          strokeWidth="3" // Здесь установите толщину линии
        />
        <path
          d="M130 141 c0 -5 16 -9 35 -8 93 3 133 -110 41 -114 -29 -2 -29 -2 -4
-6 98 -15 85 111 -13 131 -43 8 -59 8 -59 -3z"
          strokeWidth="3" // Здесь установите толщину линии
        />
        <path
          d="M61 102 c-28 -52 -4 -92 53 -92 28 0 110 66 100 81 -9 16 -24 10 -24
-10 0 -43 -88 -79 -118 -49 -15 15 -15 51 0 66 6 6 9 14 6 18 -4 3 -11 -3 -17
-14z"
          strokeWidth="3" // Здесь установите толщину линии
        />
      </g>
    </svg>
  );
};
