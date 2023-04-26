import Image from 'next/image'
import styles from './HomeLink.module.css'

export default function HomeLink(props) {
  return (
    <div className={styles.component}>
      <a href={props.link}>
        <Image
          className={styles.image}
          src={props.img}
          width="80" 
          height="80" 
          alt={props.alt}
        />
      </a>
    </div>
  );
}
