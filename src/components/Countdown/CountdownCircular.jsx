export const CountdownCircular = ({ percentage, strokeColor  }) => {
  const size = 150;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg width={size} height={size}>
      <circle
        stroke="darkgray"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={center}
        cy={center}
      />
      <circle
        stroke="lightgreen"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - percentage / 100)}
        r={radius}
        cx={center}
        cy={center}
      />
    </svg>
  );
};

