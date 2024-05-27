# React ile ContentEditable

Bu proje, React kullanarak içerik düzenlenebilir bir bileşen (ContentEditable component) uygulamaktadır.

## Özellikler

- **İçerik Düzenlenebilir:** Bileşen içinde doğrudan içerik düzenlemeye olanak tanır.
- **Özel Stil:** Düzenlenebilir içerik için özel stil desteği.
- **Olay Yönetimi:** `onChange`, `onFocus` ve `onBlur` gibi çeşitli olayları yönetir.

## Kurulum

Bu projeye başlamak için, depoyu klonlayın ve bağımlılıkları yükleyin:

```bash
git clone https://github.com/dursuninel/ContentEditable-with-React.git
cd ContentEditable-with-React
npm install
```

## Kullanım

Projeyi yerel olarak çalıştırmak için aşağıdaki komutu kullanın:

```bash
npm start
```

Bu komut geliştirme sunucusunu başlatacak ve projeyi `http://localhost:3000` adresinde görüntüleyebilirsiniz.

## Proje Yapısı

```
ContentEditable-with-React/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ContentEditable.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

- **public/**: HTML dosyasını ve diğer genel varlıkları içerir.
- **src/**: React bileşenlerini ve uygulama mantığını içerir.
- **package.json**: Proje bağımlılıklarını ve komutlarını listeler.

## Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen değişikliklerinizle bir pull request oluşturun.
