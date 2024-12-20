import React from 'react'
import Image from 'next/image';
import logo from '@/images/appicon.svg';
import facebook from '@/images/facebook.svg';
import instagram from '@/images/instagram.svg';
import x from '@/images/x.svg';


const privacy= () => {
  return (
    <>
   
    <div className="container">
      <div className="nav">
        <div className="nav-logo">
          <a href='/'>
          <Image
            src={logo}
            alt="paylasim.app logo"
            width={48}
            height={48}
          /> Paylasim.app</a>
        </div>
       
        <div className="nav-social">
        <a target="_blank" href='https://www.facebook.com/paylasimapp' className="nav-social-box1">
        <Image
            src={facebook}
            alt="paylasim.app facebook"
            width={24}
            height={24}
          /></a>
          <a target="_blank" href='https://www.instagram.com/paylasimapp' className="nav-social-box2">
           <Image
            src={instagram}
            alt="paylasim.app instagram"
            width={24}
            height={24}
          /></a>
          <a target="_blank" href='https://www.x.com/paylasimapp' className="nav-social-box3">
           <Image
            src={x}
            alt="paylasim.app x"
            width={24}
            height={24}
          />
          </a>
        </div>
      </div>

      <div className="content">
      <h1>Paylasim.app Gizlilik Politikası</h1>
       <p>Yürürlük Tarihi: 01.12.2024 Paylasim.app olarak gizliliğinize önem
        veriyoruz. Bu Gizlilik Politikası, uygulamamızın veri toplama ve işleme
        konusundaki yaklaşımını açıklamaktadır.</p>
        <h3>1. Veri Toplanmıyor</h3>
        Uygulamamız, kullanıcılarımızdan herhangi bir kişisel veri toplamaz,
        saklamaz veya işlemez.
        <h3>2. Üçüncü Taraf Hizmetler</h3>
        Uygulamamızda kullanıcı deneyimini geliştirmek ve reklam göstermek
        amacıyla üçüncü taraf hizmetler kullanılmaktadır: 
        <b>AdMob:</b> Uygulamamızda reklam gösterimi için kullanılır. AdMob,
        cihaz bilgileri ve reklam etkileşimleri gibi anonim verileri kendi
        gizlilik politikası çerçevesinde toplayabilir. Daha fazla bilgi için
        lütfen AdMob Gizlilik Politikası sayfasını ziyaret ediniz.
        <b>Firebase:</b> Uygulama performansını izlemek ve kullanıcı deneyimini
        geliştirmek için Firebase kullanılmaktadır. Firebase, anonimleştirilmiş
        analiz verileri (ör. uygulama kullanım istatistikleri) toplayabilir. 
        Firebase&apos;in verilerinizi nasıl işlediğini öğrenmek için Firebase
        Gizlilik Politikası sayfasını ziyaret edebilirsiniz.
        <h3>3. Veri Güvenliği</h3>
        Uygulamamız kullanıcı verisi toplamadığı için herhangi bir kişisel bilgi
        saklanmaz. Ancak, kullanılan üçüncü taraf hizmetler (AdMob ve Firebase)
        kendi veri güvenliği standartlarına ve politikalarına sahiptir.
        <h3>4. Politikada Yapılacak Değişiklikler</h3>
        Bu Gizlilik Politikası zaman zaman güncellenebilir. Herhangi bir
        değişiklik durumunda, güncel politika bu sayfada yayınlanacaktır.
        <h3>5. İletişim</h3>
        Gizlilik Politikası ile ilgili sorularınız için bizimle iletişime
        geçebilirsiniz: E-posta: support@paylasim.app Web Sitesi: paylasim.app
      </div>
    </div>
<div className="container">
    <div className="footer">
    <a href='/'>
          <Image
            src={logo}
            alt="paylasim.app logo"
            width={24}
            height={24}
          /> Copyright © 2024 Paylasim.app</a>
<div className='footer-links'>
        <a href="/usage">Kullanım Şartları</a>
        <a href="/privacy">Gizlilik Politikası</a></div>
    </div>
    </div>

    
  </>
  )
}

export default privacy