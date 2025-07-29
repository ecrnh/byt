import { Integration } from '../types';

export const integrations: Integration[] = [
  {
    id: 'airtable',
    name: 'Airtable',
    icon: 'table',
    description: 'Veri tabanı yönetimi ve organizasyonu'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    icon: 'zap',
    description: 'Uygulama otomasyonu ve entegrasyonu'
  },
  {
    id: 'make',
    name: 'Make',
    icon: 'cog',
    description: 'Gelişmiş workflow otomasyonu'
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: 'file-text',
    description: 'Dokümantasyon ve proje yönetimi'
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    icon: 'sheet',
    description: 'Spreadsheet entegrasyonu ve analizi'
  },
  {
    id: 'api',
    name: 'Custom APIs',
    icon: 'code',
    description: 'Özel API bağlantıları ve geliştirme'
  }
];