import Image from "next/image";
import logo from "@/images/appicon.svg";
import facebook from "@/images/facebook.svg";
import instagram from "@/images/instagram.svg";
import x from "@/images/x.svg";
import girl from "@/images/girl.png";
import appstore from "@/images/appstore.svg";
import googleplay from "@/images/googleplay.svg";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <a href="/">
              <Image
                src={logo}
                alt="paylasim.app logo"
                width={48}
                height={48}
              />{" "}
              Paylasim.app
            </a>
          </div>

          <div className="nav-social">
            <a
              target="_blank"
              href="https://www.facebook.com/paylasimapp"
              className="nav-social-box1"
            >
              <Image
                src={facebook}
                alt="paylasim.app facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/paylasimapp"
              className="nav-social-box2"
            >
              <Image
                src={instagram}
                alt="paylasim.app instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              target="_blank"
              href="https://www.x.com/paylasimapp"
              className="nav-social-box3"
            >
              <Image src={x} alt="paylasim.app x" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <h1>
              Hazır Durum <br /> Mesajları Uygulaması
            </h1>
            <p>
              Paylaşım.app ile istediğiniz arka planı seçin, binlerce hazır
              mesaj arasından kaydırarak dilediğinizi seçin ve hemen sosyal
              medya hesaplarınızda paylaşın. Üstelik tamamen ücretsiz!
            </p>

            <div className="yukle">
              <a
                href="https://play.google.com/store/apps/details?id=com.helpfulapps.paylasimapp"
                className="yukle-box"
              >
                <Image
                  src={googleplay}
                  alt="paylasim.app logo"
                  width={164}
                  height={32}
                />
              </a>{" "}
              <a
                href="https://apps.apple.com/tr/app/paylasim-app-durum-mesajlar%C4%B1/id6739170806?l=tr"
                className="yukle-box"
              >
                <Image
                  src={appstore}
                  alt="paylasim.app logo"
                  width={164}
                  height={32}
                />
              </a>
            </div>
          </div>

          <div className="hero-right">
            {" "}
            <Image src={girl} alt="paylasim.app logo" height={500} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <a href="">
            <Image src={logo} alt="paylasim.app logo" width={24} height={24} />{" "}
            Copyright © 2024 Paylasim.app
          </a>
          <div className="footer-links">
            <a href="/usage">Kullanım Şartları</a>
            <a href="/privacy">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </>
  );
}
