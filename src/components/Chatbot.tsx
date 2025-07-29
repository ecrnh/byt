import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Merhaba! BYT Digital hakkında ne öğrenmek istersiniz? Size yardımcı olmama izin verin.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Hizmetleriniz nelerdir?',
    'Fiyatlar nasıl?',
    'Randevu almak istiyorum',
    'No-code nedir?',
    'AI çözümleriniz',
    'İletişim bilgileri'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hizmet') || lowerMessage.includes('servis')) {
      return 'BYT Digital olarak 5 ana hizmet alanımız var:\n\n• Yapay Zeka Destekli Çözümler\n• No-Code Platform Geliştirme\n• Veri Entegrasyonu ve Otomasyon\n• API Bağlantıları ve İş Süreci Otomasyonu\n• Danışmanlık & Eğitim Hizmetleri\n\nHangi alan hakkında daha fazla bilgi almak istersiniz?';
    }
    
    if (lowerMessage.includes('fiyat') || lowerMessage.includes('ücret')) {
      return 'Fiyatlarımız projenizin kapsamına göre belirlenmektedir. Ücretsiz danışmanlık görüşmesinde ihtiyaçlarınızı analiz edip size özel teklif hazırlıyoruz. Randevu almak ister misiniz?';
    }
    
    if (lowerMessage.includes('randevu') || lowerMessage.includes('görüşme')) {
      return 'Tabii ki! Ücretsiz danışmanlık randevusu için WhatsApp üzerinden +90 (555) 123 45 67 numarasından bize ulaşabilir veya info@bytdigital.com adresine e-posta gönderebilirsiniz. Size en uygun zamanı ayarlayalım.';
    }
    
    if (lowerMessage.includes('no-code') || lowerMessage.includes('nocode')) {
      return 'No-code, kod yazmadan uygulamalar ve sistemler geliştirme yaklaşımıdır. Avantajları:\n\n• Hızlı geliştirme süreci\n• Düşük maliyet\n• Kolay bakım ve güncelleme\n• Teknik bilgi gerektirmez\n\nHangi tür uygulama geliştirmek istiyorsunuz?';
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('yapay zeka') || lowerMessage.includes('zeka')) {
      return 'AI çözümlerimizle işletmenizi geleceğe hazırlıyoruz:\n\n• Özel AI model geliştirme\n• Chatbot sistemleri\n• Veri analizi ve tahminleme\n• Süreç otomasyonu\n• Doğal dil işleme\n\nHangi alanda AI desteği almak istiyorsunuz?';
    }
    
    if (lowerMessage.includes('iletişim') || lowerMessage.includes('telefon') || lowerMessage.includes('adres')) {
      return 'İletişim bilgilerimiz:\n\n📧 E-posta: info@bytdigital.com\n📞 Telefon: +90 (555) 123 45 67\n📍 Adres: İstanbul, Türkiye\n💬 WhatsApp: +90 (555) 123 45 67\n\n24 saat içinde size geri dönüş yapıyoruz!';
    }
    
    return 'Bu konuda size daha detaylı bilgi verebilmek için uzman ekibimizle görüşmenizi öneriyorum. Ücretsiz danışmanlık randevusu almak ister misiniz? WhatsApp: +90 (555) 123 45 67';
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">BYT Digital Asistan</h3>
                <p className="text-sm opacity-90">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Hızlı sorular:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;