export default function BgMenu({ color }) {
    return <svg
        width="3000"
        height="139"
        fill="none"
        viewBox="0 0 3000 139"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            filter: "drop-shadow(0 0 7px rgba(0,0,0,.3))"
        }}
        >
        <path
            d="M0 0h2999.934v100H426.942c-88.344 0-179.188 33.345-267.394 38.288-8.23.461-16.908.712-26.048.712C19.5 139 0 100 0 100Z"
            fill={color}
        />
    </svg>
}