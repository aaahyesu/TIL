import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credit.module.css";

interface Credit {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}

async function getCredit(id: string): Promise<Credit[]> {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits: Credit[] = await getCredit(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={credit.id} className={styles.credit}>
          {credit.profile_path ? (
            <img src={credit.profile_path} alt={credit.name} />
          ) : (
            <div className={styles.placeholder}></div>
          )}
          <p>역할: {credit.known_for_department} </p>
          <p>이름: {credit.name}</p>
          <p>캐릭터: {credit.character}</p>
          <a href={credit.profile_path} target={"_black"}>
            프로필 보기 &rarr;
          </a>
        </div>
      ))}
    </div>
  );
}
