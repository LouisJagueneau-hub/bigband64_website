import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause, FaVolumeUp, FaChevronDown } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

export default function MusicPlayer({ title, artist, duration, audioSrc }) {
    const waveformRef = useRef(null);
    const wavesurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [showVolume, setShowVolume] = useState(false);
    const [showSpeed, setShowSpeed] = useState(false);
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        wavesurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#fed7aa", // orange-200 (non joué)
            progressColor: "#f97316", // orange-500 (joué)
            cursorColor: "#f97316",
            barWidth: 2,
            barGap: 2,
            height: 20,
            responsive: true,
            normalize: true,
            partialRender: true,
        });

        wavesurferRef.current.load(audioSrc);
        wavesurferRef.current.setVolume(volume);

        return () => wavesurferRef.current.destroy();
    }, [audioSrc]);

    const togglePlayPause = () => {
        wavesurferRef.current.playPause();
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        wavesurferRef.current.setVolume(newVolume);
    };

    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
        wavesurferRef.current.setPlaybackRate(newSpeed);
        setShowSpeed(false);
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto border border-orange-100 relative w-full">
            {/* Infos */}
            <div className="mb-4 flex flex-col lg:flex-row lg:items-center md:gap-2">
                <h3 className="text-xl font-bold font-poppins text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500"> par {artist}</p>
            </div>

            {/* Détails */}
            <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1"><FaRegClock /> {duration}</span>
                
            </div>

            {/* 🎵 Waveform */}
            <div
                ref={waveformRef}
                className="mb-5 rounded-md overflow-hidden bg-orange-50 p-4"
            ></div>

            {/* Contrôles */}
            <div className="flex items-center gap-2 md:gap-5 relative">
                {/* ▶️ Lecture */}
                <button
                    onClick={togglePlayPause}
                    className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                    {isPlaying ? "Pause" : "Écouter"}
                </button>

                {/*  Volume */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowSpeed(false)
                            setShowVolume(!showVolume)
                        }}
                        className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
                    >
                        <FaVolumeUp />
                    </button>

                    {showVolume && (
                        <div className="absolute bg-white -top-20 left-1/2 -translate-x-1/2  p-2 rounded-lg shadow-md flex justify-center rotate-270 z-60">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="accent-orange-500 cursor-pointer transform w-24"
                            />
                        </div>
                    )}
                </div>

                {/* Vitesse */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setShowSpeed(!showSpeed)
                            setShowVolume(false)
                        }}
                        className="flex items-center gap-1 p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
                    >
                        <span>{speed}x</span>
                        <FaChevronDown className="text-xs" />
                    </button>

                    {showSpeed && (
                        <div className="absolute -top-45 left-1/2 -translate-x-1/2 bg-white border border-orange-100 p-2 rounded-lg shadow-md flex flex-col items-center gap-1 z-50">
                            {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => handleSpeedChange(s)}
                                    className={`px-3 py-1 text-sm rounded-md w-full ${speed === s
                                            ? "bg-orange-500 text-white"
                                            : "bg-orange-50 hover:bg-orange-100 text-orange-600"
                                        }`}
                                >
                                    {s}x
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
