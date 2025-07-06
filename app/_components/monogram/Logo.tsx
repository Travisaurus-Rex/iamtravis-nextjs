export default function Logo() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      role="img"
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Travis Adams monogram</title>
      <defs>
        <linearGradient id="taGradient" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ed85ca" />
          <stop offset="100%" stopColor="#78c6f2" />
        </linearGradient>
      </defs>

      {/* Optional circle border */}
      <circle
        cx="48"
        cy="48"
        r="44"
        stroke="url(#taGradient)"
        strokeWidth="4"
        fill="none"
      />

      {/* Monogram */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="40"
        fill="url(#taGradient)"
      >
        TA
      </text>
    </svg>
  );
}
