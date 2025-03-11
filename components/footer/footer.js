import Image from 'next/image'
import style from './footer.module.css'

const Footer = () => {
    return (
        <>
        <footer className={style.footer}>
            <div className={style.logoFooter}><Image src="/images/logo-footer.svg" width={37} height={37} alt="logo emisa"/></div>
            <div className={style.menuFooter}><a className={style.linkFooter} href="../home/home.html">Mentions Légales</a> </div>
            <div className={style.menuFooter}><a className={style.linkFooter} href="../home/home.html">Politique de Confidentialité</a> </div>
            <div className={style.menuFooter}><a className={style.linkFooter} href="../home/home.html">Conditions générales d’utilisation</a> </div>
        </footer>  
        </>
    );
};

export default Footer;