import Image from "next/image"
import style from "./page.module.css"

const Home = () => {
  return (
    <>

      <div className={style.container}>
        <div className={style.banner}>
            <Image src="/images/bandeau-home.png" width={1920} height={562} className={style.imgBanner} alt="Bannière du site" />
          <div className={style.title_banner}>
            <h1 className={style.h1Title}>EMISA</h1>
            <h2 className={style.h2Title}>Le centre de formation</h2>
            <h3 className={style.h3Title}>Chambre de Commerce et d’Industrie Bayonne Pays Basque</h3>
            <h2 className={style.subTitle}>
              <span id={style.baseline}>TROUVEZ</span> LE CANDIDAT IDÉAL !
            </h2>
          </div>
        </div>

        <div className={style.presentation}>
          <h2 className={style.h2subTitle}>BIENVENUE SUR L’ANNUAIRE EMISA</h2>
          <p className={style.para}>
            Ferum que aut event ut magniscid maion corion net aut ut utem nobit
            officta dolest molore molupit utet faccaep taeseque a demolo essedit
            iaeprem remporis aut volentu saesequ ibusam, odi omnihil landit
            magnam veligento incienis niminctecus maximus dellaborem non
            nonsecae ni sum int apisquibus dolorerias con repr velles susdant
            enit eserem et quist, aliaspe rumquat ex et volores et labo. Ut lam
            fugitasimi,
          </p>
          <Image src="/images/ETOILE-EMISE.svg" width={180} height={185} alt="étoile" />
          <div>
            <a href="/pages/annuaire.js">
              <button className={style.button}>ACCÉDER À L’ANNUAIRE</button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
