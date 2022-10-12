import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gabjohann.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Johann</strong>
              <time
                title="11 de outubro às 20:06"
                dateTime="2022-10-11 20:06:20"
              >
                Há cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
/* className={} */
