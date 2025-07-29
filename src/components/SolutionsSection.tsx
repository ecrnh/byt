import React from 'react';
import { ShoppingCart, Users, FileText, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { solutions } from '../data/solutions';

const SolutionsSection: React.FC = () => {
  const iconMap = {
    'shopping-cart': ShoppingCart,
    users: Users,
    'file-text': FileText,
    'message-circle': MessageCircle
  };

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Çözümlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Farklı endüstrilerde kanıtlanmış başarılı çözümler ve kullanım senaryoları.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={solution.id}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
                >
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {solution.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-6">
                        <button className="group/btn inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                          Başlayın
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Çalışma Sürecimiz
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Her projede izlediğimiz sistematik yaklaşım
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Analiz', description: 'İhtiyaç analizi ve mevcut sistemlerin değerlendirilmesi' },
                { step: '02', title: 'Tasarım', description: 'Özelleştirilmiş çözüm tasarımı ve prototipleme' },
                { step: '03', title: 'Geliştirme', description: 'No-code platformlarla hızlı geliştirme süreci' },
                { step: '04', title: 'Destek', description: 'Sürekli bakım, optimizasyon ve teknik destek' }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;