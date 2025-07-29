import React from 'react';
import { Table, Zap, Cog, FileText, Code, Layers } from 'lucide-react';
import { integrations } from '../data/integrations';

const IntegrationsSection: React.FC = () => {
  const iconMap = {
    table: Table,
    zap: Zap,
    cog: Cog,
    'file-text': FileText,
    sheet: Layers,
    code: Code
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Platform Entegrasyonları
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mevcut sistemlerinizle seamless entegrasyon sağlayan platformlarla çalışıyoruz.
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrations.map((integration, index) => {
              const IconComponent = iconMap[integration.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={integration.id}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integration Benefits */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Neden Entegrasyon Önemli?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Veri Senkronizasyonu',
                      description: 'Tüm sistemlerinizde güncel ve tutarlı veri akışı'
                    },
                    {
                      title: 'Otomasyon',
                      description: 'Manuel süreçleri otomatikleştirerek zaman kazanın'
                    },
                    {
                      title: 'Maliyet Düşürme',
                      description: 'Mevcut yatırımlarınızı koruyarak yeni değer yaratın'
                    },
                    {
                      title: 'Ölçeklenebilirlik',
                      description: 'İşletmeniz büyüdükçe sistemleriniz de büyür'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Layers className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Seamless Integration</h4>
                      <p className="opacity-90">
                        Mevcut iş akışlarınızı bozmadan yeni teknolojiler entegre ediyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Integration CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              İhtiyacınız olan platform listede yok mu?
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Özel Entegrasyon Talep Edin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;