import styles from './PlayButton.module.css';
type PlayButtonProps = {
  soundFile: string;
};

export const PlayButton = ({ soundFile }: PlayButtonProps) => {
  let isPlaying = false
  const handleButtonClick = (soundFile: string) => {
    
    const audio = new Audio(soundFile);
    if(isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying
  };

  return (
    <div className={styles.key} onClick={() => handleButtonClick(soundFile)}>
      <audio src={soundFile} />
    </div>
  );
};
