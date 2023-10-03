import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/EliasSantiago.png" />
          <div className={styles.authorInfo}>
            <strong>Elias Fonseca</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="02 de Outubro às 11:00h" dateTime='2023-10-02 11:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Olá</p>
        <p>Teste teste teste</p>
        <p>...</p>
        <p><a href="#">#code</a> <a href="#">#developer</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'>

        </textarea>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}