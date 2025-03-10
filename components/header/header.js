import Image from "next/image";
import Link from "next/link";

import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <nav id={style.header}>
        <div className={style.logoMenu}>
          <Link href={"/"}>
            <Image
              src="/images/logo-menu.png"
              width={398}
              height={96}
              alt="logo EMISA"
            />
          </Link>
        </div>

        <div className={style.head_container}>
          <div className={style.menu}>
            <div className={style.menus}>
              <Link href={"/"}>
                <span className={style.underline}>ACCUEIL</span>
              </Link>
              <a href="../"></a>
            </div>
            <div className={style.menus}>
              <Link href={"/annuaire"}>ANNUAIRE</Link>
            </div>
            <div className={style.menus}>
              <Link href={"/contact"}>CONTACT</Link>
            </div>
          </div>

          <div className={style.network}>
            <a href="https://www.facebook.com/CCIFormationsBayonne.Emisa/">
              <Image
                src={"/images/facebook.svg"}
                width={25}
                height={25}
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/emisa.fr/">
              <Image
                src={"/images/instagram.svg"}
                width={25}
                height={25}
                alt="Instagram"
              />
            </a>
            <a href="https://www.linkedin.com/company/cci-formations-bayonne-emisa?originalSubdomain=fr">
              <Image
                src={"/images/linkedin.svg"}
                width={25}
                height={25}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
