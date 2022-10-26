import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/gabjohann.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Johann</strong>
            <span>Mobile Developer</span>
          </div>
        </div>

        <time title="11 de outubro às 20:06" dateTime="2022-10-11 20:06:20">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉&nbsp;&nbsp;<a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>&nbsp;
          <a href="">#nlw</a>&nbsp;
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
