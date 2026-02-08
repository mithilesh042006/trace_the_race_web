import React, { useState, useEffect } from 'react';

const RegistrationProgress = ({ maxRegistrations = 30, refreshInterval = 30000 }) => {
    const [currentRegistrations, setCurrentRegistrations] = useState(0);
    const [animatedCount, setAnimatedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(null);

    const percentage = Math.min((currentRegistrations / maxRegistrations) * 100, 100);
    const spotsLeft = Math.max(maxRegistrations - currentRegistrations, 0);
    const isFull = currentRegistrations >= maxRegistrations;

    // Fetch registration count from Netlify Function
    const fetchRegistrationCount = async () => {
        try {
            const response = await fetch('/api/registration-count');
            if (response.ok) {
                const data = await response.json();
                setCurrentRegistrations(data.count || 0);
                setLastUpdated(new Date());
            }
        } catch (error) {
            console.error('Failed to fetch registration count:', error);
            // Keep current count on error
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch on mount and set up polling
    useEffect(() => {
        fetchRegistrationCount();

        // Poll for updates
        const interval = setInterval(fetchRegistrationCount, refreshInterval);

        return () => clearInterval(interval);
    }, [refreshInterval]);

    // Animate the count when it changes
    useEffect(() => {
        const duration = 1500;
        const steps = 30;
        const increment = currentRegistrations / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= currentRegistrations) {
                setAnimatedCount(currentRegistrations);
                clearInterval(timer);
            } else {
                setAnimatedCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [currentRegistrations]);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-black/60 to-pink-900/20 rounded-2xl p-6 md:p-8 border border-pink-500/20 backdrop-blur-sm shadow-xl shadow-pink-500/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">📊</span>
                        <h3 className="text-pink-300 text-sm md:text-base font-semibold tracking-wide">
                            REGISTRATION STATUS
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        {isLoading ? (
                            <span className="w-4 h-4 border-2 border-pink-400/30 border-t-pink-400 rounded-full animate-spin"></span>
                        ) : (
                            <>
                                {!isFull && (
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                )}
                                <span className={`text-xs font-medium ${isFull ? 'text-red-400' : 'text-green-400'}`}>
                                    {isFull ? 'FULL' : 'LIVE'}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative mb-4">
                    <div className="h-4 bg-black/40 rounded-full overflow-hidden border border-white/10">
                        <div
                            className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{
                                width: `${percentage}%`,
                                background: isFull
                                    ? 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)'
                                    : 'linear-gradient(90deg, #ff1493 0%, #800040 50%, #ff1493 100%)',
                                backgroundSize: '200% 100%',
                                animation: !isFull ? 'shimmer 2s infinite' : 'none'
                            }}
                        >
                            {/* Shimmer effect */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    animation: 'shimmerMove 2s infinite'
                                }}
                            />
                        </div>
                    </div>

                    {/* Tick marks */}
                    <div className="absolute top-0 left-0 right-0 h-4 flex justify-between px-1 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-px h-full bg-white/10" />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">
                            {isLoading ? '...' : animatedCount}
                            <span className="text-pink-400 text-lg md:text-xl">/{maxRegistrations}</span>
                        </div>
                        <div className="text-xs text-white/60">Teams Registered</div>
                    </div>

                    <div className="h-12 w-px bg-white/10"></div>

                    <div className="text-center">
                        <div className={`text-3xl md:text-4xl font-bold ${spotsLeft <= 5 ? 'text-red-400' : spotsLeft <= 10 ? 'text-yellow-400' : 'text-green-400'}`}>
                            {isLoading ? '...' : spotsLeft}
                        </div>
                        <div className="text-xs text-white/60">Spots Left</div>
                    </div>

                    <div className="h-12 w-px bg-white/10"></div>

                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-pink-400">
                            {isLoading ? '...' : Math.round(percentage)}%
                        </div>
                        <div className="text-xs text-white/60">Filled</div>
                    </div>
                </div>

                {/* Warning message when almost full */}
                {!isLoading && spotsLeft <= 10 && spotsLeft > 0 && (
                    <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-center">
                        <span className="text-yellow-400 text-sm">
                            ⚠️ Hurry! Only {spotsLeft} spot{spotsLeft !== 1 ? 's' : ''} remaining!
                        </span>
                    </div>
                )}

                {/* Full message */}
                {!isLoading && isFull && (
                    <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                        <span className="text-red-400 text-sm">
                            🚫 Registrations are now closed. All spots have been filled!
                        </span>
                    </div>
                )}

                {/* Last updated */}
                {lastUpdated && (
                    <div className="mt-3 text-center">
                        <span className="text-xs text-white/30">
                            Last updated: {lastUpdated.toLocaleTimeString()}
                        </span>
                    </div>
                )}
            </div>

            {/* CSS Keyframes */}
            <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes shimmerMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

export default RegistrationProgress;
