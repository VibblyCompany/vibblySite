import React, { useState } from 'react';
import { Send, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormData(prev => ({ ...prev, submitted: true }));
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', submitted: false });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-900/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
            {formData.submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="mb-6 p-3 rounded-full bg-green-500/20 text-green-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.contact.success.title}</h3>
                <p className="text-gray-400">{t.contact.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">{t.contact.schedule.title}</h3>
              <button className="w-full flex items-center justify-center bg-violet-600/20 border border-violet-500/30 text-violet-300 py-3 px-6 rounded-lg font-medium hover:bg-violet-600/30 transition-all duration-300">
                <Calendar className="mr-2 w-5 h-5" />
                {t.contact.schedule.button}
              </button>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t.contact.info.email}</p>
                  <p className="text-violet-400">vibbly.contact@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t.contact.info.phone}</p>
                  <p className="text-violet-400">+48 123 456 789</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t.contact.info.location}</p>
                  <p className="text-white">Warsaw, Poland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;