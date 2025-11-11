import { useState, useEffect } from "react";

const ClickPopup = () => {
    
    const [showPopup, setShowPopup] = useState(false);

    // Show popup
    useEffect(() => {
        setShowPopup(true);
        const timer = setTimeout(() => setShowPopup(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPopup && (
                <div className="absolute z-0 top-1/6 sm:top-1/4 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-base px-3 py-1 border-2 border-slate-900 rounded-full shadow-lg animate-fade-in">
                    Tap any for more info <img className="inline max-w-4 sm:max-w-6" src="/clickpointer.svg" alt="Popup to request user to click on any book" />
                </div>
            )}
        </>
    );
}

export default ClickPopup