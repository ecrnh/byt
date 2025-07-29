import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'İşletmelere kod yazmadan güçlü dijital çözümler sunarak, teknoloji engellerini kaldırmak ve inovasyon sürecini hızlandırmak.'
    },
    {
      icon: Eye,
      title: 'Vizyonumuz',
      description: 'Yapay zeka ve no-code teknolojilerinin gücünü birleştirerek, her büyüklükteki işletmenin dijital dönüşümünü mümkün kılmak.'
    },
    {
      icon: Users,
      title: 'Değerlerimiz',
      description: 'Müşteri odaklılık, sürekli öğrenme, yenilikçilik ve etik teknoloji geliştirme prensipleriyle hareket ederiz.'
    },
    {
      icon: Award,
      title: 'Uzmanlığımız',
      description: '5+ yıllık deneyimimizle AI, automation ve data integration alanlarında sektör lideri çözümler geliştiriyoruz.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BYT Digital, yapay zeka, no-code platformlar ve gelişmiş veri entegrasyonları ile 
              işletmelere dijital dönüşüm odaklı yenilikçi çözümler sunan bir teknoloji şirketidir.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dijital Dönüşümde Güvenilir Partneriniz
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Günümüzde teknoloji hızla değişirken, işletmelerin bu değişime ayak uydurması kritik önem taşıyor. 
                BYT Digital olarak, karmaşık teknik süreçleri basitleştirerek, işletmelerin asıl odaklanması gereken 
                alanlarda başarılı olmalarını sağlıyoruz.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                No-code çözümlerle hızlı prototipleme, yapay zeka ile akıllı otomasyonlar ve 
                seamless veri entegrasyonları ile işletmenizin dijital potansiyelini ortaya çıkarıyoruz.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Yıllık Deneyim</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Platform Entegrasyonu</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Award className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Sektör Lideri Çözümler</h4>
                    <p className="text-lg opacity-90">
                      En son teknolojilerle donatılmış, ölçeklenebilir ve güvenilir sistemler geliştiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-float animation-delay-2000"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;