import React from "react";

interface LogoPartProps {
  className?: string;
}

function LogoPart({ className }: LogoPartProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 271.75 243.04"
      xmlSpace="preserve"
      fill="currentColor"
    >
      <g>
        <path
          d="M177.86,237.1c-6.54,0.43-13.65-2.34-20.69-5.21c-14.87-6.06-29.53-5.6-44.27,0.61
  c-24.59,10.36-51.19,1.86-63.25-20c-13.38-24.26-5.22-53.2,19.13-66.75c12.29-6.84,22.15-16.02,30.99-26.94
  c11.6-14.34,32.7-21.04,52.95-14.19c9.67,3.27,17.42,8.89,23.56,17.29c8.79,12.03,21.41,19.82,33.3,28.44
  c15.04,10.91,20.76,26.51,18.45,44.48c-2.34,18.25-12.76,31.18-29.68,38.64C192.27,236.16,185.8,237.21,177.86,237.1z
  M67.79,187.23c0.35,10.62,4.52,19.59,13.73,25.85c2.24,1.53,4.98,3.12,7.09-0.03c1.84-2.74-0.12-4.72-2.2-6.38
  c-11.47-9.19-13.64-19.24-6.71-31.87c1.38-2.51,2.17-4.94-0.57-6.61c-2.75-1.68-4.66,0.22-6.22,2.51
  C69.57,175.6,68.11,181.05,67.79,187.23z"
        />
        <path
          d="M64.47,36.63c0.18-8.55,0.77-15.03,3.6-21.2C75.46-0.68,90.2-4.66,104.5,5.76
  c18.65,13.58,28.9,46.22,21.51,68.45c-6.49,19.51-24.27,24.61-39.69,10.99C71.24,71.87,65.4,54.28,64.47,36.63z"
        />
        <path
          d="M207.3,34.43c-0.58,18.51-6.2,35.15-19.38,48.53c-7.13,7.24-15.75,12.12-26.41,8.72
  c-10.27-3.27-15.21-11.57-16.84-21.53c-4.03-24.67,2.48-46.23,21.32-63.07c14.61-13.05,33.07-7.36,39,11.36
  C206.64,23.64,207.21,28.98,207.3,34.43z"
        />
        <path
          d="M50.38,135.62c-11.66-0.84-22.19-6.38-30.87-16.3c-6.62-7.57-12.79-15.26-16.19-24.85
  c-2.45-6.9-4.1-13.89-2.92-21.31c2.11-13.24,11.15-20.42,24.56-19.26c10.96,0.95,19.85,6.54,27.6,13.71
  c11.2,10.35,19.03,22.94,20.77,38.37c1.41,12.6-1.84,23.27-13.06,28.03C57.48,135.2,54.68,135.2,50.38,135.62z"
        />
        <path
          d="M221.51,135.56c-14.29,0.11-23.35-9.22-23.28-23.84c0.1-18.86,9.21-33.5,22.85-45.62
  c7.43-6.6,15.82-11.45,26.13-12.11c14.51-0.94,24.39,7.93,24.55,22.52c0.17,15.95-7.43,28.62-17.23,40.47
  c-7.33,8.86-16.2,15.01-27.34,17.81C225.08,135.31,222.86,135.38,221.51,135.56z"
        />
      </g>
    </svg>
  );
}

export default LogoPart;