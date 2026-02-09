import React from "react";
import Image from "next/image";
import logo from "@/images/appicon.svg";
import facebook from "@/images/facebook.svg";
import instagram from "@/images/instagram.svg";
import x from "@/images/x.svg";

const childSafety = () => {
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
              />
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

        <div className="content">
          <h1>
            Paylasim.app(Beautiful Quotes Status Messages) Child Safety & CSAE
            Policy
          </h1>
          <h3>Zero Tolerance for CSAE</h3>
          We have a zero-tolerance policy for Child Sexual Abuse and
          Exploitation (CSAE). Any content, behavior, or activity that involves
          or facilitates the sexual exploitation of minors, including Child
          Sexual Abuse Material (CSAM), grooming, sextortion, sexualization of
          minors, or trafficking, is strictly prohibited.
          <h3>Enforcement and Actions</h3>- Any user found engaging in or
          sharing CSAE content will be immediately banned, and such content will
          be removed. - Confirmed CSAM or CSAE cases will be reported to the
          appropriate law enforcement authorities and relevant regional bodies
          (e.g., National Center for Missing & Exploited Children or
          equivalent). - We comply with all applicable child protection laws and
          Google Play Child Safety Standards.{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/9878809?sjid=2353401164468486223-EU&visit_id=639062335609341260-1144823152&rd=1#child_safety">
            Reference
          </a>
          <h3>In-App Reporting</h3>
          We provide a reporting mechanism within the app for users to report
          unsafe or suspicious content or behavior. Reports are reviewed
          promptly.
          <h3>Child Safety Contact</h3>
          If you have concerns about child safety or CSAE content, you can
          contact us at: support@paylasim.app
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <a href="/">
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
};

export default childSafety;
