import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./studentcard.module.css";

const StudentsCards = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students")
      .then((response) => response.json())
      .then((resp) => {
        // console.log(students);
        setStudents(resp.member);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.student}>
        {students.map((student) => {
            const birthDay = new Date(student.birthDay);
            const formattedDate = birthDay.toLocaleDateString("fr-FR");
          return (
            <div key={student.id} className={style.studSheet}>
              <div className={style.imgContainer}>
                <Image
                  className={style.studPic}
                  src="/photos/67a2359a62fed.jpg"
                  width={1588}
                  height={1200}
                  alt="student picture"
                />
              </div>
              <div className={style.studCard}>
                <div className={style.id}>
                  <span id={style.studId}>
                    {student.firstName} {student.lastName}
                  </span>
                  <p>Date de naissance : {formattedDate}</p>
                  <p className={style.yearType}>
                    Formation : {student.course.title}
                  </p>
                  <Image
                    src="../images/picto-promo.svg"
                    width={28}
                    height={25}
                    alt="student hat"
                  />{" "}
                  <span className={style.yearType}> Promo {student.promo}</span>
                </div>
                <Image
                  src="/images/coeur-vide.svg"
                  width={18}
                  height={18}
                  alt="student selection"
                  className={style.heart}
                />
                <div className={style.btnStud}>
                  <a href="../student/student.html">
                    <button>Voir la fiche
                    <Image
                      src="./images/picto-fiche.svg"
                      width={18}
                      height={18}
                      alt="picto fiche étudiant"
                      className={style.pictoFiche}
                    />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsCards;
