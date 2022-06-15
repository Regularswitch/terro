import Link from 'next/link'

export default function Facebook({ color }) {
    return <Link href="https://www.facebook.com/terrosolovivo">
        <a target="_blank" rel="noreferrer">
            <svg
                viewBox="0 0 31 30"
                width={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#a)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.54 0c8.25 0 15 6.75 15 15 0 7.5-5.437 13.875-12.937 15V19.312h3.563l.75-4.312H17.79v-2.813c0-1.124.562-2.25 2.437-2.25h1.875v-3.75s-1.688-.375-3.375-.375c-3.375 0-5.625 2.063-5.625 5.813V15h-3.75v4.313h3.75v10.5C5.978 28.688.541 22.5.541 15c0-8.25 6.75-15 15-15Z"
                        fill={color} />
                </g>
                <defs>
                    <clipPath id="a">
                        <path
                            fill="#fff"
                            transform="translate(.54)"
                            d="M0 0h30v30H0z" />
                    </clipPath>
                </defs>
            </svg>
        </a>
    </Link>
}