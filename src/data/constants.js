export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    {
        label: 'Languages',
        href: '/languages',
        subLinks: [
            { label: 'German', href: '/languages/german' },
            { label: 'IELTS', href: '/languages/ielts' },
            { label: 'TOEFL', href: '/languages/toefl' },
            { label: 'PTE', href: '/languages/pte' },
        ],
    },
    {
        label: 'Services',
        href: '/services',
        subLinks: [
            { label: 'Education Consultancy', href: '/services/education-consultancy' },
            { label: 'Application Services', href: '/services/application-services' },
            { label: 'Educational Loan Guidance', href: '/services/educational-loan-guidance' },
            { label: 'Admission Advices', href: '/services/admission-advices' },
            { label: 'Visa Services', href: '/services/visa-services' },
            { label: 'After Arrival Support', href: '/services/after-arrival-support' },
        ],
    },
    {
        label: 'Study Abroad',
        href: '/study-abroad',
        subLinks: [
            { label: 'Germany', href: '/study-abroad/germany' },
            { label: 'Finland', href: '/study-abroad/finland' },
            { label: 'Switzerland', href: '/study-abroad/switzerland' },
            { label: 'Ireland', href: '/study-abroad/ireland' },
            { label: 'Austria', href: '/study-abroad/austria' },
            { label: 'France', href: '/study-abroad/france' },
            { label: 'Sweden', href: '/study-abroad/sweden' },
            { label: 'Netherlands', href: '/study-abroad/netherlands' },
        ],
    },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
];

export const HOME_DATA = {
    hero: {
        heading: 'Step Beyond Borders with Professional Overseas Support',
        subHeading: 'Tailored training, exam prep, and consultancy for your success',
        description: '5-star customer satisfaction guaranteed.',
        buttonText: 'Enroll Now',
        buttonLink: '/contact-us',
        ratingText: '★★★★★',
    },
    whatWeDo: {
        heading: 'What We Do',
        description: "Our vision at FutureTor Immigration & Consultancy is to help India's aspiring youth carve a successful path in the global landscape",
        services: [
            {
                title: 'Visa Services',
                description: "Getting a visa for studying abroad can be challenging, and there's always the risk of your application being rejected.",
            },
            {
                title: 'Education Consulting',
                description: "Getting a visa for studying abroad can be challenging, and there's always the risk of your application being rejected.",
            },
            {
                title: 'Travel & Abroad Help',
                description: "Getting a visa for studying abroad can be challenging, and there's always the risk of your application being rejected.",
            },
        ],
    },
    stats: [
        { value: '1100+', label: 'Trusted by Students' },
        { value: '5+', label: 'Years of experience' },
        { value: '1000+', label: 'Success Visas' },
        { value: '1500+', label: 'Trusted by Students' },
    ],
    vision: {
        heading: 'Our Vision',
        paragraphs: [
            'If studying abroad has always been your dream, FutureTor provides a one-stop solution for all your questions. Overseas education can be a complex and overwhelming journey, requiring dedication and careful attention. Our professional, certified team of international education and immigration experts is committed to ensuring a smooth and hassle-free relocation process for students pursuing higher education abroad. With years of experience, FutureTor has become a trusted and respected service provider for students aspiring to study overseas.',
            'FutureTor Language Academy and Consultancy was founded with the vision of empowering India’s youth to achieve success on the global stage. Our mission is to turn the dream of global education into reality through trusted immigration and consultancy services, along with the best visa solutions. We offer top-quality overseas education guidance to help aspiring students reach their goals.',
            'FutureTor aims to be the most trusted name in Education & Career, providing comprehensive 24/7 support and a hassle-free immigration and consultancy process, free from financial concerns.'
        ],
    },
    testimonials: {
        heading: "What our students said after we helped them get into the best public universities in Germany!",
        subtitle: "+500 Happy Students",
        list: [
            {
                name: 'Smit Bhadiyadara',
                role: 'Master Student at TU Kaiserslautern',
                rating: '★★★★★',
                quote: "FutureTor is the best German class in Surat for anyone wanting to study in Germany. The professors are incredibly friendly and provide personalized guidance. The teaching quality aligns perfectly with Goethe examinations."
            },
            {
                name: 'Hardik Rangani',
                role: 'Master Student at KIT Karlsruhe',
                rating: '★★★★★',
                quote: "FutureTor is one of the most trusted institutes for learning German. You'll feel confident and stand out among others. The faculty is humble and approachable, creating a welcoming learning environment."
            },
            {
                name: 'Priya Shah',
                role: 'Bachelor at TU Munich',
                rating: '★★★★★',
                quote: "From A1 to C1, FutureTor walked me through every step. The visa process was seamless and the after-arrival support in Germany made my transition stress-free. Highly recommended!"
            },
            {
                name: 'Aakash Patel',
                role: 'IELTS 8.5 Bands · UK Visa',
                rating: '★★★★★',
                quote: "Cracked IELTS with 8.5 bands thanks to FutureTor's coaching. The speaking practice from day one built real confidence. Got admission to my dream UK university within 3 months."
            },
            {
                name: 'Riya Mehta',
                role: 'Master Student at RWTH Aachen',
                rating: '★★★★★',
                quote: "The Germany branch office is a real game-changer. Real on-ground support, accommodation guidance, bank account help — everything was handled. FutureTor truly cares."
            },
            {
                name: 'Karan Sharma',
                role: 'PTE 79+ · Australia PR Track',
                rating: '★★★★★',
                quote: "Scored 79+ in PTE on my first attempt. The mock tests, personalized feedback, and small batch sizes make all the difference. Worth every penny."
            },
            {
                name: 'Neha Desai',
                role: 'Bachelor at University of Stuttgart',
                rating: '★★★★★',
                quote: "Beyond just language coaching, FutureTor helped me with university selection, SOP writing, and visa interview prep. Their end-to-end approach is unmatched in Surat."
            },
            {
                name: 'Vivek Patel',
                role: 'Master Student at TU Berlin',
                rating: '★★★★★',
                quote: "100% visa success rate is real. The team prepared my financial documents perfectly and coached me for the interview. Cleared the visa on first attempt without any hassle."
            }
        ]
    }
};

