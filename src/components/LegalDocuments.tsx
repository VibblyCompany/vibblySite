import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Shield, Cookie, Lock, ChevronRight, X, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { useLocation, useNavigate } from 'react-router-dom';

interface DocumentSection {
  id: string;
  title: string;
  content: string;
  subsections?: DocumentSection[];
}

interface Document {
  id: string;
  title: string;
  icon: React.ReactNode;
  sections: DocumentSection[];
  lastUpdated: string;
}

const LegalDocuments: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const documents: Document[] = [
    {
      id: 'terms',
      title: language === 'pl' ? 'Regulamin świadczenia usług' : 'Terms of Service',
      icon: <FileText className="w-6 h-6" />,
      sections: [
        {
          id: '1',
          title: language === 'pl' ? '§1 Postanowienia ogólne' : '§1 General Provisions',
          content: language === 'pl'
            ? 'Niniejszy Regulamin określa zasady korzystania z usług świadczonych drogą elektroniczną przez Vibbly.\n\nUsługodawcą jest Vibbly, e-mail: vibbly.contact@gmail.com.\n\nKorzystanie z usług oznacza akceptację niniejszego Regulaminu.'
            : 'These Terms of Service define the rules for using the services provided electronically by Vibbly.\n\nThe service provider is Vibbly, email: vibbly.contact@gmail.com.\n\nUsing the services signifies acceptance of these Terms.'
        },
        {
          id: '2',
          title: language === 'pl' ? '§2 Zakres usług' : '§2 Scope of Services',
          content: language === 'pl'
            ? 'Usługodawca świadczy usługi polegające na projektowaniu, tworzeniu oraz wdrażaniu stron internetowych na zamówienie.\n\nSzczegóły dotyczące zakresu, terminu realizacji i wynagrodzenia są określane indywidualnie z klientem w umowie.'
            : 'The Service Provider offers services consisting of designing, developing, and implementing websites on demand.\n\nDetails regarding scope, deadlines, and remuneration are specified individually with the client in a separate agreement.'
        },
        {
          id: '3',
          title: language === 'pl' ? '§3 Warunki techniczne' : '§3 Technical Requirements',
          content: language === 'pl'
            ? 'Użytkownik zobowiązany jest do korzystania z aktualnego oprogramowania przeglądarki internetowej oraz dostępu do internetu.\n\nUsługodawca nie ponosi odpowiedzialności za zakłócenia wynikające z problemów technicznych po stronie użytkownika.'
            : 'The User is required to use up-to-date web browser software and have internet access.\n\nThe Service Provider is not responsible for disruptions caused by technical issues on the User’s side.'
        },
        {
          id: '4',
          title: language === 'pl' ? '§4 Płatności' : '§4 Payments',
          content: language === 'pl'
            ? 'Wynagrodzenie ustalane jest indywidualnie.\n\nWarunki płatności określane są w umowie zawieranej z klientem.\n\nW przypadku opóźnienia w płatności Usługodawca zastrzega sobie prawo do wstrzymania realizacji usługi.'
            : 'Remuneration is agreed individually.\n\nPayment terms are specified in the agreement signed with the client.\n\nIn the event of delayed payment, the Service Provider reserves the right to suspend service delivery.'
        },
        {
          id: '5',
          title: language === 'pl' ? '§5 Reklamacje' : '§5 Complaints',
          content: language === 'pl'
            ? 'Klient ma prawo do zgłoszenia reklamacji w terminie 14 dni od daty wykonania usługi.\n\nReklamacja powinna zawierać opis nieprawidłowości oraz dane kontaktowe.\n\nUsługodawca zobowiązuje się rozpatrzyć reklamację w terminie 14 dni roboczych.'
            : 'The client has the right to file a complaint within 14 days from the date the service was performed.\n\nThe complaint should include a description of the issues and contact details.\n\nThe Service Provider undertakes to respond within 14 working days.'
        },
        {
          id: '6',
          title: language === 'pl' ? '§6 Postanowienia końcowe' : '§6 Final Provisions',
          content: language === 'pl'
            ? 'W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.\n\nRegulamin wchodzi w życie z dniem publikacji na stronie internetowej.'
            : 'In matters not regulated by these Terms, the provisions of the Civil Code and the Act on Providing Services by Electronic Means shall apply.\n\nThe Terms come into force on the day of publication on the website.'
        }
      ],
      lastUpdated: '2025-06-03'
    },
    {
      id: 'privacy',
      title: language === 'pl' ? 'Polityka Prywatności' : 'Privacy Policy',
      icon: <Shield className="w-6 h-6" />,
      sections: [
        {
          id: '1',
          title: language === 'pl' ? '§1 Administrator danych' : '§1 Data Controller',
          content: language === 'pl'
            ? 'Administratorem danych osobowych jest Vibbly, e-mail: vibbly.contact@gmail.com'
            : 'The controller of personal data is Vibbly email: vibbly.contact@gmail.com.'
        },
        {
          id: '2',
          title: language === 'pl' ? '§2 Zakres przetwarzanych danych' : '§2 Scope of Data Processing',
          content: language === 'pl'
            ? 'Przetwarzamy następujące dane: imię i nazwisko, adres e-mail, numer telefonu, adres IP, dane zawarte w korespondencji.'
            : 'We process the following data: name and surname, email address, phone number, IP address, data contained in correspondence.'
        },
        {
          id: '3',
          title: language === 'pl' ? '§3 Cel przetwarzania danych' : '§3 Purpose of Data Processing',
          content: language === 'pl'
            ? 'Dane osobowe są przetwarzane w celu: a) realizacji usług, b) kontaktu z klientem, c) realizacji obowiązków prawnych, d) marketingu bezpośredniego (na podstawie zgody).'
            : 'Personal data are processed for the following purposes: a) provision of services, b) contacting the client, c) fulfilling legal obligations, d) direct marketing (based on consent).'
        },
        {
          id: '4',
          title: language === 'pl' ? '§4 Podstawa prawna przetwarzania' : '§4 Legal Basis for Processing',
          content: language === 'pl'
            ? 'Art. 6 ust. 1 lit. b RODO – wykonanie umowy.\nArt. 6 ust. 1 lit. c RODO – obowiązek prawny.\nArt. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą.\nArt. 6 ust. 1 lit. f RODO – uzasadniony interes administratora.'
            : 'Art. 6(1)(b) GDPR – performance of a contract.\nArt. 6(1)(c) GDPR – legal obligation.\nArt. 6(1)(a) GDPR – data subject’s consent.\nArt. 6(1)(f) GDPR – legitimate interests pursued by the controller.'
        },
        {
          id: '5',
          title: language === 'pl' ? '§5 Prawa osoby, której dane dotyczą' : '§5 Rights of the Data Subject',
          content: language === 'pl'
            ? 'Masz prawo do: – dostępu do swoich danych, – sprostowania danych, – usunięcia danych („prawo do bycia zapomnianym”), – ograniczenia przetwarzania, – sprzeciwu, – przenoszenia danych, – wniesienia skargi do Prezesa UODO.'
            : 'You have the right to: – access your data, – rectify data, – erase data (“right to be forgotten”), – restrict processing, – object, – data portability, – lodge a complaint with the Data Protection Authority.'
        },
        {
          id: '6',
          title: language === 'pl' ? '§6 Przechowywanie danych' : '§6 Data Retention',
          content: language === 'pl'
            ? 'Dane przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, a także zgodnie z obowiązującym prawem.'
            : 'Data are stored for the period necessary to achieve the purposes for which they were collected, and in accordance with applicable law.'
        }
      ],
      lastUpdated: '2025-06-03'
    },
    {
      id: 'cookies',
      title: language === 'pl' ? 'Polityka Cookies' : 'Cookie Policy',
      icon: <Cookie className="w-6 h-6" />,
      sections: [
        {
          id: '1',
          title: language === 'pl' ? '§1 Czym są pliki cookies?' : '§1 What are cookies?',
          content: language === 'pl'
            ? 'Cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika. Służą one do rozpoznawania użytkownika i dostosowania zawartości strony do jego preferencji.'
            : 'Cookies are small text files stored on the user’s device. They are used to recognize the user and adjust the website content to their preferences.'
        },
        {
          id: '2',
          title: language === 'pl' ? '§2 Rodzaje wykorzystywanych cookies' : '§2 Types of Cookies Used',
          content: language === 'pl'
            ? 'Cookies sesyjne – usuwane po zamknięciu przeglądarki.\nCookies stałe – przechowywane przez określony czas lub do ich ręcznego usunięcia.\nCookies analityczne – np. Google Analytics.\nCookies funkcjonalne – umożliwiające zapamiętywanie ustawień użytkownika.'
            : 'Session cookies – deleted after the browser is closed.\nPersistent cookies – stored for a specific period or until manually deleted.\nAnalytical cookies – e.g., Google Analytics.\nFunctional cookies – enable saving user preferences.'
        },
        {
          id: '3',
          title: language === 'pl' ? '§3 Zgoda na cookies' : '§3 Consent to Cookies',
          content: language === 'pl'
            ? 'Użytkownik wyraża zgodę na używanie plików cookies poprzez odpowiednie ustawienia przeglądarki lub akceptację komunikatu na stronie.'
            : 'The user consents to the use of cookies by configuring browser settings or accepting the message displayed on the site.'
        },
        {
          id: '4',
          title: language === 'pl' ? '§4 Zarządzanie cookies' : '§4 Managing Cookies',
          content: language === 'pl'
            ? 'Użytkownik może samodzielnie zmienić ustawienia dotyczące cookies w przeglądarce internetowej, w tym je zablokować.'
            : 'The user may change cookie settings in the browser at any time, including blocking them.'
        }
      ],
      lastUpdated: '2025-06-03'
    },
    {
      id: 'gdpr',
      title: language === 'pl' ? 'Zgodność z RODO' : 'GDPR Compliance',
      icon: <Lock className="w-6 h-6" />,
      sections: [
        {
          id: '1',
          title: language === 'pl' ? '§1 Zasady przetwarzania danych osobowych' : '§1 Principles of Personal Data Processing',
          content: language === 'pl'
            ? 'Zbieranie danych odbywa się w sposób przejrzysty i zgodny z prawem.\nDane są zbierane w konkretnych, jasno określonych celach.\nZakres danych ograniczony jest do niezbędnego minimum.\nDane są prawidłowe i aktualizowane w razie potrzeby.\nDane są przechowywane tylko przez okres niezbędny do realizacji celów.\nDane są chronione przed nieuprawnionym dostępem lub ujawnieniem.'
            : 'Data is collected transparently and lawfully.\nData is collected for specific, clearly defined purposes.\nThe scope of data is limited to the necessary minimum.\nData is accurate and updated when necessary.\nData is stored only for the period necessary to achieve the purposes.\nData is protected against unauthorized access or disclosure.'
        },
        {
          id: '2',
          title: language === 'pl' ? '§2 Środki techniczne i organizacyjne' : '§2 Technical and Organizational Measures',
          content: language === 'pl'
            ? 'Administrator wdraża odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa danych osobowych, w tym: – szyfrowanie transmisji danych (SSL), – dostęp do danych wyłącznie przez upoważnione osoby, – regularne aktualizacje oprogramowania i systemów zabezpieczeń.'
            : 'The controller implements appropriate technical and organizational measures to ensure the security of personal data, including: – data transmission encryption (SSL), – access to data only by authorized persons, – regular updates of software and security systems.'
        }
      ],
      lastUpdated: '2025-06-03'
    }
  ];
  
  
  
  // Obsługa hash w URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const doc = documents.find(d => d.id === hash);
      if (doc) {
        setSelectedDoc(doc);
      }
    }
  }, [location.hash]);

  // Obsługa zamknięcia modalu
  const handleCloseModal = () => {
    setSelectedDoc(null);
    navigate('/legal', { replace: true });
  };

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDocumentContent = (sections: DocumentSection[]) => {
    return (
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id} className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-800/50 pb-2">
              {section.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {section.content}
            </p>
            {section.subsections && (
              <div className="ml-6 space-y-4 mt-4">
                {section.subsections.map((subsection) => (
                  <div key={subsection.id} className="space-y-2">
                    <h4 className="text-lg font-medium text-violet-400">
                      {subsection.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-950 to-gray-900 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pb-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
            {language === 'pl' ? 'Dokumenty Prawne' : 'Legal Documents'}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'pl' 
              ? 'Zapoznaj się z naszymi dokumentami prawnymi i regulaminami' 
              : 'Review our legal documents and regulations'}
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <input
              type="text"
              placeholder={language === 'pl' ? 'Szukaj dokumentów...' : 'Search documents...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 backdrop-blur-sm"
            />
          </motion.div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => {
                    setSelectedDoc(doc);
                    navigate(`/legal#${doc.id}`, { replace: true });
                  }}
                  className="w-full bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-left transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-900/20 group-hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/10">
                      {doc.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {language === 'pl' ? 'Ostatnia aktualizacja' : 'Last updated'}: {doc.lastUpdated}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Document Modal */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-800/50 shadow-2xl"
              >
                <div className="p-6 border-b border-gray-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                      {selectedDoc.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedDoc.title}</h2>
                      <p className="text-sm text-gray-400 mt-1">
                        {language === 'pl' ? 'Ostatnia aktualizacja' : 'Last updated'}: {selectedDoc.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
                  <div className="prose prose-invert max-w-none">
                    {renderDocumentContent(selectedDoc.sections)}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LegalDocuments; 