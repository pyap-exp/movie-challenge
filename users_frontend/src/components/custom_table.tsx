import { first } from "structkit-ts";
import styles from "@/resources/page.module.css";

import Image from "next/image";

export default function CustomTable(props: any) {
  console.log(props.api_content, ":api_content");
  const api_content = props.api_content;
  return (
    <>
      <div>
        {api_content.length > 0 ? (
          <>
            {api_content.map((d: any) => (
              <>
                <div className="cards cols-5">
                  <div className="cards-body ">
                    <div className={styles.cards_movie_div}>
                      <Image
                        width={100}
                        height={100}
                        alt="No picture available"
                        src={first(d.posters).url}
                      />
                    </div>
                    <div className={styles.cards_movie_div}>
                      <div>
                        <b>Title </b>
                        {d.title}
                      </div>
                      <div>
                        <b>Page </b>
                        <a className={styles.visit_link} href={d.url}>
                          {d.url}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <div>No data found</div>
          </>
        )}
      </div>
    </>
  );
}
