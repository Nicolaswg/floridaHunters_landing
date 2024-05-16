import { TypeAnimation } from 'react-type-animation';

interface TypeAnimationProps {
  substring?: string;
  sequence?: string[];
  speed?: number;
}

export const TypingAnimationComponent = ({ substring, sequence, speed }: TypeAnimationProps) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${substring} Comprehensive development`,
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        `${substring} High quality training`,
        2000,
        `${substring} Competitive training`,
        2000,
        `${substring} Sporting success`,
        2000
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '1rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};