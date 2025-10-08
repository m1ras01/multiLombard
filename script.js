// Translations object
const translations = {
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.services': 'Услуги',
        'nav.contacts': 'Контакты',
        
        // Logo
        'logo.title': 'Мульти ломбард',
        'logo.subtitle': 'Надежный партнер',
        
        // Banner
        'banner.title': 'Мульти ломбард',
        'banner.subtitle': 'Быстрые займы под залог золота и других ценностей. Надежный партнер в Жамбылской области.',
        'banner.feature1': 'Мгновенная выдача',
        'banner.feature2': 'Безопасное хранение',
        'banner.feature3': 'Выгодные ставки',
        'banner.btn1': 'Наши услуги',
        'banner.btn2': 'Связаться с нами',
        
        // About
        'about.title': 'О компании',
        'about.subtitle': 'Мульти ломбард - это надежный партнер в решении финансовых вопросов',
        'about.text1': 'Мульти ломбард работает уже более 10 лет. За это время мы зарекомендовали себя как надежный и честный партнер для жителей Жамбылской области.',
        'about.text2': 'Мы специализируемся на оценке и приеме в залог драгоценных металлов, ювелирных изделий, часов и других ценных предметов. Наш офис удобно расположен в центре города.',
        'about.text3': 'Команда профессиональных оценщиков с многолетним опытом гарантирует справедливую оценку ваших ценностей, а современные системы безопасности обеспечивают их надежное хранение.',
        'about.stat1': 'лет работы',
        'about.stat2': 'довольных клиентов',
        'about.stat3': 'безопасность',
        'about.stat4': 'надежность',
        
        // Services
        'services.title': 'Наши услуги',
        'services.subtitle': 'Широкий спектр финансовых услуг для решения ваших задач',
        'services.micro.title': 'Микрокредиты',
        'services.micro.desc': 'Быстрые займы наличными без справок и поручителей. Получите деньги в день обращения.',
        'services.micro.feature1': 'Сумма от 10 000 до 500 000 тенге',
        'services.micro.feature2': 'Срок от 7 дней до 12 месяцев',
        'services.micro.feature3': 'Одобрение за 15 минут',
        'services.micro.feature4': 'Без справок о доходах',
        'services.gold.title': 'Залог золота',
        'services.gold.desc': 'Принимаем в залог золотые изделия, монеты и слитки. Справедливая оценка по рыночной стоимости.',
        'services.gold.feature1': 'Золотые украшения и монеты',
        'services.gold.feature2': 'Оценка по курсу ЦБ РК',
        'services.gold.feature3': 'Безопасное хранение',
        'services.gold.feature4': 'Возможность выкупа в любое время',
        'services.tech.title': 'Оценка техники',
        'services.tech.desc': 'Профессиональная оценка и прием в залог современной электроники и бытовой техники.',
        'services.tech.feature1': 'Смартфоны и планшеты',
        'services.tech.feature2': 'Ноутбуки и компьютеры',
        'services.tech.feature3': 'Бытовая техника',
        'services.tech.feature4': 'Фото и видео оборудование',
        'services.btn': 'Узнать больше',
        
        // Contacts
        'contacts.title': 'Контакты',
        'contacts.subtitle': 'Свяжитесь с нами любым удобным способом',
        'contacts.phone.title': 'Телефон',
        'contacts.phone.btn': 'Позвонить',
        'contacts.whatsapp.title': 'WhatsApp',
        'contacts.whatsapp.btn': 'Написать в WhatsApp',
        'contacts.address.title': 'Адрес',
        'contacts.address.region': 'Жамбылская обл, Таласский район',
        'contacts.address.street': 'ул. Молдагулова 33',
        'contacts.address.btn': 'Показать карту',
        'contacts.hours.title': 'Режим работы',
        'contacts.hours.weekdays': 'Пн-Пт: 9:00 - 19:00',
        'contacts.hours.weekends': 'Сб-Вс: 10:00 - 18:00',
        'contacts.map.title': 'Как нас найти',
        'contacts.map.desc': 'Мы находимся в центре города, на улице Молдагулова 33. Удобная парковка и доступность общественным транспортом.',
        
        // Footer
        'footer.logo.title': 'Мульти ломбард',
        'footer.logo.subtitle': 'Надежный партнер',
        'footer.description': 'Мульти ломбард. Быстрые займы под залог с выгодными условиями.',
        'footer.nav.title': 'Навигация',
        'footer.nav.about': 'О ломбарде',
        'footer.services.title': 'Услуги',
        'footer.services.micro': 'Микрокредиты',
        'footer.services.gold': 'Залог золота',
        'footer.documents.title': 'Документы',
        'footer.documents.rules': 'Правила предоставления микрокредитов',
        'footer.documents.contract': 'Условия договора',
        'footer.documents.license': 'Лицензия',
        'footer.contacts.title': 'Контакты',
        'footer.contacts.address': 'ул. Молдагулова 33',
        'footer.copyright': '© 2024 Мульти ломбард. Все права защищены.',
        'footer.privacy': 'Политика конфиденциальности',
        
        // Pages
        'page.back': 'На главную',
        'page.rules.title': 'Правила предоставления микрокредитов',
        'page.rules.subtitle': 'Документ регулирует условия предоставления микрокредитов',
        'page.contract.title': 'Условия договора',
        'page.contract.subtitle': 'Договор присоединения для микрокредитов',
        'page.license.title': 'Лицензия',
        'page.license.subtitle': 'Официальные документы и разрешения',
        'page.download': 'Скачать PDF документ',
        'page.open': 'Открыть в новой вкладке',
        'page.rules.document.title': 'Правила Мульти Ломбард',
        'page.rules.document.desc': 'Полный текст правил предоставления микрокредитов',
        'page.rules.sections.title': 'Основные положения:',
        'page.rules.sections.item1': 'Условия предоставления микрокредитов',
        'page.rules.sections.item2': 'Требования к заемщикам',
        'page.rules.sections.item3': 'Процедура рассмотрения заявок',
        'page.rules.sections.item4': 'Порядок погашения кредитов',
        'page.rules.sections.item5': 'Ответственность сторон',
        'page.license.document.title': 'Лицензия № 02.21.0004.L',
        'page.license.document.desc': 'Лицензия на осуществление микрофинансовой деятельности',
        'page.license.info.title': 'Информация о лицензии:',
        'page.license.info.number': 'Номер лицензии:',
        'page.license.info.date': 'Дата выдачи:',
        'page.license.info.activity': 'Вид деятельности:',
        'page.license.info.activity.desc': 'Микрофинансовая деятельность',
        'page.license.info.status': 'Статус:',
        'page.license.info.status.desc': 'Действующая',
        'page.license.info.issuer': 'Орган выдачи:',
        'page.license.info.issuer.desc': 'Агентство Республики Казахстан по регулированию и развитию финансового рынка'
    },
    kz: {
        // Navigation
        'nav.home': 'Басты бет',
        'nav.services': 'Қызметтер',
        'nav.contacts': 'Байланыс',
        
        // Logo
        'logo.title': 'Мульти ломбард',
        'logo.subtitle': 'Сенімді серіктес',
        
        // Banner
        'banner.title': 'Мульти ломбард',
        'banner.subtitle': 'Алтын және басқа құндылықтарға қаржылық несие. Жамбыл облысындағы сенімді серіктес.',
        'banner.feature1': 'Лезде беру',
        'banner.feature2': 'Қауіпсіз сақтау',
        'banner.feature3': 'Тиімді мөлшерлемелер',
        'banner.btn1': 'Біздің қызметтер',
        'banner.btn2': 'Бізбен байланысыңыз',
        
        // About
        'about.title': 'Компания туралы',
        'about.subtitle': 'Мульти ломбард - қаржылық мәселелерді шешудегі сенімді серіктес',
        'about.text1': 'Мульти ломбард 10 жылдан астам жұмыс істейді. Осы уақыт ішінде біз Жамбыл облысы тұрғындары үшін сенімді және адал серіктес ретінде өз кілтімізді таныттық.',
        'about.text2': 'Біз қымбатты металдар, зергерлік бұйымдар, сағаттар және басқа құндылықтарды бағалау және қаржылық несиеге алу бойынша маманданамыз. Біздің кеңсе қала орталығында ыңғайлы орналасқан.',
        'about.text3': 'Көпжылдық тәжірибесі бар кәсіби бағалаушылар тобы сіздің құндылықтарыңызды әділ бағалауды кепілдейді, ал заманауи қауіпсіздік жүйелері олардың сенімді сақталуын қамтамасыз етеді.',
        'about.stat1': 'жыл жұмыс',
        'about.stat2': 'қанағаттанған клиент',
        'about.stat3': 'қауіпсіздік',
        'about.stat4': 'сенімділік',
        
        // Services
        'services.title': 'Біздің қызметтер',
        'services.subtitle': 'Сіздің мәселелеріңізді шешу үшін қаржылық қызметтердің кең ауқымы',
        'services.micro.title': 'Микрокредиттер',
        'services.micro.desc': 'Справкалар мен кепілдіктерсіз нақты ақшаға жылдам несие. Арыз берген күні ақша алыңыз.',
        'services.micro.feature1': '10 000-ден 500 000 теңгеге дейін',
        'services.micro.feature2': '7 күннен 12 айға дейін',
        'services.micro.feature3': '15 минутта мақұлдау',
        'services.micro.feature4': 'Кіріс туралы справкаларсыз',
        'services.gold.title': 'Алтынға қаржылық несие',
        'services.gold.desc': 'Алтын бұйымдар, монеталар және құймаларды қаржылық несиеге қабылдаймыз. Нарықтық құн бойынша әділ бағалау.',
        'services.gold.feature1': 'Алтын зергерлік бұйымдар мен монеталар',
        'services.gold.feature2': 'ҚР ҰБ курсы бойынша бағалау',
        'services.gold.feature3': 'Қауіпсіз сақтау',
        'services.gold.feature4': 'Кез келген уақытта сатып алу мүмкіндігі',
        'services.tech.title': 'Техниканы бағалау',
        'services.tech.desc': 'Заманауи электроника мен тұрмыстық техниканы кәсіби бағалау және қаржылық несиеге қабылдау.',
        'services.tech.feature1': 'Смартфондар мен планшеттер',
        'services.tech.feature2': 'Ноутбуктер мен компьютерлер',
        'services.tech.feature3': 'Тұрмыстық техника',
        'services.tech.feature4': 'Фото және видео жабдықтары',
        'services.btn': 'Толығырақ білу',
        
        // Contacts
        'contacts.title': 'Байланыс',
        'contacts.subtitle': 'Бізбен ыңғайлы тәсілмен байланысыңыз',
        'contacts.phone.title': 'Телефон',
        'contacts.phone.btn': 'Қоңырау шалу',
        'contacts.whatsapp.title': 'WhatsApp',
        'contacts.whatsapp.btn': 'WhatsApp-та жазу',
        'contacts.address.title': 'Мекенжай',
        'contacts.address.region': 'Жамбыл облысы, Талас ауданы',
        'contacts.address.street': 'Молдагулова көш. 33',
        'contacts.address.btn': 'Картаны көрсету',
        'contacts.hours.title': 'Жұмыс уақыты',
        'contacts.hours.weekdays': 'Дс-Жм: 9:00 - 19:00',
        'contacts.hours.weekends': 'Сб-Жс: 10:00 - 18:00',
        'contacts.map.title': 'Бізді қалай табуға болады',
        'contacts.map.desc': 'Біз қала орталығында, Молдагулова көшесі 33-те орналасқанбыз. Ыңғайлы автотұрақ және қоғамдық көлікпен қол жетімділік.',
        
        // Footer
        'footer.logo.title': 'Мульти ломбард',
        'footer.logo.subtitle': 'Сенімді серіктес',
        'footer.description': 'Мульти ломбард. Тиімді шарттармен қаржылық несие.',
        'footer.nav.title': 'Навигация',
        'footer.nav.about': 'Ломбард туралы',
        'footer.services.title': 'Қызметтер',
        'footer.services.micro': 'Микрокредиттер',
        'footer.services.gold': 'Алтынға қаржылық несие',
        'footer.documents.title': 'Құжаттар',
        'footer.documents.rules': 'Микрокредиттер беру ережелері',
        'footer.documents.contract': 'Келісім шарт шарттары',
        'footer.documents.license': 'Лицензия',
        'footer.contacts.title': 'Байланыс',
        'footer.contacts.address': 'Молдагулова көш. 33',
        'footer.copyright': '© 2024 Мульти ломбард. Барлық құқықтар қорғалған.',
        'footer.privacy': 'Құпиялылық саясаты',
        
        // Pages
        'page.back': 'Басты бетке',
        'page.rules.title': 'Микрокредиттер беру ережелері',
        'page.rules.subtitle': 'Микрокредиттер беру шарттарын реттейтін құжат',
        'page.contract.title': 'Келісім шарт шарттары',
        'page.contract.subtitle': 'Микрокредиттерге қосылу келісім шарты',
        'page.license.title': 'Лицензия',
        'page.license.subtitle': 'Ресми құжаттар мен рұқсаттар',
        'page.download': 'PDF құжатты жүктеу',
        'page.open': 'Жаңа қойындыда ашу',
        'page.rules.document.title': 'Мульти ломбард ережелері',
        'page.rules.document.desc': 'Микрокредиттер беру ережелерінің толық мәтіні',
        'page.rules.sections.title': 'Негізгі ережелер:',
        'page.rules.sections.item1': 'Микрокредиттер беру шарттары',
        'page.rules.sections.item2': 'Қарыз алушыларға қойылатын талаптар',
        'page.rules.sections.item3': 'Өтініштерді қарау тәртібі',
        'page.rules.sections.item4': 'Кредиттерді өтеу тәртібі',
        'page.rules.sections.item5': 'Тараптардың жауапкершілігі',
        'page.license.document.title': 'Лицензия № 02.21.0004.L',
        'page.license.document.desc': 'Микрофинансовая қызмет көрсету лицензиясы',
        'page.license.info.title': 'Лицензия туралы ақпарат:',
        'page.license.info.number': 'Лицензия нөмірі:',
        'page.license.info.date': 'Берілген күні:',
        'page.license.info.activity': 'Қызмет түрі:',
        'page.license.info.activity.desc': 'Микрофинансовая қызмет',
        'page.license.info.status': 'Мәртебе:',
        'page.license.info.status.desc': 'Белсенді',
        'page.license.info.issuer': 'Беруші орган:',
        'page.license.info.issuer.desc': 'Қазақстан Республикасының қаржы нарығын реттеу және дамыту агенттігі'
    }
};

// Current language
let currentLang = 'ru';

// Language switching functionality
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
    switchLanguage(savedLang);

    // Navigation functionality
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Close mobile menu if open
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .stat-item, .feature-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add typing effect to banner title
    const bannerTitle = document.querySelector('.banner-text h2');
    if (bannerTitle) {
        const text = bannerTitle.textContent;
        bannerTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                bannerTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add counter animation to stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/\D/g, ''));
            const suffix = stat.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + suffix;
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Add parallax effect to banner section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.hero-banner');
        if (banner) {
            banner.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Global functions for button actions
function callPhone() {
    window.location.href = 'tel:+77750070257';
}

function openWhatsApp() {
    window.open('https://wa.me/77750070257', '_blank');
}

function showMap() {
    const address = 'Жамбылская обл, Таласский район, г Каратау, ул Молдагулова 33';
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
}

// Global function for external calls
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}