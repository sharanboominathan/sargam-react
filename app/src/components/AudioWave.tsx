import React from 'react';

interface AudioWaveProps {
  className?: string;
  barClassName?: string;
  animated?: boolean;
}

export const AudioWave: React.FC<AudioWaveProps> = ({
  className = '',
  barClassName = 'bg-white',
  animated = true,
}) => {
  const delays = ['0s', '0.2s', '0.4s', '0.1s'];
  const heights = ['h-2', 'h-4', 'h-3', 'h-5'];

  return (
    <div className={`flex items-end gap-[3px] h-5 ${className}`}>
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${h} ${barClassName} ${
            animated ? 'animate-wave' : ''
          }`}
          style={{ animationDelay: delays[i] }}
        />
      ))}
    </div>
  );
};

export default AudioWave;
