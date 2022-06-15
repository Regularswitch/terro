export default function Menu({ color }) {
    return <svg
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 4H0V0h30v4ZM30 14H0v-4h30v4ZM30 24H0v-4h30v4Z"
            fill={color || "#000000"} />
    </svg>
}