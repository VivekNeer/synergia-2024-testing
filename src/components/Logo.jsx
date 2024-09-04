import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Logo() {
  const pathsRef = useRef([]);

  useEffect(() => {
    anime({
      targets: pathsRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: anime.stagger(50),
    });
  }, []);

  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352.01 217.72"
      className="w-96"
    >
      <defs>
        <style>
          {`.cls-1 {
        <!-- fill: url(#linear-gradient); -->
      }

      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-8 {
        stroke-width: 2px;
        stroke: #fff;
      }

      .cls-2 {
        <!-- fill: url(#linear-gradient-6); -->
      }

      .cls-3 {
        <!-- fill: url(#linear-gradient-5); -->
      }

      .cls-4 {
        <!-- fill: url(#linear-gradient-2); -->
      }

      .cls-5 {
        <!-- fill: url(#linear-gradient-7); -->
      }

      .cls-6 {
        <!-- fill: url(#linear-gradient-3); -->
      }

      .cls-7 {
        fill: #000;
        stroke-width:2px;
        stroke: #fff;
      }

      .cls-8 {
        <!-- fill: url(#linear-gradient-4); -->
      }`}
        </style>
        <linearGradient
          id="linear-gradient"
          x1="255.24"
          y1="73.29"
          x2="317.1"
          y2="73.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#cc01ff" />
          <stop offset="1" stopColor="#0030ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="268.84"
          y1="76.14"
          x2="306.56"
          y2="76.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff1f00" />
          <stop offset="1" stopColor="#cc01ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="265.54"
          y1="76.14"
          x2="310.44"
          y2="76.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0090d5" />
          <stop offset="1" stopColor="#ff1f00" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="233.98"
          y1="80.95"
          x2="338.35"
          y2="80.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5555c6" />
          <stop offset="1" stopColor="#0090d5" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="232.93"
          y1="76.8"
          x2="339.41"
          y2="76.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ef5a24" />
          <stop offset="1" stopColor="#5555c6" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="251.74"
          y1="76.14"
          x2="296.79"
          y2="76.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f1b01b" />
          <stop offset="1" stopColor="#ef5a24" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="220.33"
          y1="76.14"
          x2="352.01"
          y2="76.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#53c373" />
          <stop offset="1" stopColor="#f1b01b" />
        </linearGradient>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path
            ref={(el) => (pathsRef.current[0] = el)}
            className="cls-7"
            d="M53.69,89.09h-26.49c-1.71,0-3.29.13-4.74.4-1.45.27-2.72.69-3.81,1.29-1.09.59-1.95,1.34-2.57,2.26-.62.92-.93,1.99-.93,3.23s.41,2.38,1.24,3.23c.83.86,1.95,1.58,3.37,2.17,1.42.59,3.07,1.11,4.96,1.55,1.89.44,3.9.87,6.03,1.29,3.01.59,6.11,1.27,9.3,2.04,3.19.77,6.1,1.88,8.73,3.32,2.63,1.45,4.78,3.32,6.47,5.63,1.68,2.3,2.53,5.29,2.53,8.95,0,3.37-.77,6.23-2.3,8.6-1.54,2.36-3.59,4.3-6.16,5.8-2.57,1.51-5.55,2.61-8.95,3.32-3.4.71-6.93,1.06-10.59,1.06H0v-11.78h31.19c1.77,0,3.4-.13,4.87-.4,1.48-.27,2.78-.66,3.9-1.2,1.12-.53,1.99-1.21,2.61-2.04.62-.83.93-1.83.93-3.01,0-1.36-.43-2.49-1.28-3.41-.86-.92-2.01-1.7-3.46-2.35-1.45-.65-3.13-1.2-5.05-1.64-1.92-.44-3.94-.9-6.07-1.37-3.01-.65-6.08-1.39-9.21-2.21-3.13-.83-6-1.96-8.59-3.41-2.6-1.45-4.73-3.32-6.38-5.63-1.65-2.3-2.48-5.26-2.48-8.86,0-3.25.69-6.04,2.08-8.37,1.39-2.33,3.26-4.25,5.63-5.76,2.36-1.51,5.08-2.61,8.15-3.32,3.07-.71,6.26-1.09,9.57-1.15l27.29.09v11.7Z"
          />
          <path
            ref={(el) => (pathsRef.current[1] = el)}
            className="cls-7"
            d="M76.82,79.08l16.97,26.85,16.97-26.85h14.97l-25.52,37.04v24.99h-12.85v-24.99l-25.52-37.04h14.97Z"
          />
          <path
            ref={(el) => (pathsRef.current[2] = el)}
            className="cls-7"
            d="M181.64,140.75c-6.44-6.56-12.43-13.25-17.99-20.07-5.55-6.82-10.52-13.39-14.89-19.71v40.14h-12.85v-62.02h13.2l.09-.09c5.57,9.04,11.53,17.72,17.9,26.05,6.36,8.33,13.22,16.33,20.56,24.01l.09-4.08v-45.9h12.85v62.02h-.71"
          />
          <path
            ref={(el) => (pathsRef.current[3] = el)}
            className="cls-7"
            d="M54.67,206.74v10.99H1.77v-62.02h52.28v10.99H14.62v14.53h33.58v10.99H14.62v14.53h40.05Z"
          />
          <path
            ref={(el) => (pathsRef.current[4] = el)}
            className="cls-7"
            d="M65.92,155.7h35.71c3.07.06,5.8.65,8.2,1.77,2.39,1.12,4.39,2.57,5.98,4.34,1.6,1.77,2.8,3.78,3.63,6.03.83,2.25,1.24,4.55,1.24,6.91,0,1.89-.27,3.75-.8,5.58-.53,1.83-1.33,3.54-2.39,5.14-1.06,1.59-2.39,3.06-3.99,4.39-1.6,1.33-3.46,2.38-5.58,3.15l18.34,24.71h-16.13l-16.08-23.92h-15.29v23.92h-12.85v-62.02ZM78.77,182.81h19.29c1.54,0,2.89-.22,4.04-.67,1.15-.45,2.1-1.06,2.84-1.84.74-.78,1.3-1.64,1.69-2.6.38-.96.58-1.94.58-2.96s-.19-2-.58-2.96c-.38-.96-.95-1.82-1.69-2.6-.74-.78-1.69-1.39-2.84-1.84-1.15-.45-2.5-.67-4.04-.67h-19.29v16.13Z"
          />
          <path
            ref={(el) => (pathsRef.current[5] = el)}
            className="cls-7"
            d="M189.08,183.26v34.47h-29.42c-4.9-.18-9.22-1.17-12.94-2.97-3.72-1.8-6.85-4.15-9.39-7.04-2.54-2.89-4.46-6.16-5.76-9.79-1.3-3.63-1.95-7.37-1.95-11.21s.65-7.5,1.95-11.16c1.3-3.66,3.22-6.94,5.76-9.83,2.54-2.89,5.67-5.24,9.39-7.04,3.72-1.8,8.03-2.79,12.94-2.97h28.26v10.99h-27.82c-2.83,0-5.32.58-7.44,1.73-2.13,1.15-3.9,2.66-5.32,4.52-1.42,1.86-2.48,4-3.19,6.42-.71,2.42-1.06,4.87-1.06,7.35s.35,4.9,1.06,7.27c.71,2.36,1.76,4.47,3.15,6.34,1.39,1.86,3.12,3.38,5.18,4.56,2.07,1.18,4.49,1.8,7.27,1.86h17.1v-14.44h-14.35v-9.04h26.58Z"
          />
          <path
            ref={(el) => (pathsRef.current[6] = el)}
            className="cls-7"
            d="M201.93,174.75l12.85,8.06v34.91h-12.85v-42.97Z"
          />
          <path
            ref={(el) => (pathsRef.current[7] = el)}
            className="cls-7"
            d="M266.43,154.81l28.53,62.91h-13.65l-4.25-9.3-5.05-10.99-12.49-27.29-21.71,47.58h-13.64l28.53-62.91h13.73Z"
          />
          <path
            ref={(el) => (pathsRef.current[8] = el)}
            className="cls-7"
            d="M281.07,210.51c-51.32-23.48-86.56-55.35-107.08-77.94-22.34-24.59-32.42-43.49-32.84-44.28l10.83-5.73c.1.18,9.96,18.6,31.38,42.1,19.72,21.64,53.56,52.17,102.81,74.7l-5.1,11.14Z"
          />
        </g>
        <g>
          <path
            ref={(el) => (pathsRef.current[9] = el)}
            className="cls-1"
            d="M255.48,69.25c-.5-.87-.2-1.98.67-2.48,21.22-12.25,48.46-4.96,60.71,16.27.5.87.2,1.98-.67,2.48s-1.98.2-2.48-.67c-11.25-19.49-36.26-26.19-55.75-14.94-.87.5-1.98.2-2.48-.67Z"
          />
          <path
            ref={(el) => (pathsRef.current[10] = el)}
            className="cls-4"
            d="M268.97,42.88c.41-1.12,1.65-1.7,2.77-1.29,27.41,9.98,41.6,40.4,31.62,67.81-.41,1.12-1.65,1.7-2.77,1.29-1.12-.41-1.7-1.65-1.29-2.77,9.16-25.17-3.86-53.11-29.04-62.27-1.12-.41-1.7-1.65-1.29-2.77Z"
          />
          <path
            ref={(el) => (pathsRef.current[11] = el)}
            className="cls-6"
            d="M303.34,35.01c1.34-.49,2.81.2,3.3,1.54,11.88,32.64-5.01,68.85-37.65,80.73-1.34.49-2.81-.2-3.3-1.54s.2-2.81,1.54-3.3c29.97-10.91,45.47-44.16,34.57-74.13-.49-1.34.2-2.81,1.54-3.3Z"
          />
          <path
            ref={(el) => (pathsRef.current[12] = el)}
            className="cls-8"
            d="M336.82,60.33c1.47.85,1.97,2.72,1.12,4.19-20.67,35.81-66.62,48.12-102.43,27.45-1.47-.85-1.97-2.72-1.12-4.19s2.72-1.97,4.19-1.12c32.88,18.98,75.07,7.68,94.05-25.2.85-1.47,2.72-1.97,4.19-1.12Z"
          />
          <path
            ref={(el) => (pathsRef.current[13] = el)}
            className="cls-3"
            d="M339.35,110.23c.35,1.99-.98,3.88-2.96,4.23-48.47,8.55-94.86-23.94-103.41-72.41-.35-1.99.98-3.88,2.96-4.23,1.99-.35,3.88.98,4.23,2.96,7.85,44.51,50.45,74.34,94.96,66.49,1.99-.35,3.88.98,4.23,2.96Z"
          />
          <path
            ref={(el) => (pathsRef.current[14] = el)}
            className="cls-2"
            d="M295.78,150.73c-1.54,1.84-4.28,2.08-6.12.54-44.89-37.67-50.76-104.83-13.1-149.72,1.54-1.84,4.28-2.08,6.12-.54,1.84,1.54,2.08,4.28.54,6.12-34.59,41.22-29.19,102.89,12.03,137.47,1.84,1.54,2.08,4.28.54,6.12Z"
          />
          <path
            ref={(el) => (pathsRef.current[15] = el)}
            className="cls-5"
            d="M225.5,141.98c-2.86,0-5.17-2.32-5.17-5.17,0-69.76,56.75-126.51,126.51-126.51,2.86,0,5.17,2.32,5.17,5.17s-2.32,5.17-5.17,5.17c-64.05,0-116.17,52.11-116.17,116.17,0,2.86-2.32,5.17-5.17,5.17Z"
          />
        </g>
      </g>
    </svg>
  );
}
