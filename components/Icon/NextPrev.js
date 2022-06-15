export default function NextPrev({color}) {
    return <svg
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="30"
            cy="30"
            r="29.5"
            transform="rotate(-180 30 30)"
            stroke={color} 
        />
        <path
            d="M35.714 44.285 21.43 30l14.285-14.286"
            stroke={color}
            strokeWidth="2"
        />
    </svg>
}