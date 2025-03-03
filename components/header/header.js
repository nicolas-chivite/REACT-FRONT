import Image from "next/image"

const Header = () => {
  return (
    <>
      <nav id="header">
        <div class="logo-menu">
          <a href="../home/home.html">
            <Image
              src="/images/logo-menu.png"
              width={100}
              height={100}
              alt="logo EMISA"
            />
          </a>
        </div>

        <div class="head_container">
          <div class="menu">
            <div class="menus">
              <a href="../home/home.html">
                <span class="underline">ACCUEIL</span>
              </a>
            </div>
            <div class="menus">
              <a href="../directory/directory.html">ANNUAIRE</a>
            </div>
            <div class="menus">
              <a href="../contact/contact.html">CONTACT</a>
            </div>
          </div>

          <div class="network">
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
