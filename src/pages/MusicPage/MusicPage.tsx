import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from '../../assets/deep-strange-whoosh-183845.mp3';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import styles from './MusicPage.module.css';

const sounds = [
  'assets/bass1.wav',
  'assets/bass2.wav',
  'assets/fx1.wav',
  'assets/fx2.wav',
  'assets/melody1.wav',
  'assets/melody2.wav',
  'assets/melody3.wav',
  'assets/melody4.wav',
  'assets/melody5.wav',
  'assets/melody6.wav',
  'assets/percussion1.wav',
  'assets/percussion2.wav',
  'assets/percussion3.wav',
  'assets/percussion4.wav',
  'assets/synth.wav',
  'assets/topsecret.mp3',
];
const useSoundPlayer = () => {
  const [play] = useSound('', { volume: 1 }); // Initialize with an empty sound

  const playBoard = (soundFile: string) => {
    play({ sound: soundFile });
  };

  return { playBoard };
};
export const MusicPage = () => {
  const [playIntro] = useSound(intro);
  const keyCount = 16;
  const keyArray = Array.from({ length: keyCount }, (_, index) => index + 1);
  useEffect(() => {
    playIntro();
  }, [playIntro]);
  const { playBoard } = useSoundPlayer();
  const handleButtonClick = (index: number) => {
    const soundToPlay = sounds[index];
    playBoard(soundToPlay);
  };

  return (
    <div className={styles.keyWrapper}>
      <img className={styles.image} src="public/codelex.svg" alt="codelex" />
      <div className={styles.asd}>
        {keyArray.map((index) => (
          <PlayButton key={index} soundFile={sounds[index]} onClick={() => handleButtonClick(index)}/>
        ))}
      </div>
    </div>
  );
};
