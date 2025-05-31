import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Info } from 'lucide-react';

interface PageSpeedScore {
  category: string;
  score: number;
  description: string;
}

interface PageSpeedIndicatorProps {
  scores: PageSpeedScore[];
  reportUrl: string;
}

const PageSpeedIndicator: React.FC<PageSpeedIndicatorProps> = ({ scores, reportUrl }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStrokeColor = (score: number) => {
    if (score >= 90) return '#4ade80';
    if (score >= 50) return '#fb923c';
    return '#f87171';
  };

  const getGlowColor = (score: number) => {
    if (score >= 90) return 'shadow-green-500/30';
    if (score >= 50) return 'shadow-orange-500/30';
    return 'shadow-red-500/30';
  };

  return (
    <div 
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-violet-900/20 rounded-3xl p-8 mb-8 border border-violet-500/10 shadow-2xl shadow-violet-900/20 backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent rounded-3xl"></div>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative text-xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-gray-300 text-transparent bg-clip-text"
      >
        PageSpeed Insights
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {scores.map((score, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="flex flex-col items-center">
              <div className={`relative rounded-full ${getGlowColor(score.score)} shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
                <svg className="w-28 h-28" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1f2e" />
                      <stop offset="100%" stopColor="#0f1117" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill={`url(#gradient-${index})`}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2a2f3c"
                    strokeWidth="8"
                    className="transition-all duration-300"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={getStrokeColor(score.score)}
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: score.score / 100 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                    transform="rotate(-90 50 50)"
                    strokeDasharray="283"
                    filter="url(#glow)"
                    className="transition-all duration-300"
                  />
                  <motion.text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy="7"
                    className={`text-2xl font-bold ${getScoreColor(score.score)}`}
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  >
                    {score.score}
                  </motion.text>
                </svg>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                className="mt-4 text-sm font-medium text-gray-300"
              >
                {score.category}
              </motion.p>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-full mb-2 p-4 bg-gray-900/95 backdrop-blur-xl rounded-xl text-sm text-gray-300 w-48 text-center shadow-xl transform -translate-y-2 group-hover:translate-y-0 border border-gray-700/30">
                {score.description}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="border-8 border-transparent border-t-gray-900/95"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.a
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        href={reportUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-8 text-violet-400 hover:text-violet-300 transition-all duration-300 group"
      >
        <Info className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
        <span className="relative">
          View full PageSpeed report
          <span className="absolute bottom-0 left-0 w-full h-px bg-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default PageSpeedIndicator;