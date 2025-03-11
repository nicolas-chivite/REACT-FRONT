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
          return (
            <div key={student.id} className={style.studSheet}>
              <div className={style.imgContainer}>
                <Image
                  className={style.studPic}
                  src="/photos/67a235a24cec6.jpg"
                  width={10}
                  height={10}
                  alt="student picture"
                />
              </div>
              <div className={style.studCard}>
                <div className={style.id}>
                  <span id={style.studId}>
                    {student.firstName} {student.lastName}
                  </span>
                  <p>Date de naissance : {student.birthDay}</p>
                  <p className={style.yearType}>
                    Formation : {student.course.title}
                  </p>
                  <Image
                    src="../images/picto-promo.svg"
                    width={10}
                    height={10}
                    alt="student hat"
                  />{" "}
                  <span className={style.yearType}> Promo {student.promo}</span>
                </div>
                <Image
                  src="/images/coeur-vide.svg"
                  width={10}
                  height={10}
                  alt="student selection"
                  className={style.heart}
                />
                <div className={style.btnStud}>
                  <a href="../student/student.html">
                    <button>Voir la fiche</button>
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