export const GERMAN_DATA = {
    title: "German Language",
    whyChooseUs: {
        heading: "Why Choose Us for German Language?",
        points: [
            { title: "Goethe-Institute Aligned Curriculum", desc: "Our courses are designed in accordance with international standards, giving you the best foundation in the German language." },
            { title: "Small Class Sizes for Better Attention", desc: "We keep our classes small to ensure you get personalized support and focused learning." },
            { title: "Focus on All Four Skills", desc: "Reading, Writing, Listening, and Speaking — we emphasize a well-rounded approach to mastering German." },
            { title: "Real-World Application", desc: "You’ll not only learn the language but also gain cultural insights and practical language use for living, working, or studying in Germany." },
            { title: "Technical Focus", desc: "We specialize in providing tailored German language courses with a focus on technical vocabulary, helping professionals and students excel in specialized fields such as engineering, IT, business, and more." },
            { title: "Constant Support", desc: "We offer 24/7 support, with practice sessions and extra help whenever needed, ensuring no one is left behind." },
            { title: "Affordable Fees", desc: "Quality German language education doesn't have to break the bank — we offer competitive pricing and flexible payment plans." }
        ]
    },
    benefits: {
        heading: "Benefits of learning The German language:",
        points: [
            { title: "Access to Career Opportunities", desc: "German is widely spoken in the business world, particularly in fields like engineering, technology, finance, and science. Mastering German opens up job opportunities in Germany, Austria, Switzerland, and other German-speaking countries." },
            { title: "Widely Used in Research", desc: "German is a dominant language in academic research." },
            { title: "Access to Scholarships", desc: "Many German-speaking universities offer scholarships to international students." },
            { title: "Study Abroad Opportunities", desc: "Opens doors to studying in top German-speaking universities." },
            { title: "Tech Industry Advantage", desc: "German is a key language in tech and engineering sectors." }
        ]
    }
};

export const IELTS_DATA = {
    title: "IELTS & PTE Training",
    description: "We specialize in IELTS and PTE preparation, focusing on the four key modules: Reading, Listening, Writing, and Speaking. From day one, we emphasize speaking practice to build confidence. Our highly skilled coaching faculty and excellent results are a testament to the quality of instruction we provide.",
    stats: [
        { value: "550+", label: "Happy Students" },
        { value: "10+", label: "Years of experience" }
    ],
    scoreOverview: [
        "IELTS score is graded on a band scale from 0-9",
        "Generally the score required for UG is atleast 6 bands & for PG is 6.5 or more",
        "It usually takes 15 days to receive the hard copy of the result",
        "The score is valid for 2 years"
    ],
    modules: [
        { title: "Listening", desc: "Understand various English accents and dialogues." },
        { title: "Reading", desc: "Analyze complex texts and interpret information quickly." },
        { title: "Writing", desc: "Express ideas clearly and coherently in written English." },
        { title: "Speaking", desc: "Communicate fluently and build confidence from day one." }
    ]
};

