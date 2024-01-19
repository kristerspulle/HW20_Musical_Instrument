import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from '../../assets/deep-strange-whoosh-183845.mp3';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import styles from './MusicPage.module.css';

const sounds = [
  'src/assets/bass1.wav',
  'src/assets/bass2.wav',
  'src/assets/fx1.wav',
  'src/assets/fx2.wav',
  'src/assets/melody1.wav',
  'src/assets/melody2.wav',
  'src/assets/melody3.wav',
  'src/assets/melody4.wav',
  'src/assets/melody5.wav',
  'src/assets/melody6.wav',
  'src/assets/percussion1.wav',
  'src/assets/percussion2.wav',
  'src/assets/percussion3.wav',
  'src/assets/percussion4.wav',
  'src/assets/synth.wav',
  'src/assets/topsecret.mp3',
];

export const MusicPage = () => {
  const [playIntro] = useSound(intro);
  const keyCount = 16;
  const keyArray = Array.from({ length: keyCount }, (_, index) => index);
  useEffect(() => {
    playIntro();
  }, [playIntro]);

  return (
    <div className={styles.keyWrapper}>
      <img className={styles.image} src="public/codelex.svg" alt="codelex" />
      <div className={styles.asd}>
        {keyArray.map((index) => (
          <PlayButton key={index} soundFile={sounds[index]}/>
        ))}
      </div>
    </div>
  );
};
