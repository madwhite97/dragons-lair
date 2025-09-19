import React from 'react';

const ThreadsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.447 2 12c0 4.237 2.617 7.852 6.288 9.24" />
        <path d="M16.5 12x0-2.485-2.015-4.5-4.5-4.5S7.5 9.515 7.5 12c0 2.485 2.015 4.5 4.5 4.5" />
    </svg>
);

export default ThreadsIcon;