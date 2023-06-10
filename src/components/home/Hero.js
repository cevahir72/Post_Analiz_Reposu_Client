import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <div>
        <div class="background--image1">
        <div class="heading-container">
            <span class="heading-container__heading">Furni-Scope</span>
        </div>
    </div>
    <section class="section section--light">
        <h2>İÇERİK</h2>
        <p >Bu web aplikasyonu , OfferUp uygulamasında görev yapan değerli ekibimize ithaf edilmiştir. Uygulama içerisinde postlarınızın sayı girişlerini yapabilir, ürünlerinizin bütün özelliklerini tek tıklama ile kopyalayabilir ve finansing ile ilgili bütün hususları tek tıklama ile kopyalayıp OfferUp taki mesajlara yapıştırabilirsiniz. Yapmış olduğunuz satışların takibini de buradan yapabilirsiniz. </p>
    </section>
    <div class="background--image2">
        <div class="heading-container">
            <img src="./images/clarusway.png" alt="furni-scope" class="heading-container__logo"/>
        </div>
    </div>
    <section class="section section--dark">
        <h2>Hakkımızda</h2>
        <p>California eyaletinde bulunan Ornate Furniture mobilya firmasının affiliate marketing işlerini yürütürken aynı zamanda ürünleri yüklemiş olduğumuz bölgelerden hangi zaman aralığında hangi ürünlerin satıldığını analiz etmek için bu uygulamayı kullanacağız. Müşteri, ürün ile ilgili ya da finansing ile ilgili sorularına hazırlamış olduğumuz ingilizce yanıtları tek tuşla kopyalayarak işinizi kolaylaştırabilirsiniz.</p>
    </section>
    <div class="background--image3">
        <div class="heading-container">
            <span class="heading-container__heading">Analyze Your Sales</span>
        </div>
    </div>
    <section class="section section--light">
        <h2>Ekibimiz</h2>
        <p> Ekibimize satışlarında başarılar dileriz...</p>
    </section>
    </div>
    
  )
}

export default Hero