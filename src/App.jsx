
import React, { useRef, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function deleteTimer() {
    stopTimer();
    setSeconds(0);
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090f] px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-[#12121c] p-8 text-center shadow-2xl shadow-purple-950/30">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 2.5" />
            <path d="M9 2h6" />
            <path d="M12 2v3" />
          </svg>
        </div>

        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Focus Timer
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Stay focused. Make every second count.
        </p>

        <div className="mb-8 rounded-2xl border border-white/5 bg-[#09090f] px-4 py-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
            Time elapsed
          </p>

          <div className="font-mono text-6xl font-bold tracking-wider text-white sm:text-7xl">
            {String(minutes).padStart(2, "0")}:
            {String(remainingSeconds).padStart(2, "0")}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className={`h-2 w-2 rounded-full ${
              intervalRef.current !== null
                ? "animate-pulse bg-green-400"
                : "bg-gray-600"
            }`} />
            <span className="text-xs text-gray-400">
              {intervalRef.current !== null ? "Timer running" : "Timer stopped"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={startTimer}
            className="rounded-xl bg-purple-600 px-3 py-3 font-semibold transition hover:bg-purple-500 active:scale-95"
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 font-semibold transition hover:bg-white/10 active:scale-95"
          >
            Stop
          </button>

          <button
            onClick={deleteTimer}
            className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-3 font-semibold text-red-400 transition hover:bg-red-500/20 active:scale-95"
          >
            Reset
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          Built with React Hooks
        </p>
      </div>
    </div>
  );
}

export default App;
