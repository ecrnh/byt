import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'Yapay Zekâ Destekli Çözümler',
    description: 'İşletmenize özel AI modelleri ve akıllı otomasyon sistemleri geliştiriyoruz.',
    icon: 'brain',
    features: [
      'Özel AI model geliştirme',
      'Doğal dil işleme',
      'Görüntü ve veri analizi',
      'Predictive analytics'
    ]
  },
  {
    id: 'nocode-development',
    title: 'No-Code Platform Geliştirme',
    description: 'Kod yazmadan güçlü uygulamalar ve süreçler oluşturun.',
    icon: 'zap',
    features: [
      'Hızlı prototipleme',
      'Drag & drop arayüzler',
      'Otomatik kod üretimi',
      'Kolay bakım ve güncelleme'
    ]
  },
  {
    id: 'data-integration',
    title: 'Veri Entegrasyonu ve Otomasyon',
    description: 'Farklı sistemlerinizi birbirine bağlayarak veri akışını otomatikleştirin.',
    icon: 'database',
    features: [
      'API entegrasyonları',
      'Real-time data sync',
      'ETL süreçleri',
      'Veri görselleştirme'
    ]
  },
  {
    id: 'api-automation',
    title: 'API Bağlantıları ve İş Süreci Otomasyonu',
    description: 'İş süreçlerinizi otomatikleştirerek verimlilik artırın.',
    icon: 'settings',
    features: [
      'Workflow otomasyonu',
      'Sistem entegrasyonları',
      'Süreç optimizasyonu',
      'Performans izleme'
    ]
  },
  {
    id: 'consulting',
    title: 'Danışmanlık & Eğitim Hizmetleri',
    description: 'Dijital dönüşüm yolculuğunuzda uzman rehberliği alın.',
    icon: 'graduation-cap',
    features: [
      'Dijital strateji danışmanlığı',
      'Teknik eğitimler',
      'Change management',
      '7/24 destek hizmetleri'
    ]
  }
];