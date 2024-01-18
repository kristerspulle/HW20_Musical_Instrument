import styles from './PlayButton.module.css'
type PlayButtonProps = {
  soundFile: string,
  onClick: (index) => void
}
export const PlayButton = ({soundFile, onClick}: PlayButtonProps) => <div className={styles.key} onClick={onClick}><audio src={soundFile}/></div>