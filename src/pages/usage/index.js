import React from 'react'
import Image from 'next/image';
import logo from '@/images/appicon.svg';
import facebook from '@/images/facebook.svg';
import instagram from '@/images/instagram.svg';
import x from '@/images/x.svg';
import girl from '@/images/girl.png';
import appstore from '@/images/appstore.svg';
import googleplay from '@/images/googleplay.svg';

const terms= () => {
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
        <h1>Kullanım Politikası</h1>
 

<p>Bu kullanım politikası, Paylasim.app web sitesi ve mobil uygulamasını kullanan tüm kullanıcılar için geçerlidir. Web sitemizi ve uygulamamızı kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.</p>

<h3>1. Hizmetin Kapsamı</h3>

<p>Paylasim.app, kullanıcıların metin ve arka plan seçerek sosyal medya paylaşımları oluşturmasını sağlar.</p>

<p>Sunulan içerikler yalnızca kişisel kullanım içindir; ticari kullanımlara izin verilmez.</p>

<h3>2. Kullanıcı Sorumlulukları</h3>

<p>Kullanıcılar, oluşturdukları içeriklerden tamamen sorumludur.</p>

<p>Uygunsuz, ahlaka aykırı, yasalara aykırı veya telif haklarını ihlal eden paylaşımlar yasaktır.</p>

<h3>3. Gizlilik ve Verilerin Korunması</h3>

<p>Kişisel verileriniz, Gizlilik Politikamız kapsamında korunur.</p>

<p>Üçüncü taraflarla veri paylaşımı yalnızca yasal zorunluluklar çerçevesinde gerçekleşir.</p>

<h3>4. Fikri Mülkiyet Hakları</h3>

<p>Web sitesi ve mobil uygulamadaki tüm içerikler, tasarımlar ve metinler telif hakkıyla korunmaktadır.</p>

<p>Kullanıcılar, içeriklerin izinsiz kopyalanmaması ve dağıtılmaması gerektiğini kabul eder.</p>

<h3>5. Sorumluluğun Sınırlandırılması</h3>

<p>Paylasim.app, hizmetin kesintisiz ve hatasız olacağını garanti etmez.</p>

<p>Hizmetin kullanımı sırasında oluşabilecek teknik sorunlardan sorumlu değiliz.</p>

<h3>6. Değişiklik ve Güncellemeler</h3>

<p>Kullanım politikasında zaman zaman değişiklik yapma hakkımız saklıdır.</p>

<p>Güncellemeler web sitesinde yayınlandığında geçerli olur.</p>

<h3>7. İletişim Bilgileri</h3>

<p>Herhangi bir sorunuz veya öneriniz olduğunda bizimle iletişime geçebilirsiniz: support@paylasim.app</p>

<p>Son Güncelleme Tarihi: 18.12.2024 Bu kullanım politikasını kabul etmiyorsanız, web sitesi ve mobil uygulamamızı kullanmamanız önerilir.</p>
       
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

export default terms