export const SERVICES_DATA = {
    'education-consultancy': {
        title: "Education Consultancy",
        description1: "FutureTor is an independent and Top Study Visa Consultant that helps students/parents with educational planning and awareness program about your course and career.",
        adviceBasis: [
            "Popular courses in that country",
            "Students caliber and interest",
            "Budget and financial requirement",
            "Latest trending Professional course"
        ],
        description2: "Our team of professional experts is here to answer all your career and college-related queries. Students can ask questions, participate in discussions, and stay updated with the latest news and articles related to their education interests. FutureTor is India’s smartest college gateway, combining deep domain knowledge in higher education with technology, innovation, and credibility."
    },
    'application-services': {
        title: "Application Services",
        description: "We offer a wide range of courses from prestigious global universities. Filling out university applications can be challenging and requires a thorough and meticulous approach. We submit applications in line with each university's intake schedule.",
        helpPoints: [
            "Choosing the right universities",
            "Fill up your Application Form in accordance with requirement",
            "Professional Statement of Purpose (SOP) tailored for you",
            "Updates on Immigration procedure dates"
        ]
    },
    'educational-loan-guidance': {
        title: "Educational Loan Guidance",
        description: "With FutureTor by your side, financial concerns won’t hinder your career aspirations. We provide a dedicated approach to help secure the most feasible financial support.",
        services: [
            "Education Loan related complete information and guidance",
            "Recommending Scholarship beneficial study abroad programs and Universities",
            "Tie-up with reputed banks",
            "Simple and hassle-free education loan processing",
            "Assistance about disclosure of financial assets for Visa Application"
        ]
    },
    'admission-advices': {
        title: "Admission Advices",
        description: "At FutureTor, we understand that applying to study abroad can be overwhelming. Every detail matters. Our expert team offers end-to-end application services.",
        points: [
            { title: "University Selection", desc: "Helping you choose the best-fit institutions based on your goals, interests, and budget." },
            { title: "Course Recommendation", desc: "Assisting you in selecting the right course to align with your career aspirations." },
            { title: "Application Assistance", desc: "From filling out forms to writing compelling personal statements." },
            { title: "Document Review", desc: "Ensuring all necessary documents meet university requirements." },
            { title: "Visa Application Support", desc: "Offering guidance and assistance for a hassle-free process." }
        ]
    },
    'visa-services': {
        title: "Visa Services",
        description: "Obtaining a visa for studying abroad can be challenging. FutureTor boasts a 100% success rate in visa clearance for study abroad programs.",
        services: [
            "Getting your Visa file ready",
            "Helping you in Visa Interview preparation",
            "Financial guidance for VISA application",
            "Timely submission of every document in context of Visa Formalities"
        ]
    },
    'after-arrival-support': {
        title: "After Arrival Support",
        description: "Our Post landing assistance ensures the smooth transition in the new country. The migration process does not end with arrival.",
        services: [
            "Airport pick up support",
            "Temporary accommodation",
            "Bank account opening",
            "Guidance on part time job etc."
        ]
    }
};

export const ABOUT_DATA = {
    title: "About Us",
    description: "FutureTor is one of those countless immigration companies in India, and we may not always appear on the first page of search results. However, you’ve likely come to us through a recommendation. Our work speaks for itself.",
    promise: {
        heading: "Our Promise",
        text: "We put YOU first. We put ourselves in your shoes. We see the dreams you see; we consider all your limitations and we have full care for your pocket. We are here to simplify the immigration and global education process.",
        points: [
            "Worldwide network of Consultants, University Representatives & Legal Experts",
            "Shortest time span for VISA finalization",
            "24X7 Support & Guidance"
        ]
    },
    reasons: {
        heading: "What makes us Number 1 Consultants?",
        list: [
            "Branch office in Germany",
            "Lowest Charges & Fees compared to other consultants"
        ]
    }
};

export const CONTACT_DATA = {
    title: "Contact Us",
    description: "For personalized support in language courses and consultancy services, reach out to us today!",
    inquiryFields: [
        "Your First Name",
        "Your Email Address*",
        "Your preferred study destination*",
        "Course*",
        "Message*"
    ]
};

export const FOOTER_DATA = {
    vision: "FutureTor evolved with the vision to empower the aspiring youth of India to position themselves successfully in the global landscape.",
    address: "406, AR Mall, Opp. Panvel Point, Mota Varachha, 394105, Surat",
    consultancy: "Consultancy",
    location: "LOCATION",
    email: "info@futuretor.com",
    phones: ["+91 9824939425", "+49 1590 2054603"]
};

export const LANGUAGES_DATA = {
    'german': GERMAN_DATA,
    'ielts-toefl-pte': IELTS_DATA
};

export const TESTIMONIALS_SECTION = HOME_DATA.testimonials.list;

