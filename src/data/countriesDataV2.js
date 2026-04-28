import germanyUni1 from '../assets/universities/germany/Mediadesign-Hochschule.webp';
import germanyUni2 from '../assets/universities/germany/EU-Business-School-logo.webp';
import germanyUni3 from '../assets/universities/germany/mdh-university-of-applied-sciences.webp';
import germanyUni4 from '../assets/universities/germany/Munich-Business-School-logo.webp';
import germanyUni5 from '../assets/universities/germany/GISMA.webp';
import germanyUni6 from '../assets/universities/germany/Arden-University.webp';
import germanyUni7 from '../assets/universities/germany/IUBH-logo.webp';

export const COUNTRIES_DATA_ENHANCED = {
    germany: {
        // Basic Info
        name: 'Germany',
        slug: 'germany',
        heroIcon: 'noto:flag-germany',

        // Hero Section
        hero: {
            title: 'Study in Germany for Indian Students: Education in the Land of Ideas',
            subtitle: 'Join thousands of Indian students pursuing excellence in Germany',
            description: 'Germany offers world-class education with low tuition fees and unparalleled career opportunities. Futuretor helps you navigate every step of your German education journey.',
        },

        // CTA Buttons
        ctas: {
            primary: 'Free Expert Consultation',
            secondary: 'View & Download Brochure',
            tertiary: 'Get Started',
        },

        // Hero Stats
        heroStats: [
            { label: 'Universities', value: '40+' },
            { label: 'Annual Tuition Fees', value: '€10k-€25k' },
            { label: 'International Students', value: '400K+' },
            { label: 'Post-Study Work Visa', value: '1.5 Years' },
        ],

        // Main Heading
        mainHeading: 'Study in Germany for Indian Students with Top Universities',

        // Why Study Section
        whyStudy: {
            heading: 'Why Study in Germany?',
            points: [
                {
                    title: 'International Exposure',
                    description: 'Every year, Germany is chosen by over 25,000 international students for their studies and research, attracted by its international study programs and excellent research opportunities. Furthermore, studying in Germany gives the opportunity of being a part of an international, highly qualified community.',
                },
                {
                    title: 'Quality Education',
                    description: 'German universities have a renowned tradition dating back to the 14th century, ensuring a high standard of education and research.',
                },
                {
                    title: 'Wide Choice of Programs',
                    description: 'Universities in Germany have over 300 international degree programs that offer courses in English. These programs cover various disciplines, particularly in Engineering, Natural Science, Computer Science, Business, and Economics.',
                },
                {
                    title: 'Economic Power',
                    description: 'Germany is a major global economic player and India\'s top business partner in The European Union. The economic collaboration between the two countries is growing, with an increasing presence of German companies in India.',
                },
                {
                    title: 'Practical Experience',
                    description: 'Education in Germany for international students often involves working closely with the industry. Strong connections with companies like SAP, Siemens, BMW, or Bosch can enhance your career prospects.',
                },
                {
                    title: 'In the Heart of Europe',
                    description: 'Germany is situated in the heart of Europe, making it an excellent base for exploring other famous European destinations. With a German study visa, you can easily reach cities like London, Paris, or Rome.',
                },
                {
                    title: 'Low Tuition Fees',
                    description: 'Since universities in Germany are state-funded, tuition fees are generally low. You only need to cover your living expenses including accommodation, food, transport, and health insurance.',
                },
            ],
        },

        // Free Consultation Form
        consultationForm: {
            fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'],
            consent: 'I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.',
        },

        // Featured Universities
        topUniversities: [
            {
                name: 'Mediadesign Hochschule, Germany',
                shortName: 'Mediadesign Hochschule',
                popularFor: 'Art & Design',
                ranking: { label: 'QS World Ranking', value: '3' },
                logo: germanyUni1,
            },
            {
                name: 'EU Business School, Germany',
                shortName: 'EU Business School',
                popularFor: 'MBA',
                ranking: { label: 'QS World Ranking', value: '151' },
                logo: germanyUni2,
            },
            {
                name: 'mdh University of Applied Sciences, Germany',
                shortName: 'mdh University of Applied Sciences',
                popularFor: 'Media, Design, and Management',
                ranking: { label: 'QS World Ranking', value: '164' },
                logo: germanyUni3,
            },
            {
                name: 'Munich Business School, Germany',
                shortName: 'Munich Business School',
                popularFor: 'Innovation and Entrepreneurship',
                ranking: { label: 'QS World Ranking', value: '91' },
                logo: germanyUni4,
            },
            {
                name: 'GISMA, Germany',
                shortName: 'GISMA',
                popularFor: 'MBA',
                ranking: { label: 'QS World Ranking', value: '123' },
                logo: germanyUni5,
            },
            {
                name: 'Arden University, Germany',
                shortName: 'Arden University',
                popularFor: 'Accounting & Finance',
                ranking: { label: 'QS World Ranking', value: '5' },
                logo: germanyUni6,
            },
            {
                name: 'IUBH University of Applied Sciences, Germany',
                shortName: 'IUBH University of Applied Sciences',
                popularFor: 'MBA',
                ranking: { label: 'QS World Ranking', value: '76' },
                logo: germanyUni7,
            },
        ],

        // Popular Courses
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Business Administration', icon: 'mdi:briefcase' },
            { name: 'Renewable Energy', icon: 'mdi:leaf' },
            { name: 'Automotive Engineering', icon: 'mdi:car' },
            { name: 'Data Science', icon: 'mdi:database' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
        ],

        // Cost of Studying
        costOfStudying: {
            heading: 'Cost of Studying in Germany',
            tuitionFees: [
                { degree: 'Public Universities', cost: 'Free Education (No Tuition Fees)' },
                { degree: 'Bachelor\'s', cost: 'EUR 8,000 – 10,000' },
                { degree: 'Master\'s', cost: 'EUR 10,000 – 12,000' },
            ],
            livingExpenses: [
                { item: 'Average Living Expenses', cost: 'Approx. EUR 10,000' },
                { item: 'Student Dormitories', cost: 'EUR 180 - 330' },
                { item: 'Private Housing', cost: 'EUR 400 - 600' },
            ],
        },

        // Scholarships
        scholarships: {
            heading: 'Scholarships in Germany',
            description: 'Scholarships in Germany for private institutions typically range from 10% to 30% of the tuition fees. As one of India\'s leading Germany consultancy for education in India we can give you complete information about all the available scholarships in Germany.',
            organizations: [
                { name: 'DAAD', url: 'www.daad.de/deutschland/' },
                { name: 'Campus Germany', url: 'www.campus-germany.de/' },
                { name: 'DAAD India', url: 'https://www.daad.in/en/' },
            ],
        },

        // Career Prospects
        careerProspects: {
            heading: 'Career Prospects in Germany',
            description: 'The employment landscape in Germany offers various opportunities across various sectors.',
            sectors: [
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Mechanical Engineering', icon: 'mdi:gear' },
                { name: 'Computer Science', icon: 'mdi:laptop' },
                { name: 'Business & Management', icon: 'mdi:briefcase' },
                { name: 'Data Science', icon: 'mdi:database' },
                { name: 'Automotive Engineering', icon: 'mdi:car' },
            ],
        },

        // Documents Required
        documents: {
            heading: 'Documents Required to Study in Germany',
            items: [
                'Valid Passport (1 copy of data page)',
                '3 passport pictures according to biometric specifications',
                'Cover letter explaining the purpose and duration of stay',
                'Letter of admission from German university',
                'Proof of payment of study fees, if applicable',
                'Proof of language proficiency in English and/or German',
                'Proof of other academic qualifications, if applicable',
                'Proof of financial means to cover the costs',
            ],
            financialProof: [
                'Confirmation of scholarship/stipend',
                '"Verpflichtungserklärung" (FOL) by sponsor living in Germany',
            ],
        },

        // Visa Process
        visaProcess: {
            heading: 'Germany Study Visa Process',
            steps: [
                'Apply at least six months prior to your intended start date.',
                'Apply for Akademische Prüfstelle or APS (Academic Evaluation Centre)',
                'Processing of offer letter typically takes 2-3 weeks (varies from university to university).',
                'Pay one year\'s tuition fees upon receiving the offer letter.',
                'Set aside funds for living expenses, deposited in the form of Block Account.',
                'Purchase Travel Insurance and Health Insurance',
                'Apply for a visa online',
                'Deposit visa application form with passport, supporting documents at the VFS',
            ],
        },

        // Related Articles
        relatedArticles: [
            'Ever Dreamt Of Living In Germany?',
            'Safety Tips For International Students In Germany',
            'Cost of Studying in Germany',
            'Study in Germany for Free',
            'Study in Germany: A Guide for Indian Students',
            'Study Automotive Engineering in Germany',
            'MBA In Germany',
            'Renewable Energy Degree in Germany',
            'Masters in Engineering in Germany',
            'Study in Germany for Indian Students After 12th',
            'Masters in Computer Science in Germany',
            'Public Universities In Germany',
            'Master\'s in Germany',
            'Students Life In Germany',
            'Scholarships To Study in Germany',
            'Robotics degree in Germany',
        ],

        // Success Stories / Testimonials
        successStories: [
            {
                name: 'Gokul Samydurai',
                university: 'EU Business School, Germany',
                review: 'Thanks to Edwise, the extensive paperwork procedures necessary for studying in Germany were made incredibly smooth and easy to navigate.',
            },
            {
                name: 'Miral Shah',
                university: 'Bournemouth University, Study in UK',
                review: 'Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career. The best decision for my academic journey!',
            },
            {
                name: 'Abhinay Pandit',
                university: 'New York Film Academy, USA',
                review: 'It is one of the best consulting firms available and they are genuinely committed to assisting the students. The counselors are very approachable.',
            },
            {
                name: 'Archana Sidhwani',
                university: 'Sheridan College, Canada',
                review: 'Wonderful consultant. I had a very flourishing process with them. They were very knowledgeable and knew what they were doing.',
            },
            {
                name: 'Srikamalesh Rajendraboopathy',
                university: 'Macquarie University, AUS',
                review: 'My experience with Edwise has been great. My counselor helped me tremendously and was always there to clear any doubts.',
            },
        ],

        // FAQs
        faqs: [
            {
                question: 'How much does it cost to study in Germany for Indian students?',
                answer: 'Tuition fees range from EUR 8,000-25,000 annually depending on the university and program. Living expenses are approximately EUR 10,000 per year, making Germany one of the most affordable study destinations in Europe.',
            },
            {
                question: 'How is life in Germany for Indian students?',
                answer: 'Life in Germany is excellent for Indian students with good quality of life, safe cities, affordable living, and a welcoming multicultural environment. Many Indian student communities exist in major cities.',
            },
            {
                question: 'Can Indians get a DAAD scholarship?',
                answer: 'Yes, Indians can apply for DAAD scholarships. DAAD offers various scholarship programs for Indian students to study in Germany. Visit www.daad.in for more information.',
            },
            {
                question: 'How to get 100% scholarship in Germany?',
                answer: 'Several organizations offer scholarships covering tuition and living expenses. DAAD, BMBF, and individual universities offer merit-based and need-based scholarships. Excellence in academics increases your chances.',
            },
            {
                question: 'Is a medical test required for getting a student visa?',
                answer: 'A medical test is not typically required for visa application, but health insurance is mandatory for all students in Germany.',
            },
            {
                question: 'What is the best way to pursue a Master\'s in Germany for Indian students?',
                answer: 'The best way is to start with language preparation, then apply to universities 6-9 months before your intended start date. Futuretor can guide you through profile assessment, university selection, and application process.',
            },
            {
                question: 'Is it compulsory to be proficient in the German language to study in Germany?',
                answer: 'Many Master\'s programs are taught in English, so German language is not always compulsory. However, learning German (B1-B2 level) helps with daily life and integration.',
            },
            {
                question: 'How to apply for a scholarship in Germany?',
                answer: 'Research scholarships from DAAD, individual universities, and government organizations. Apply through their online portals with required documents like academic transcripts, IELTS/TOEFL scores, and motivational letter.',
            },
            {
                question: 'How to get admission in a Germany public university?',
                answer: 'Apply directly through university portals or through platforms like uni-assist. Submit transcripts, language proficiency proof, and motivational letter. Selection is merit-based.',
            },
            {
                question: 'Is IELTS compulsory for Germany?',
                answer: 'Not always. Many universities accept English proficiency proof through IELTS, TOEFL, or their own exams. Check specific university requirements.',
            },
        ],
    },

    finland: {
        // Basic Info
        name: 'Finland',
        slug: 'finland',
        heroIcon: 'noto:flag-finland',

        // Hero Section
        hero: {
            title: 'Study in Finland for Indian Students: Innovation Meets Education',
            subtitle: 'Experience world-class education in the land of innovation',
            description: 'Finland offers innovative education, excellent quality of life, and affordable tuition for Indian students. Join leading universities and shape your global career.',
        },

        // CTA Buttons
        ctas: {
            primary: 'Free Expert Consultation',
            secondary: 'View & Download Brochure',
            tertiary: 'Get Started',
        },

        // Hero Stats
        heroStats: [
            { label: 'Universities', value: '20+' },
            { label: 'Annual Tuition Fees', value: '€6k-€18k' },
            { label: 'International Students', value: '200K+' },
            { label: 'Post-Study Work Visa', value: '1 Year' },
        ],

        // Main Heading
        mainHeading: 'Study in Finland for Indian Students with Top Universities',

        // Why Study Section
        whyStudy: {
            heading: 'Why Study in Finland?',
            points: [
                {
                    title: 'Innovation Hub',
                    description: 'Finland is the birthplace of Nokia and home to numerous startups. Being in Finland means being in the center of innovation and technology.',
                },
                {
                    title: 'High-Quality Education',
                    description: 'Finnish universities consistently rank among the world\'s best. Education focuses on research, innovation, and practical skills.',
                },
                {
                    title: 'Quality of Life',
                    description: 'Finland consistently ranks first in the World Happiness Index with safe cities, excellent public services, and a welcoming environment for international students.',
                },
                {
                    title: 'Research Opportunities',
                    description: 'Strong emphasis on research and innovation with cutting-edge facilities and opportunities to work on real-world projects.',
                },
                {
                    title: 'English-Taught Programs',
                    description: 'Most Master\'s programs are taught entirely in English. No Finnish language requirement for admission.',
                },
                {
                    title: 'Affordable Education',
                    description: 'While tuition exists for non-EU students, it\'s still affordable compared to other top destinations. Many scholarships available.',
                },
                {
                    title: 'Excellent Work Opportunities',
                    description: 'Strong job market particularly in IT, engineering, and technology sectors with competitive salaries.',
                },
            ],
        },

        // Free Consultation Form
        consultationForm: {
            fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'],
            consent: 'I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.',
        },

        // Featured Universities
        topUniversities: [
            {
                name: 'Aalto University, Finland',
                shortName: 'Aalto University',
                popularFor: 'Technology, Business, Design',
                ranking: { label: 'QS World Ranking', value: '54' },
            },
            {
                name: 'University of Helsinki, Finland',
                shortName: 'University of Helsinki',
                popularFor: 'Research, Medicine, Science',
                ranking: { label: 'QS World Ranking', value: '88' },
            },
            {
                name: 'Tampere University, Finland',
                shortName: 'Tampere University',
                popularFor: 'Engineering, Business, Technology',
                ranking: { label: 'QS World Ranking', value: '350' },
            },
            {
                name: 'University of Turku, Finland',
                shortName: 'University of Turku',
                popularFor: 'Medicine, Science, Technology',
                ranking: { label: 'QS World Ranking', value: '400' },
            },
            {
                name: 'Oulu University, Finland',
                shortName: 'Oulu University',
                popularFor: 'Engineering, Technology',
                ranking: { label: 'QS World Ranking', value: '380' },
            },
            {
                name: 'Hanken School of Economics, Finland',
                shortName: 'Hanken School of Economics',
                popularFor: 'Business, Finance, Economics',
                ranking: { label: 'QS World Ranking', value: '450' },
            },
        ],

        // Popular Courses
        popularCourses: [
            { name: 'Technology & Computer Science', icon: 'mdi:laptop' },
            { name: 'Business & Finance', icon: 'mdi:briefcase' },
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Environmental Science', icon: 'mdi:leaf' },
            { name: 'Architecture & Design', icon: 'mdi:pencil-ruler' },
            { name: 'Healthcare & Medicine', icon: 'mdi:hospital-box' },
        ],

        // Cost of Studying
        costOfStudying: {
            heading: 'Cost of Studying in Finland',
            tuitionFees: [
                { degree: 'EU/EEA Citizens', cost: 'Free or Minimal' },
                { degree: 'Non-EU (India)', cost: 'EUR 6,000 – 18,000' },
            ],
            livingExpenses: [
                { item: 'Average Living Expenses', cost: 'EUR 800-1,200/month' },
                { item: 'Accommodation', cost: 'EUR 400 - 800' },
                { item: 'Food & Transport', cost: 'EUR 300 - 400' },
            ],
        },

        // Scholarships
        scholarships: {
            heading: 'Scholarships in Finland',
            description: 'Many Finnish universities offer scholarships to Indian students covering partial to full tuition fees. Government scholarships and university-specific schemes are available.',
            organizations: [
                { name: 'Finnish Government', url: 'studyinfinland.fi' },
                { name: 'Aalto University Scholarships', url: 'aalto.fi/scholarships' },
                { name: 'University of Helsinki Grants', url: 'helsinki.fi' },
            ],
        },

        // Career Prospects
        careerProspects: {
            heading: 'Career Prospects in Finland',
            description: 'Finland has one of the strongest job markets in Europe with excellent opportunities for international graduates.',
            sectors: [
                { name: 'Technology & IT', icon: 'mdi:laptop' },
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Business & Management', icon: 'mdi:briefcase' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
                { name: 'Research & Innovation', icon: 'mdi:flask' },
                { name: 'Renewable Energy', icon: 'mdi:leaf' },
            ],
        },

        // Documents Required
        documents: {
            heading: 'Documents Required to Study in Finland',
            items: [
                'Valid Passport (validity 6+ months)',
                'Bachelor\'s degree certificate and transcript',
                'English proficiency proof (IELTS 6.5+ or TOEFL 92+)',
                'CV or Resume',
                'Letter of Motivation/Statement of Purpose',
                'Letters of Recommendation (usually 2)',
                'Application form from the university',
                'Portfolio (if applicable for design programs)',
            ],
            financialProof: [
                'Bank statement showing EUR 7,000-8,000',
                'Sponsor letter from parents/guardians',
                'Proof of scholarship if applicable',
            ],
        },

        // Visa Process
        visaProcess: {
            heading: 'Finland Student Residence Permit Process',
            steps: [
                'Receive admission offer from Finnish university',
                'Gather required documents and financial proof',
                'Apply for residence permit at Finnish Immigration',
                'Pay residence permit application fee (approximately EUR 300)',
                'Complete biometric registration if required',
                'Receive residence permit decision (usually 4-6 weeks)',
                'Arrange travel and accommodation',
                'Register with local authorities upon arrival',
            ],
        },

        // Related Articles
        relatedArticles: [
            'Study in Finland: A Complete Guide for Indian Students',
            'Cost of Living in Finland vs Other European Countries',
            'Best Cities for Students in Finland',
            'How to Find Accommodation in Finland',
            'Part-time Work Opportunities for International Students',
            'Healthcare System in Finland for International Students',
            'Transportation in Finland for Students',
            'Best Time to Apply to Finnish Universities',
            'English Language Universities in Finland',
            'Scholarships for Indian Students in Finland',
            'Job Market in Finland for Graduates',
            'Integration Tips for International Students in Finland',
        ],

        // Success Stories / Testimonials
        successStories: [
            {
                name: 'Vikram Sharma',
                university: 'Aalto University, Finland',
                review: 'Finland exceeded my expectations! The innovation-focused curriculum and amazing quality of life made my experience unforgettable. Highly recommended!',
            },
            {
                name: 'Neha Desai',
                university: 'University of Helsinki, Finland',
                review: 'Futuretor\'s support was exceptional throughout my Finnish education journey. Best decision of my life! The university experience is world-class.',
            },
            {
                name: 'Arjun Patel',
                university: 'Tampere University, Finland',
                review: 'Top-notch education with excellent work-life balance. Finland truly delivers on its promise of quality education. I found amazing job opportunities after graduation.',
            },
            {
                name: 'Priya Nair',
                university: 'Hanken School of Economics, Finland',
                review: 'The business program here is exceptional! I learned so much about innovation and entrepreneurship. Finland is perfect for tech-minded students!',
            },
        ],

        // FAQs
        faqs: [
            {
                question: 'Is tuition free in Finland for Indian students?',
                answer: 'Most Master\'s programs charge tuition for non-EU citizens (€6,000-18,000/year). However, many scholarships are available. Some universities also offer free or low-cost programs.',
            },
            {
                question: 'Do I need Finnish language skills?',
                answer: 'No, most Master\'s programs are taught entirely in English. Finnish language is not required for admission. Learning Finnish can help for integration and daily life.',
            },
            {
                question: 'Can I work part-time in Finland?',
                answer: 'Yes, international students can work up to 30 hours per week during studies and full-time during semester breaks.',
            },
            {
                question: 'What is the job market like after graduation?',
                answer: 'Finland has an excellent job market particularly in IT, engineering, and technology sectors. Graduates often find employment within 6-12 months of graduation.',
            },
            {
                question: 'Is Finland expensive for living?',
                answer: 'Finland is moderately priced. Daily expenses are EUR 800-1,200 per month, which is reasonable compared to many other European countries.',
            },
        ],
    },

    switzerland: {
        name: 'Switzerland',
        slug: 'switzerland',
        heroIcon: 'noto:flag-switzerland',
        hero: {
            title: 'Study in Switzerland for Indian Students: Excellence & Innovation',
            subtitle: 'Access premium education in one of the world\'s best countries',
            description: 'Switzerland offers world-class education, exceptional infrastructure, and unparalleled quality of life. Experience premium education and begin your global career.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Top Universities', value: '12' },
            { label: 'Annual Tuition', value: 'CHF 1k-3k' },
            { label: 'Quality of Life', value: '#1' },
            { label: 'Post-Study Work', value: '1 Year' },
        ],
        mainHeading: 'Study in Switzerland for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in Switzerland?',
            points: [
                { title: 'World-Class Universities', description: 'Home to ETH Zurich and University of Zurich, ranked among the world\'s best.' },
                { title: 'Career Excellence', description: 'Strong job market with excellent salaries and global career opportunities.' },
                { title: 'Quality of Life', description: 'Consistently ranked as the best country to live with safety and stability.' },
                { title: 'Research & Innovation', description: 'Cutting-edge research facilities and innovation-driven education.' },
                { title: 'Multicultural', description: 'Four official languages and a diverse, welcoming international community.' },
                { title: 'Alpine Beauty', description: 'Experience stunning natural beauty alongside world-class academics.' },
                { title: 'Career Networking', description: 'Strong connections with global companies and organizations.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'ETH Zurich', shortName: 'ETH Zurich', popularFor: 'Computer Science', ranking: { label: 'QS World Ranking', value: '7' } },
            { name: 'EPFL', shortName: 'EPFL', popularFor: 'Engineering', ranking: { label: 'QS World Ranking', value: '36' } },
            { name: 'University of Zurich', shortName: 'University of Zurich', popularFor: 'Medicine', ranking: { label: 'QS World Ranking', value: '96' } },
            { name: 'University of Geneva', shortName: 'University of Geneva', popularFor: 'Life Sciences', ranking: { label: 'QS World Ranking', value: '129' } },
        ],
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Business & Finance', icon: 'mdi:briefcase' },
            { name: 'Medicine & Healthcare', icon: 'mdi:hospital-box' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
            { name: 'Physics & Science', icon: 'mdi:flask' },
            { name: 'Architecture & Design', icon: 'mdi:pencil-ruler' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in Switzerland',
            tuitionFees: [
                { degree: 'Bachelor\'s', cost: 'CHF 1,000 - 2,000/year' },
                { degree: 'Master\'s', cost: 'CHF 1,500 - 3,000/year' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: 'CHF 800 - 1,500/month' },
                { item: 'Food & Groceries', cost: 'CHF 300 - 500/month' },
                { item: 'Transport & Utilities', cost: 'CHF 150 - 250/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in Switzerland',
            description: 'Swiss universities offer various scholarships for international students including merit-based and need-based grants.',
            organizations: [
                { name: 'Swiss Gov Scholarships', url: 'eda.admin.ch' },
                { name: 'ETH Zurich Grants', url: 'eth.ac.ch' },
                { name: 'University Grants', url: 'swissuniversities.ch' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in Switzerland',
            description: 'Switzerland has one of the world\'s strongest job markets with excellent opportunities.',
            sectors: [
                { name: 'Finance & Banking', icon: 'mdi:bank' },
                { name: 'Pharmaceuticals', icon: 'mdi:pill' },
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Technology', icon: 'mdi:laptop' },
                { name: 'Consulting', icon: 'mdi:briefcase' },
                { name: 'Research', icon: 'mdi:flask' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in Switzerland',
            items: [
                'Valid Passport (6+ months validity)',
                'University admission letter',
                'Academic transcripts and diplomas',
                'Language proficiency (usually German/French/Italian)',
                'Motivation letter',
                'Letters of recommendation',
                'CV/Resume',
            ],
            financialProof: [
                'Proof of funds (CHF 20,000-30,000/year)',
                'Bank statements',
                'Sponsor letter',
            ],
        },
        visaProcess: {
            heading: 'Switzerland Student Visa Process',
            steps: [
                'Receive admission offer from Swiss university',
                'Gather all required documents',
                'Open residence registration at local authorities',
                'Submit permit application to cantonal migration office',
                'Pay residence permit fee (CHF 100-300)',
                'Receive permit decision (usually 2-4 weeks)',
                'Arrange travel and accommodation',
                'Register with local police upon arrival',
            ],
        },
        relatedArticles: [
            'Study in Switzerland: Complete Guide for Indian Students',
            'Cost Comparison: Switzerland vs Other European Countries',
            'Best Cities for Students in Switzerland',
            'Healthcare for International Students',
            'Part-time Work Rights in Switzerland',
            'Public Transport for Students',
        ],
        successStories: [
            { name: 'Rohit Verma', university: 'ETH Zurich', review: 'World-class education with industry partnerships. Switzerland is truly the best place to study engineering!' },
            { name: 'Anjali Singh', university: 'University of Zurich', review: 'Exceptional research opportunities and amazing faculty. My time here was transformative!' },
            { name: 'Aditya Kumar', university: 'USI Lugano', review: 'Great campus life and beautiful surroundings. Career opportunities are fantastic!' },
            { name: 'Meera Sharma', university: 'ETH Zurich', review: 'Top-notch infrastructure and world-leading professors. Highly recommended for aspiring engineers!' },
        ],
        faqs: [
            { question: 'Is Switzerland expensive for studying?', answer: 'Yes, tuition is moderate (CHF 1-3k/year) but living costs are high. Overall it\'s expensive but worth the investment for quality education.' },
            { question: 'Do I need German/French language skills?', answer: 'It depends on the program. Many universities offer English-taught programs, but knowing local languages helps.' },
            { question: 'Can I work while studying?', answer: 'Yes, you can work part-time (up to 20 hours/week) and full-time during breaks with proper permits.' },
        ],
    },

    ireland: {
        name: 'Ireland',
        slug: 'ireland',
        heroIcon: 'noto:flag-ireland',
        hero: {
            title: 'Study in Ireland for Indian Students: Emerald Isle Education',
            subtitle: 'Quality education with worldwide recognition in a vibrant country',
            description: 'Ireland offers excellent education, a friendly atmosphere, and great career opportunities. Join world-class universities in the Emerald Isle.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Universities', value: '7' },
            { label: 'Annual Fees', value: '€9k-16k' },
            { label: 'International Students', value: '180K+' },
            { label: 'Post-Study Work', value: '2 Years' },
        ],
        mainHeading: 'Study in Ireland for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in Ireland?',
            points: [
                { title: 'World-Class Universities', description: 'Home to Trinity College and University College Dublin, ranked globally.' },
                { title: 'Generous Post-Study Work', description: '2-year work visa after graduation providing great career opportunities.' },
                { title: 'English-Speaking Country', description: 'No language barrier - all programs taught in English.' },
                { title: 'Vibrant Culture', description: 'Rich history, literature, and welcoming Irish culture.' },
                { title: 'Tech Hub', description: 'Home to Google, Facebook, and other tech companies.' },
                { title: 'Great Social Life', description: 'Excellent student life with numerous activities and events.' },
                { title: 'EU Location', description: 'Perfect base for exploring Europe with easy travel.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'Trinity College Dublin', shortName: 'Trinity College Dublin', popularFor: 'Dentistry', ranking: { label: 'QS World Ranking', value: '81' } },
            { name: 'University College Dublin', shortName: 'University College Dublin', popularFor: 'Arts and Humanities', ranking: { label: 'QS World Ranking', value: '171' } },
            { name: 'University of Galway', shortName: 'University of Galway', popularFor: 'Performing Arts', ranking: { label: 'QS World Ranking', value: '289' } },
            { name: 'University College Cork', shortName: 'University College Cork', popularFor: 'Engineering and Technology', ranking: { label: 'QS World Ranking', value: '292' } },
            { name: 'University of Limerick', shortName: 'University of Limerick', popularFor: 'Engineering and Technology', ranking: { label: 'QS World Ranking', value: '426' } },
            { name: 'Dublin City University', shortName: 'Dublin City University', popularFor: 'Accounting and Financing', ranking: { label: 'QS World Ranking', value: '436' } },
            { name: 'Maynooth University', shortName: 'Maynooth University', popularFor: 'Humanities', ranking: { label: 'QS World Ranking', value: '801-850' } },
        ],
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Business & MBA', icon: 'mdi:briefcase' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
            { name: 'Law', icon: 'mdi:gavel' },
            { name: 'Science', icon: 'mdi:flask' },
            { name: 'Medicine', icon: 'mdi:hospital-box' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in Ireland',
            tuitionFees: [
                { degree: 'Master\'s (EU Citizens)', cost: '€0 - 5,000/year' },
                { degree: 'Master\'s (Non-EU)', cost: '€9,000 - 16,000/year' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: '€600 - 1,000/month' },
                { item: 'Food & Groceries', cost: '€200 - 350/month' },
                { item: 'Transport & Utilities', cost: '€100 - 200/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in Ireland',
            description: 'Irish universities and government offer various scholarships for international students.',
            organizations: [
                { name: 'Irish Gov Scholarship', url: 'irishaid.org' },
                { name: 'TCD Scholarships', url: 'tcd.ie' },
                { name: 'UCD Scholarships', url: 'ucd.ie' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in Ireland',
            description: 'Ireland has one of Europe\'s strongest job markets with tech and finance booming.',
            sectors: [
                { name: 'Technology', icon: 'mdi:laptop' },
                { name: 'Finance & Banking', icon: 'mdi:bank' },
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Pharmaceuticals', icon: 'mdi:pill' },
                { name: 'Business', icon: 'mdi:briefcase' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in Ireland',
            items: [
                'Valid Passport (6+ months)',
                'University admission letter',
                'Academic transcripts',
                'IELTS/TOEFL proof (usually 6.5+ IELTS)',
                'Motivation letter',
                'CV/Resume',
                'Letters of recommendation',
            ],
            financialProof: [
                'Proof of funds (€12,000-18,000)',
                'Bank statements',
                'Sponsor letter',
                'Scholarship letter (if applicable)',
            ],
        },
        visaProcess: {
            heading: 'Ireland Student Visa Process',
            steps: [
                'Receive admission offer from Irish university',
                'Get Confirmation of Enrolment letter',
                'Prepare all required documents',
                'Apply for Irish student visa online',
                'Pay visa fee (€300)',
                'Attend visa interview if required',
                'Receive visa decision (2-4 weeks)',
                'Arrange travel and accommodation',
            ],
        },
        relatedArticles: [
            'Study in Ireland: Complete Guide',
            'Cost of Living in Dublin vs Other Cities',
            'Best Universities in Ireland for Indian Students',
            'Work Rights for International Students',
            'Student Accommodation Guide',
            'Post-Study Work Visa Information',
        ],
        successStories: [
            { name: 'Raj Mehta', university: 'Trinity College Dublin', review: 'Excellent engineering program with great industry placements. Highly recommended!' },
            { name: 'Priya Patel', university: 'UCD', review: 'Amazing campus life and supportive faculty. Ireland is perfect for international students!' },
            { name: 'Amit Kumar', university: 'DCU', review: 'Great tech ecosystem and wonderful people. Best decision to study here!' },
            { name: 'Sneha Gupta', university: 'UCC', review: 'Beautiful city, excellent university, and great opportunities. Love it here!' },
        ],
        faqs: [
            { question: 'Do I need English language test?', answer: 'Yes, IELTS/TOEFL scores are typically required. Most universities require 6.5+ IELTS.' },
            { question: 'What is the post-study work visa?', answer: 'Ireland offers a 2-year work visa after graduation, allowing you to work and gain experience.' },
            { question: 'Is Irish education recognized globally?', answer: 'Yes, Irish degrees are highly recognized globally, especially from Trinity College and UCD.' },
            { question: 'Can I work part-time?', answer: 'Yes, international students can work up to 20 hours/week during studies.' },
        ],
    },

    austria: {
        name: 'Austria',
        slug: 'austria',
        heroIcon: 'noto:flag-austria',
        hero: {
            title: 'Study in Austria for Indian Students: Alpine Excellence',
            subtitle: 'Experience premium education in the heart of Europe',
            description: 'Austria offers affordable tuition, excellent universities, and a high quality of life. Study in Vienna and explore European excellence.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Universities', value: '22' },
            { label: 'Annual Tuition', value: '€726-922' },
            { label: 'International Students', value: '150K+' },
            { label: 'Post-Study Work', value: '6-12 Month' },
        ],
        mainHeading: 'Study in Austria for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in Austria?',
            points: [
                { title: 'Incredibly Affordable', description: 'Tuition of €726-922 per year, the cheapest in Europe!' },
                { title: 'Top Universities', description: 'University of Vienna and TU Vienna rank among Europe\'s best.' },
                { title: 'Beautiful Country', description: 'Vienna\'s cultural heritage and Alpine scenery provide inspiration.' },
                { title: 'Central Europe Location', description: 'Perfect base for exploring Europe with excellent transport.' },
                { title: 'Innovation Hub', description: 'Strong research focus and industry partnerships.' },
                { title: 'High Quality of Life', description: 'Safe, clean, and well-organized society.' },
                { title: 'Musical Heritage', description: 'Experience the birthplace of classical music.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'University of Vienna', shortName: 'UNIVIE', popularFor: 'Law, Medicine, Science', ranking: { label: 'QS World Ranking', value: '159' } },
            { name: 'TU Vienna', shortName: 'TU Wien', popularFor: 'Engineering, Technology', ranking: { label: 'QS World Ranking', value: '301' } },
            { name: 'University of Innsbruck', shortName: 'UIBK', popularFor: 'Science, Engineering', ranking: { label: 'QS World Ranking', value: '401' } },
            { name: 'University of Graz', shortName: 'KFU', popularFor: 'Science, Law', ranking: { label: 'QS World Ranking', value: '500' } },
            { name: 'WU Vienna', shortName: 'WU', popularFor: 'Business, Economics', ranking: { label: 'QS World Ranking', value: '350' } },
            { name: 'University of Salzburg', shortName: 'PLUS', popularFor: 'Education, Science', ranking: { label: 'QS World Ranking', value: '450' } },
        ],
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Medicine & Healthcare', icon: 'mdi:hospital-box' },
            { name: 'Law', icon: 'mdi:gavel' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
            { name: 'Business & Economics', icon: 'mdi:briefcase' },
            { name: 'Physics & Science', icon: 'mdi:flask' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in Austria',
            tuitionFees: [
                { degree: 'All Programs', cost: '€726 - 922/semester' },
                { degree: 'After 6 semesters', cost: '€363/semester' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: '€400 - 700/month' },
                { item: 'Food & Groceries', cost: '€150 - 300/month' },
                { item: 'Transport & Utilities', cost: '€100 - 200/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in Austria',
            description: 'Austrian universities and government offer scholarships for international students.',
            organizations: [
                { name: 'MEYS Austria', url: 'oead.at' },
                { name: 'University of Vienna', url: 'univie.ac.at' },
                { name: 'TU Vienna', url: 'tuwien.ac.at' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in Austria',
            description: 'Austria offers good job opportunities in multiple sectors with competitive salaries.',
            sectors: [
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Technology', icon: 'mdi:laptop' },
                { name: 'Business', icon: 'mdi:briefcase' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
                { name: 'Finance', icon: 'mdi:bank' },
                { name: 'Research', icon: 'mdi:flask' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in Austria',
            items: [
                'Valid Passport (6+ months)',
                'University admission letter',
                'Academic transcripts and diploma',
                'German language proficiency (B2 level) or English-taught program',
                'Motivation letter',
                'CV/Resume',
                'Health insurance certificate',
            ],
            financialProof: [
                'Proof of funds (€934-1,200/month)',
                'Bank statements',
                'Sponsor letter',
            ],
        },
        visaProcess: {
            heading: 'Austria Student Visa Process',
            steps: [
                'Receive admission offer from Austrian university',
                'Gather all required documents',
                'Apply for residence permit at Austrian embassy/consulate',
                'Submit documents with application form',
                'Pay visa fee (€80)',
                'Attend interview if required',
                'Receive visa decision (2-6 weeks)',
                'Register at local police upon arrival',
            ],
        },
        relatedArticles: [
            'Study in Austria: Complete Guide for Indian Students',
            'Cost Comparison: Austria vs Germany',
            'Affordable Education in Austria',
            'Student Life in Vienna',
            'Language Requirements for Austrian Universities',
            'Job Market for International Graduates',
        ],
        successStories: [
            { name: 'Suresh Kumar', university: 'TU Vienna', review: 'Excellent engineering education at unbeatable prices. Austria is a hidden gem!' },
            { name: 'Pooja Singh', university: 'University of Vienna', review: 'Amazing city, affordable living, and top-quality education. Loved my time here!' },
            { name: 'Vikas Patel', university: 'WU Vienna', review: 'Great business program and wonderful student experience. Highly recommended!' },
            { name: 'Anjali Sharma', university: 'UIBK', review: 'Beautiful location and excellent academics. Austria exceeded all my expectations!' },
        ],
        faqs: [
            { question: 'Why is Austria so affordable?', answer: 'Austria is affordable due to government subsidies for education and lower living costs compared to Western Europe.' },
            { question: 'Do I need German language skills?', answer: 'For German-taught programs yes (B2), but many universities offer English-taught Master\'s programs.' },
            { question: 'Can I work part-time?', answer: 'Yes, international students can work up to 20 hours/week during studies.' },
        ],
    },

    france: {
        name: 'France',
        slug: 'france',
        heroIcon: 'noto:flag-france',
        hero: {
            title: 'Study in France for Indian Students: Art, Culture & Excellence',
            subtitle: 'Experience world-class education in the heart of Europe',
            description: 'France offers exceptional education, rich cultural heritage, and excellent career prospects. Join prestigious universities and experience Parisian excellence.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Universities', value: '80+' },
            { label: 'Annual Fees', value: '€200-2.5k' },
            { label: 'International Students', value: '330K+' },
            { label: 'Post-Study Work', value: '1 Year' },
        ],
        mainHeading: 'Study in France for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in France?',
            points: [
                { title: 'World-Class Universities', description: 'Sorbonne and leading institutions offer exceptional education recognized globally.' },
                { title: 'Very Affordable', description: 'Public universities charge €200-2,500/year, among Europe\'s cheapest.' },
                { title: 'Rich Culture', description: 'Experience art, cuisine, literature, and history in the world\'s most visited country.' },
                { title: 'English Programs', description: 'Increasing number of Master\'s programs taught entirely in English.' },
                { title: 'Excellent Infrastructure', description: 'Modern campuses with state-of-the-art facilities.' },
                { title: 'Liberal Lifestyle', description: 'Vibrant student life with numerous cultural activities.' },
                { title: 'EU Location', description: 'Easy access to other European countries.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'Université PSL', shortName: 'Université PSL', popularFor: 'Physics', ranking: { label: 'QS World Ranking', value: '24' } },
            { name: 'Institut Polytechnique de Paris', shortName: 'Institut Polytechnique de Paris', popularFor: 'Artificial Intelligence', ranking: { label: 'QS World Ranking', value: '38' } },
            { name: 'Sorbonne University', shortName: 'Sorbonne University', popularFor: 'International Law', ranking: { label: 'QS World Ranking', value: '59' } },
            { name: 'Université Paris-Saclay', shortName: 'Université Paris-Saclay', popularFor: 'Mathematics', ranking: { label: 'QS World Ranking', value: '71' } },
            { name: 'École Normale Supérieure de Lyon', shortName: 'École Normale Supérieure de Lyon', popularFor: 'Cognitive Sciences', ranking: { label: 'QS World Ranking', value: '184' } },
            { name: 'Ecole des Ponts ParisTech', shortName: 'Ecole des Ponts ParisTech', popularFor: 'Civil Engineering', ranking: { label: 'QS World Ranking', value: '192' } },
            { name: 'Université Paris Cité', shortName: 'Université Paris Cité', popularFor: 'Public Health', ranking: { label: 'QS World Ranking', value: '236' } },
            { name: 'Université Grenoble Alpes', shortName: 'Université Grenoble Alpes', popularFor: 'Nanosciences', ranking: { label: 'QS World Ranking', value: '294' } },
            { name: 'Sciences Po', shortName: 'Sciences Po', popularFor: 'Public Policy', ranking: { label: 'QS World Ranking', value: '319' } },
            { name: 'Université Paris 1 Panthéon-Sorbonne', shortName: 'Université Paris 1 Panthéon-Sorbonne', popularFor: 'Economics', ranking: { label: 'QS World Ranking', value: '328' } },
        ],
        popularCourses: [
            { name: 'Business & Management', icon: 'mdi:briefcase' },
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Medicine & Healthcare', icon: 'mdi:hospital-box' },
            { name: 'Law', icon: 'mdi:gavel' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
            { name: 'Arts & Humanities', icon: 'mdi:palette' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in France',
            tuitionFees: [
                { degree: 'Public Universities', cost: '€200 - 2,500/year' },
                { degree: 'Business Schools', cost: '€8,000 - 20,000/year' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: '€400 - 700/month' },
                { item: 'Food & Groceries', cost: '€200 - 350/month' },
                { item: 'Transport & Utilities', cost: '€100 - 200/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in France',
            description: 'French government and universities offer extensive scholarships for international students.',
            organizations: [
                { name: 'Campus France', url: 'campusfrance.org' },
                { name: 'Sorbonne Scholarships', url: 'sorbonne-universite.fr' },
                { name: 'Eiffel Scholarship', url: 'france-education.org' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in France',
            description: 'France offers excellent job opportunities in business, technology, and creative sectors.',
            sectors: [
                { name: 'Business & Finance', icon: 'mdi:briefcase' },
                { name: 'Technology', icon: 'mdi:laptop' },
                { name: 'Fashion & Design', icon: 'mdi:palette' },
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
                { name: 'Luxury Industry', icon: 'mdi:diamond' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in France',
            items: [
                'Valid Passport (6+ months)',
                'University admission letter',
                'Academic transcripts and diploma',
                'French language proficiency (B2 level) or English-taught program',
                'Motivation letter',
                'CV/Resume',
                'Proof of financial means',
            ],
            financialProof: [
                'Proof of funds (€1,000-1,500/month)',
                'Bank statements',
                'Sponsor letter',
            ],
        },
        visaProcess: {
            heading: 'France Student Visa Process',
            steps: [
                'Receive admission offer from French university',
                'Register through Campus France platform',
                'Gather all required documents',
                'Attend Campus France interview',
                'Apply for student visa at French embassy',
                'Pay visa fee (€80-100)',
                'Receive visa decision (2-4 weeks)',
                'Travel to France and register with authorities',
            ],
        },
        relatedArticles: [
            'Study in France: Complete Guide for Indian Students',
            'Cost Comparison: France vs Germany vs UK',
            'Best Universities in France',
            'Learning French: Resources and Tips',
            'Student Life in Paris and Lyon',
            'Part-time Work Opportunities',
        ],
        successStories: [
            { name: 'Rajesh Verma', university: 'Ecole Polytechnique', review: 'Exceptional engineering education and wonderful French experience. Worth every moment!' },
            { name: 'Deepa Sharma', university: 'Sorbonne University', review: 'Amazing cultural experience and top-quality education. Paris is magical!' },
            { name: 'Arjun Iyer', university: 'HEC Paris', review: 'World-class business education at affordable cost. Highly recommended!' },
            { name: 'Shreya Gupta', university: 'PSL University', review: 'Excellent research opportunities and vibrant student community. Loved it!' },
        ],
        faqs: [
            { question: 'Why is France so affordable for education?', answer: 'French government heavily subsidizes education, making it one of the cheapest in Europe.' },
            { question: 'Do I need to speak French?', answer: 'For French-taught programs yes (B2), but many universities offer English Master\'s programs.' },
            { question: 'What is the job market like?', answer: 'France has good opportunities in business, tech, and creative industries.' },
        ],
    },

    sweden: {
        name: 'Sweden',
        slug: 'sweden',
        heroIcon: 'noto:flag-sweden',
        hero: {
            title: 'Study in Sweden for Indian Students: Nordic Excellence',
            subtitle: 'Access world-class education in Scandinavia\'s leading country',
            description: 'Sweden offers innovative education, exceptional quality of life, and strong career opportunities. Experience Nordic excellence and innovation.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Universities', value: '40+' },
            { label: 'Annual Tuition', value: '€8k-17k' },
            { label: 'International Students', value: '250K+' },
            { label: 'Post-Study Work', value: '6 Month' },
        ],
        mainHeading: 'Study in Sweden for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in Sweden?',
            points: [
                { title: 'Innovation Leaders', description: 'Sweden is home to numerous tech companies and innovation hubs.' },
                { title: 'Top Universities', description: 'Karolinska Institute, KTH, and Lund rank among Europe\'s best.' },
                { title: 'High Quality of Life', description: 'Consistently ranked among the world\'s best countries.' },
                { title: 'English-Taught Programs', description: 'Most Master\'s programs taught entirely in English.' },
                { title: 'Environmental Focus', description: 'World leaders in sustainability and green technology.' },
                { title: 'Student-Friendly', description: 'Excellent support and resources for international students.' },
                { title: 'Nordic Culture', description: 'Experience Scandinavian lifestyle and inclusive society.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'Karolinska Institute', shortName: 'KI', popularFor: 'Medicine, Biomedical', ranking: { label: 'QS World Ranking', value: '67' } },
            { name: 'KTH Royal Institute', shortName: 'KTH', popularFor: 'Engineering, Technology', ranking: { label: 'QS World Ranking', value: '94' },},
            { name: 'Lund University', shortName: 'LU', popularFor: 'Science, Engineering', ranking: { label: 'QS World Ranking', value: '109' } },
            { name: 'Uppsala University', shortName: 'UU', popularFor: 'Research, Medicine', ranking: { label: 'QS World Ranking', value: '167' } },
            { name: 'Stockholm University', shortName: 'SU', popularFor: 'Science, Business', ranking: { label: 'QS World Ranking', value: '189' } },
            { name: 'Chalmers University', shortName: 'CTH', popularFor: 'Engineering, Technology', ranking: { label: 'QS World Ranking', value: '243' } },
        ],
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Medicine & Healthcare', icon: 'mdi:hospital-box' },
            { name: 'Technology & IT', icon: 'mdi:laptop' },
            { name: 'Environmental Science', icon: 'mdi:leaf' },
            { name: 'Business & Management', icon: 'mdi:briefcase' },
            { name: 'Sustainable Energy', icon: 'mdi:lightning-bolt' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in Sweden',
            tuitionFees: [
                { degree: 'EU/EEA (Free)', cost: 'Free or minimal' },
                { degree: 'Non-EU (India)', cost: '€8,000 - 17,000/year' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: '€500 - 900/month' },
                { item: 'Food & Groceries', cost: '€300 - 500/month' },
                { item: 'Transport & Utilities', cost: '€100 - 200/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in Sweden',
            description: 'Swedish universities and government offer scholarships to international students.',
            organizations: [
                { name: 'Swedish Institute', url: 'si.se' },
                { name: 'KTH Scholarships', url: 'kth.se' },
                { name: 'Lund Scholarships', url: 'lu.se' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in Sweden',
            description: 'Sweden has one of Europe\'s strongest job markets with excellent opportunities.',
            sectors: [
                { name: 'Technology & IT', icon: 'mdi:laptop' },
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
                { name: 'Renewable Energy', icon: 'mdi:leaf' },
                { name: 'Business', icon: 'mdi:briefcase' },
                { name: 'Research', icon: 'mdi:flask' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in Sweden',
            items: [
                'Valid Passport (6+ months)',
                'University admission letter',
                'Academic transcripts and diploma',
                'English proficiency (IELTS 6.5+ or TOEFL 92+)',
                'Motivation letter',
                'CV/Resume',
                'Documentation of financial means',
            ],
            financialProof: [
                'Proof of funds (SEK 145,000-186,000/year)',
                'Bank statements',
                'Sponsor letter',
            ],
        },
        visaProcess: {
            heading: 'Sweden Student Residence Permit Process',
            steps: [
                'Receive admission offer from Swedish university',
                'Gather all required documents',
                'Apply for residence permit at Swedish Migration Board',
                'Pay application fee (SEK 2,000)',
                'Submit biometric data if required',
                'Receive permit decision (4-6 weeks)',
                'Arrange travel and accommodation',
                'Register at local authorities upon arrival',
            ],
        },
        relatedArticles: [
            'Study in Sweden: Complete Guide for Indian Students',
            'Cost of Living in Swedish Cities',
            'Best Tech Universities in Sweden',
            'Healthcare System for International Students',
            'Student Life in Stockholm and Other Cities',
            'Part-time Work Opportunities',
        ],
        successStories: [
            { name: 'Vikram Saxena', university: 'KTH Royal Institute', review: 'World-class engineering education in Scandinavia. Sweden is amazing!' },
            { name: 'Neha Krishnan', university: 'Lund University', review: 'Excellent research opportunities and vibrant student culture. Loved Sweden!' },
            { name: 'Aditya Nair', university: 'Karolinska Institute', review: 'Top-tier biomedical research. An incredible experience!' },
            { name: 'Reena Patel', university: 'Chalmers University', review: 'Strong engineering programs and beautiful country. Highly recommended!' },
        ],
        faqs: [
            { question: 'Is tuition free for Indian students?', answer: 'No, non-EU students (including Indians) pay €8-17k/year. EU citizens get free or cheaper education.' },
            { question: 'Do I need Swedish language?', answer: 'No, most Master\'s programs are taught entirely in English.' },
            { question: 'What is the job market like?', answer: 'Excellent. Sweden has strong tech, engineering, and healthcare sectors with good salaries.' },
        ],
    },

    netherlands: {
        name: 'Netherlands',
        slug: 'netherlands',
        heroIcon: 'noto:flag-netherlands',
        hero: {
            title: 'Study in Netherlands for Indian Students: Dutch Excellence',
            subtitle: 'Discover world-class education in Europe\'s most international country',
            description: 'Netherlands offers innovative education, international environment, and exceptional career opportunities. Join leading universities in the world\'s most international country.',
        },
        ctas: { primary: 'Free Expert Consultation', secondary: 'View & Download Brochure', tertiary: 'Get Started' },
        heroStats: [
            { label: 'Universities', value: '30+' },
            { label: 'Annual Fees', value: '€6k-22k' },
            { label: 'International Students', value: '300K+' },
            { label: 'Post-Study Work', value: '1-3 Year' },
        ],
        mainHeading: 'Study in Netherlands for Indian Students with Top Universities',
        whyStudy: {
            heading: 'Why Study in Netherlands?',
            points: [
                { title: 'World-Class Universities', description: 'Home to University of Amsterdam, TU Delft, and Erasmus University.' },
                { title: 'International Environment', description: 'Most multicultural education system in Europe with diverse students.' },
                { title: 'English-Taught Programs', description: 'Virtually all Master\'s programs taught in English.' },
                { title: 'Innovative Education', description: 'Problem-based learning and focus on practical skills.' },
                { title: 'Great Infrastructure', description: 'Modern campuses with excellent facilities and technology.' },
                { title: 'Student-Friendly', description: 'Highly supportive environment for international students.' },
                { title: 'Career Opportunities', description: 'Strong job market with post-study work visa up to 3 years.' },
            ],
        },
        consultationForm: { fields: ['Name', 'Email', 'Mobile Number', 'Preferred Course', 'Select Month', 'Select Year'], consent: 'I consent to receiving consultation calls.' },
        topUniversities: [
            { name: 'Delft University of Technology', shortName: 'Delft University of Technology', popularFor: 'Civil and Structural Engineering', ranking: { label: 'QS World Ranking', value: '47' } },
            { name: 'University of Amsterdam', shortName: 'University of Amsterdam', popularFor: 'Business Economics', ranking: { label: 'QS World Ranking', value: '53' } },
            { name: 'Utrecht University', shortName: 'Utrecht University', popularFor: 'Law', ranking: { label: 'QS World Ranking', value: '107' } },
            { name: 'Leiden University', shortName: 'Leiden University', popularFor: 'Arts & Humanities', ranking: { label: 'QS World Ranking', value: '126' } },
            { name: 'Eindhoven University of Technology', shortName: 'Eindhoven University of Technology', popularFor: 'Applied Physics', ranking: { label: 'QS World Ranking', value: '136' } },
            { name: 'University of Groningen', shortName: 'University of Groningen', popularFor: 'Psychology', ranking: { label: 'QS World Ranking', value: '159' } },
            { name: 'University of Twente', shortName: 'University of Twente', popularFor: 'Engineering', ranking: { label: 'QS World Ranking', value: '210' } },
        ],
        popularCourses: [
            { name: 'Engineering', icon: 'mdi:hammer-wrench' },
            { name: 'Business & MBA', icon: 'mdi:briefcase' },
            { name: 'Computer Science', icon: 'mdi:laptop' },
            { name: 'Medicine & Healthcare', icon: 'mdi:hospital-box' },
            { name: 'Law', icon: 'mdi:gavel' },
            { name: 'Water Technology', icon: 'mdi:water' },
        ],
        costOfStudying: {
            heading: 'Cost of Studying in Netherlands',
            tuitionFees: [
                { degree: 'Public Universities', cost: '€2,000 - 6,000/year' },
                { degree: 'International Programs', cost: '€6,000 - 22,000/year' },
            ],
            livingExpenses: [
                { item: 'Accommodation', cost: '€600 - 1,000/month' },
                { item: 'Food & Groceries', cost: '€200 - 400/month' },
                { item: 'Transport & Utilities', cost: '€100 - 200/month' },
            ],
        },
        scholarships: {
            heading: 'Scholarships in Netherlands',
            description: 'Dutch universities and organizations offer various scholarships for international students.',
            organizations: [
                { name: 'Holland Scholarship', url: 'hollandscholarship.org' },
                { name: 'UvA Fellowship', url: 'uva.nl' },
                { name: 'Erasmus Mundus', url: 'erasmusmundus.org' },
            ],
        },
        careerProspects: {
            heading: 'Career Prospects in Netherlands',
            description: 'Netherlands has excellent job opportunities with competitive salaries and strong worker protections.',
            sectors: [
                { name: 'Engineering', icon: 'mdi:hammer-wrench' },
                { name: 'Technology & IT', icon: 'mdi:laptop' },
                { name: 'Finance & Banking', icon: 'mdi:bank' },
                { name: 'Water Technology', icon: 'mdi:water' },
                { name: 'Business & Consulting', icon: 'mdi:briefcase' },
                { name: 'Healthcare', icon: 'mdi:hospital-box' },
            ],
        },
        documents: {
            heading: 'Documents Required to Study in Netherlands',
            items: [
                'Valid Passport (6+ months)',
                'University admission letter',
                'Academic transcripts and diploma',
                'English proficiency (IELTS 6.5+ or TOEFL 92+)',
                'Motivation letter',
                'CV/Resume',
                'Letters of recommendation (usually 2)',
            ],
            financialProof: [
                'Proof of funds (�1,500-2,500/month)',
                'Bank statements',
                'Sponsor letter',
            ],
        },
        visaProcess: {
            heading: 'Netherlands Student Residence Permit Process',
            steps: [
                'Receive admission offer from Dutch university',
                'Gather all required documents',
                'Apply for residence permit (TWV) through university',
                'Submit documents to Immigration Service (IND)',
                'Pay application fee (�315-630)',
                'Receive residence permit decision (5-10 working days)',
                'Collect biometric residence permit if approved',
                'Register at local municipality upon arrival',
            ],
        },
        relatedArticles: [
            'Study in Netherlands: Complete Guide for Indian Students',
            'Cost of Living in Amsterdam vs Other Cities',
            'Best Engineering Universities in Netherlands.',
            'Student Accommodation Guide',
            'Healthcare for International Students',
            'Part-time Work Rights and Opportunities',
        ],
        successStories: [
            { name: 'Rajesh Kumar', university: 'TU Delft', review: 'World-class engineering education and innovative teaching methods. Netherlands is perfect!' },
            { name: 'Priya Sharma', university: 'University of Amsterdam', review: 'Diverse community and excellent education. Amsterdam life is amazing!' },
            { name: 'Akshay Desai', university: 'Erasmus University', review: 'Top-tier business program with excellent job placements. Highly recommended!' },
            { name: 'Sneha Verma', university: 'Utrecht University', review: 'Great student support and vibrant academic environment. Loved my time here!' },
        ],
        faqs: [
            { question: 'Are programs taught in English?', answer: 'Yes, most Master\'s programs are taught in English. Dutch language is not required.' },
            { question: 'What is the post-study work visa?', answer: 'Netherlands offers a 1-3 year residence permit after graduation for job seeking or employment.' },
            { question: 'Can I work part-time?', answer: 'Yes, international students can work unlimited hours (employers typically limit to 20/week during studies).' },
            { question: 'Is it expensive to live in Netherlands?', answer: 'Moderate cost - Amsterdam is expensive but other cities are affordable. Average: �1,000-1,500/month.' },
        ],
    },
};
