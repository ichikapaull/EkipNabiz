# RemoteMetrics Landing Page

Modern ve responsive bir SaaS landing page. RemoteMetrics uygulaması için showcase amaçlı tasarlanmış, en son web teknolojileri kullanılarak geliştirilmiş bir front-end projesidir.

## Özellikler

- **Modern Tasarım**: Minimalist ve temiz UI tasarımı
- **Responsive Yapı**: Tüm cihazlarda sorunsuz görüntüleme
- **Animasyonlar**: Framer Motion ile akıcı geçişler ve animasyonlar
- **Erişilebilirlik**: WCAG standartlarına uygun, ARIA etiketleri ile geliştirilmiş
- **Dark Mode Desteği**: next-themes ile koyu tema desteği
- **SEO Optimizasyonu**: Meta etiketleri ile arama motoru optimizasyonu
- **Modüler Yapı**: Clean code prensiplerine uygun, modüler bileşen yapısı
- **Performans Optimizasyonu**: Lazy loading ve diğer optimizasyon teknikleri
- **Error Boundary**: Hata yönetimi için error boundary bileşenleri

## Teknoloji Stack

- **Framework**: Next.js 15
- **Dil**: TypeScript
- **UI Bileşenleri**: Shadcn/ui
- **Stil**: Tailwind CSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide Icons
- **Tema Desteği**: next-themes
- **Kod Kalitesi**: ESLint, Prettier

## Proje Yapısı

```
app/
├── components/
│   ├── layout/          # Layout bileşenleri (Header, Footer)
│   ├── sections/        # Sayfa bölümleri (Hero, Features, vb.)
│   └── ui/              # Genel UI bileşenleri
├── data/                # Statik veriler
├── hooks/               # Custom hooks
├── styles/              # CSS ve animasyon stilleri
├── types/               # TypeScript tip tanımlamaları
├── utils/               # Yardımcı fonksiyonlar
└── page.tsx             # Ana sayfa
```

## Başlangıç

Projeyi lokal ortamınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.

## Geliştirme İlkeleri

- **Bileşen Bazlı Geliştirme**: Her bileşen kendi dosyasında, tek bir sorumluluk ilkesiyle geliştirilmiştir
- **TypeScript ile Tip Güvenliği**: Tüm props ve state'ler için tip tanımlamaları
- **Erişilebilirlik Öncelikli**: ARIA etiketleri ve semantik HTML kullanılmıştır
- **Responsive Tasarım**: Mobile-first yaklaşımla tüm ekran boyutlarına uyumlu
- **Performans Optimizasyonu**: React best practices ile optimize edilmiş kod

## Lisans

MIT 