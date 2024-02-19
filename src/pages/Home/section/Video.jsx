import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(false);
    }
    const handlePause = () => {
        videoRef.current.pause();
        setIsPlaying(true);
    }
    const handleVideoEnded = () => {
        videoRef.current.stop();
        setIsPlaying(false);
    }

    return (
        <section className="my-8 lg:my-20 px-2 lg:px-4 flex items-center mx-auto relative">
            <video ref={videoRef} onEnded={handleVideoEnded} className="h-full w-full rounded-lg">
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <motion.button
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 0.8 }}
                onClick={isPlaying ? handlePlay : handlePause}
                className="absolute z-10 top-1/2 left-1/2 flex items-center backdrop-blur-md justify-center transform fs-300 -translate-x-1/2 -translate-y-1/2 p-3 md:p-4 lg:p-8 bg-gray-200 rounded-full transition-opacity duration-200">
                {isPlaying ? <FiPlay fill="black" /> : <FiPause fill="black" />}
                {/* {isPlaying ? <FiPause fill="black" /> : <FiPlay fill="black" />} */}

            </motion.button>
        </section>
    );
}

