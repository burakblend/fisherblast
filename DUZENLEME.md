# Tavook Studios — Düzenleme rehberi

Bu paket doğrudan yayınlanabilir statik bir web sitesidir. HTML, CSS ve JavaScript kaynakları açıktır. Blogger, npm, React, Python, veritabanı veya ücretli bir servis gerektirmez. Oturum açmalı bir yönetim paneli içermez; dosyalar bir metin editörüyle düzenlenir.

## Dosya haritası

| Dosya | Düzenlenecek alan |
|---|---|
| index.html | Ana sayfa, yatay galeri, stüdyo metni, aşağı ok |
| games.html | Fisher Blast tanıtımı, Google Play bağlantısı, oyun ekranları |
| about.html | Stüdyo açıklaması, beş görsellik 4:5 galeri |
| privacy.html / terms.html / support.html / data-deletion.html | Gönderdiğin depodaki güncel metinler |
| style.css | Tüm sayfaların ortak görünümü ve mobil kuralları |
| site.js | Menü, kaydırıcı, duraklatma, sürükleme, erişilebilirlik |
| site-settings.js | Galeri süresi; 5000 = 5 saniye |
| assets/ | Site görselleri; orijinal yatay görseller kayıpsız WebP |
| assets-map.json | Görsel dosyalarıyla yüklediğin dosyaların eşleşmesi |
| app-ads.txt | Mevcut dosya, içeriği değiştirilmedi |

## Metin ve bağlantı düzenleme

İlgili HTML dosyasını VS Code veya başka bir metin editöründe aç. Görünen metni etiketlerin arasında değiştir. Sayfalar gerçek .html dosyalarıdır; hash ile sayfa taklidi yapılmaz. Ortak menü/footer HTML'si her sayfada bulunur; yeni bir menü öğesi eklediğinde tüm HTML dosyalarında aynı değişikliği yap. CSS ve JavaScript tek ortak dosyadır.

Google Play adresini değiştirmek için HTML dosyalarında `https://play.google.com/store/apps/details?id=com.tavook.fisherblast` metnini değiştir. Destek adresi için `burakakdemir.dev@gmail.com` ara. Yasal içerikte değişiklik gerekiyorsa ayrıca ilgili sayfayı düzenle.

## Görseller ve galeri

Aynı adlı assets/*.webp dosyasını yenisiyle değiştirmen yeterlidir. PNG veya JPEG kullanırsan HTML içindeki src yolunun uzantısını da değiştir. Ana sayfa yatay, About görselleri 4:5 oranındadır. Yatay kaynaklar özgün çözünürlük ve pikselleriyle korunur; 1200 piksel görseller büyük monitörde büyütüldüğünde yumuşayabilir. Ana galeri boş şerit bırakmamak için object-fit:cover kullanır; oran uyuşmazlığında kenarlardan hafif kırpar.

Görsel sayısını değiştirirken aynı .exhibit içinde hem figure.exhibit-slide öğelerini hem data-slide düğmelerini güncelle. Düğme indeksleri 0'dan başlayıp sırayla artmalı. aria-label metinlerini de güncelle. Kopya döngü öğelerini JavaScript kendisi üretir; HTML'ye kopya ekleme.

Hareket azaltma tercihi açıksa otomatik kaydırma başlamaz. Fare galeri üzerindeyken, galeriye klavye odağı geldiğinde veya sekme arka plandayken otomatik ilerleme durur. Oklar, noktalar, sürükleme ve dokunmatik kaydırma kullanılabilir.

## Renkler

Ana kırmızı style.css içindeki --red değişkenidir. Üst barın son CSS kuralı #d52516 rengini kullanır. Dosyanın sonunda son tasarım düzeltmeleri bulunur; aynı seçicinin son kuralı önceliklidir. Logo beyazdır. Alt ana sayfa oku footer alanına gider.

## Yerel önizleme

ZIP'i çıkar, index.html dosyasını tarayıcıda aç. İstersen dizinde `python -m http.server 8000` çalıştırıp http://localhost:8000 üzerinden incele. Düzenleme sonrası Ctrl+F5 ile yenile.

## Yayın sonrası kontrol

Ana sayfa, Games, About ve dört yasal/destek sayfasını aç. Mobil menüyü, yatay/dikey galeriyi, Google Play ve e-posta bağlantılarını kontrol et. Bu paket kod ve dosya bağlantısı kontrollerinden geçmiştir; canlı sunucuna yükleme yapılmamıştır.
