'use client';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    setInterval(() => {
      const days = Math.floor(
        (new Date().getTime() - new Date(1404060300000).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        ((new Date().getTime() - new Date(1404060300000).getTime()) %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        ((new Date().getTime() - new Date(1404060300000).getTime()) %
          (1000 * 60 * 60)) /
          (1000 * 60)
      );
      const seconds = Math.floor(
        ((new Date().getTime() - new Date(1404060300000).getTime()) %
          (1000 * 60)) /
          1000
      );
      setTimeSince(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }, []);
  const [timeSince, setTimeSince] = React.useState('');

  return (
    <>
      <svg
        className="bokeh"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10%" cy="85%" r="75%" />
        <circle cx="45%" cy="50%" r="15%" />
        <circle cx="85%" cy="35%" r="30%" />
        <circle cx="60%" cy="85%" r="20%" />
        <circle cx="45%" cy="50%" r="30%" />
        <circle cx="35%" cy="25%" r="20%" />
        <circle cx="90%" cy="-25%" r="35%" />
        <circle cx="-15%" cy="30%" r="30%" />
        <circle cx="65%" cy="85%" r="55%" />
        <circle cx="45%" cy="50%" r="20%" />
      </svg>

      <section>
        <div className="container">
          <h1>
            <a href="https://twitter.com/hashtag/NoEraPenal" target="_blank">
              #NoEraPenal
            </a>
          </h1>
          <h1>{timeSince}</h1>
        </div>
      </section>
    </>
  );
}
