export const IELTS_DATA = {
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    tagline: 'Trusted by 12,000+ organizations globally for 30+ years',
    hero: {
        heading: 'Master IELTS — Your Gateway to Global Opportunities',
        subHeading: 'Industry-leading test with flexible formats: Paper, Computer, or Online',
        cta: 'Start IELTS Prep Today',
    },
    overview: {
        description: 'IELTS is a globally recognized English language proficiency test that assesses your communication skills. Whether you\'re studying abroad, immigrating, or advancing your career, IELTS opens doors worldwide.',
        testFormat: {
            components: ['Listening', 'Reading', 'Writing', 'Speaking'],
            duration: '3 hours (approximately)',
            scoringScale: '0-9 (Band Scale)',
            validity: '2 years',
        },
    },
    modes: [
        {
            title: 'IELTS on Paper',
            icon: 'mdi:file-document',
            description: 'Traditional pen and paper format',
            details: [
                'Listening, Reading, Writing: At test center',
                'Speaking: Face-to-face with examiner',
                'Results: 7 working days',
            ],
            color: 'bg-blue-500',
        },
        {
            title: 'IELTS on Computer',
            icon: 'mdi:laptop',
            description: 'Digital format with same content',
            details: [
                'Listening, Reading, Writing: On computer',
                'Speaking: Face-to-face with examiner',
                'Results: 2 working days',
            ],
            color: 'bg-green-500',
        },
        {
            title: 'IELTS Online',
            icon: 'mdi:wifi',
            description: 'Take from home with online proctor',
            details: [
                'All modules: From home',
                'Proctored supervision required',
                'Results: 6-8 days',
            ],
            color: 'bg-purple-500',
        },
    ],
    types: [
        {
            name: 'IELTS Academic',
            usage: 'For undergraduate & postgraduate studies',
            icon: 'mdi:school',
        },
        {
            name: 'IELTS General',
            usage: 'For vocational studies or immigration',
            icon: 'mdi:briefcase',
        },
        {
            name: 'IELTS Life Skills',
            usage: 'For UK immigration applications',
            icon: 'mdi:passport',
        },
        {
            name: 'IELTS UKVI',
            usage: 'Specifically for UK Visa & Immigration',
            icon: 'mdi:flag-variant',
        },
    ],
    sections: [
        {
            name: 'Listening',
            duration: 'PB: 40 min | CB: ~30 min',
            questions: '40 questions',
            description: 'Candidates hear recording only once and answer questions as they listen. In Paper-Based format, you have 10 minutes to transfer answers.',
        },
        {
            name: 'Reading',
            duration: '60 minutes',
            questions: '40 questions',
            description: 'Multiple question types: Multiple Choice, Matching, Completion, Fill in blanks. Includes 3 passages with varying difficulty levels.',
        },
        {
            name: 'Writing',
            duration: '60 minutes',
            questions: '2 tasks',
            description: 'Task 1: Report (150 words) | Task 2: Essay (250 words). Academic focuses on data interpretation; General focuses on letters.',
        },
        {
            name: 'Speaking',
            duration: '11-14 minutes',
            questions: '3 parts',
            description: 'Part 1: Introduction questions | Part 2: Topic monologue (1 min prep) | Part 3: Discussion with examiner',
        },
    ],
    scoring: {
        scale: '0-9 (Band Scale)',
        bands: [
            { band: 9, level: 'Expert User', description: 'Full operational proficiency' },
            { band: 8, level: 'Very Good User', description: 'Fully operational proficiency' },
            { band: 7, level: 'Good User', description: 'Operational proficiency in most contexts' },
            { band: 6, level: 'Competent User', description: 'Generally effective in most situations' },
            { band: 5, level: 'Modest User', description: 'Basic competence in many areas' },
        ],
        requirement: 'Generally 6 bands minimum (UG), 6.5 bands (PG)',
    },
    trainingFeatures: [
        { icon: 'mdi:clock-outline', title: '30 Hours', description: 'Intensive & comprehensive training program' },
        { icon: 'mdi:users-outline', title: 'Small Batches', description: 'Maximum 10-15 students per batch for personalized attention' },
        { icon: 'mdi:test-tube', title: '20 Mock Tests', description: 'Full-length mock tests (written & practical speaking)' },
        { icon: 'mdi:book-outline', title: 'E-Books', description: 'Comprehensive study materials provided' },
        { icon: 'mdi:target', title: 'All Skills', description: 'Equal focus on Listening, Reading, Writing, Speaking' },
        { icon: 'mdi:laptop', title: 'Online & Offline', description: 'Flexible learning mode options' },
    ],
    timings: [
        { duration: 'Weekdays', schedule: 'Tuesday to Friday, 2 hours/day' },
        { duration: 'Weekends', schedule: 'Saturday & Sunday, 4 hours/day' },
        { duration: 'Fast Track', schedule: 'Tuesday to Sunday, 4 hours/day' },
    ],
    fees: {
        testFee: '₹18,000',
        ukviTestFee: '₹18,250',
        reschedulingFee: '₹4,500',
        extraScoreReporting: '₹250 (e-reporting only)',
    },
    upcomingDates: [
        { month: 'October 2026', dates: '18, 25' },
        { month: 'November 2026', dates: '1, 6, 15, 22' },
        { month: 'December 2026', dates: '6, 11, 20, 27' },
    ],
    specialFeatures: [
        'IELTS One Skill Retake - Retake only one section within 60 days',
        'Computer-based format with faster result declaration',
        'Accepted by 11,000+ institutions worldwide',
        'No negative marking - all questions count equally',
        '4 free score reports to universities',
    ],
    faq: [
        {
            q: 'What\'s the difference between Paper and Computer-based IELTS?',
            a: 'Both have the same content and difficulty. Differences: Paper has 10 min to transfer answers, results in 7 days. Computer has 2 min review, results in 2 days. Speaking is always face-to-face.',
        },
        {
            q: 'Can I retake individual sections?',
            a: 'Yes! IELTS One Skill Retake allows you to retake one section within 60 days of your original test. Only available for computer-delivered candidates.',
        },
        {
            q: 'How often can I take IELTS?',
            a: 'Paper-based: 2-4 times monthly. Computer-based: Available 7 days/week at multiple time slots (9am-12pm, 1pm-4pm).',
        },
        {
            q: 'What\'s the difference between Academic and General?',
            a: 'Academic: University entrance. General: Immigration/vocational. Reading & Writing tasks differ; Listening & Speaking are the same.',
        },
        {
            q: 'How long are IELTS scores valid?',
            a: 'IELTS scores are valid for 2 years from the test date.',
        },
    ],
};

export const TOEFL_DATA = {
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    tagline: 'Accepted by 11,500+ universities in 160+ countries',
    hero: {
        heading: 'Ace the TOEFL — Preferred by US Universities Worldwide',
        subHeading: 'Computer-based test offered 30-40 times annually with flexible formats',
        cta: 'Begin TOEFL Preparation',
    },
    overview: {
        description: 'TOEFL is the standardized English proficiency test that demonstrates your ability to use English in academic settings. Whether you\'re applying to universities in the USA, Canada, UK, or Australia, TOEFL is globally trusted and recognized.',
        testFormat: {
            components: ['Reading', 'Listening', 'Speaking', 'Writing'],
            duration: '2 hours (approximately)',
            scoringScale: '0-120 (sectional: 0-30)',
            validity: '2 years',
            format: 'Computer-Based (iBT)',
        },
    },
    formats: [
        {
            title: 'TOEFL iBT',
            icon: 'mdi:laptop-box',
            description: 'Internet-Based Test - Full edition',
            details: [
                'Available 30-40 times per year',
                'Offered in 170+ locations globally',
                'At-home version: 24/7, 4 days a week',
                'Integrated tasks with real-world scenarios',
            ],
            color: 'bg-orange-500',
            score: '0-120',
        },
        {
            title: 'TOEFL Essentials',
            icon: 'mdi:lightbulb-on',
            description: 'Quick 90-minute format',
            details: [
                'Shorter reading & listening passages',
                'Focus on daily English communication',
                'Accepted by 500+ institutions worldwide',
                'Newer, more accessible option',
            ],
            color: 'bg-amber-500',
            score: 'Proprietary scale',
        },
    ],
    sections: [
        {
            name: 'Reading',
            duration: '35 minutes',
            questions: '20 questions',
            tasks: '2 passages, 10 questions each',
            description: 'Read academic passages and answer comprehension questions. Tests your ability to understand main ideas, details, and inferences.',
            skills: ['Skimming & scanning', 'Detail comprehension', 'Vocabulary in context'],
        },
        {
            name: 'Listening',
            duration: '36 minutes',
            questions: '28 questions',
            tasks: '3 lectures + 2 conversations',
            description: 'Listen to academic lectures and conversations. Answer during or after listening. Tests note-taking and comprehension skills.',
            skills: ['Main idea identification', 'Note-taking', 'Understanding relationships'],
        },
        {
            name: 'Speaking',
            duration: '16 minutes',
            questions: '4 tasks',
            tasks: '1 independent + 3 integrated tasks',
            description: 'Speak on familiar topics and discuss what you read/heard. Clear pronunciation and coherent responses are key.',
            skills: ['Fluency & coherence', 'Pronunciation', 'Grammar accuracy'],
        },
        {
            name: 'Writing',
            duration: '29 minutes',
            questions: '2 tasks',
            tasks: '1 integrated + 1 academic discussion',
            description: 'Integrate reading/listening into writing. Type responses demonstrating academic writing skills.',
            skills: ['Summarization', 'Argumentation', 'Academic writing conventions'],
        },
    ],
    scoring: {
        scale: '0-120 (30 per section)',
        breakdown: [
            { range: '120', label: 'Perfect Score', description: 'Full mastery of English' },
            { range: '100-119', label: 'Advanced', description: 'Well suited for graduate studies' },
            { range: '80-99', label: 'Proficient', description: 'Good for most universities' },
            { range: '60-79', label: 'Intermediate', description: 'Basic academic English' },
            { range: '0-59', label: 'Lower', description: 'Below typical university requirements' },
        ],
        noNegativeMarking: 'All correct answers count equally - no penalty for wrong answers',
    },
    trainingFeatures: [
        { icon: 'mdi:clock-outline', title: '30 Hours', description: 'Intensive comprehensive training' },
        { icon: 'mdi:users-outline', title: 'Small Classes', description: '10-15 students maximum for personalized coaching' },
        { icon: 'mdi:test-tube', title: '5 Mock Tests', description: 'Full-length mock exams with scoring' },
        { icon: 'mdi:certified', title: 'ETS-Trained Faculty', description: 'Officially trained by ETS (test creators)' },
        { icon: 'mdi:target', title: 'All Components', description: 'Equal focus on all 4 skills' },
        { icon: 'mdi:book-outline', title: 'E-Books Provided', description: 'Comprehensive study materials included' },
    ],
    timings: [
        { duration: 'Weekdays', schedule: 'Tuesday to Friday, 2 hours/day' },
        { duration: 'Weekends', schedule: 'Saturday & Sunday, 4 hours/day' },
        { duration: 'Fast Track', schedule: 'Tuesday to Sunday, 4 hours/day' },
    ],
    fees: {
        testFee: '₹18,000',
        reschedulingFee: '₹5,900',
        extraScoreReporting: '₹1,950',
    },
    upcomingDates: [
        { month: 'October 2026', dates: '15, 17, 18, 24, 25, 29' },
        { month: 'November 2026', dates: '1, 8, 9, 12, 14, 15, 19, 22, 23, 29, 30' },
        { month: 'December 2026', dates: '3, 6, 7, 12, 13, 17, 19, 20, 27' },
    ],
    specialFeatures: [
        'Offered 30-40 times annually globally',
        'At-home testing available with online proctoring',
        'Results in 4-8 calendar days',
        'Test at your preferred time & location',
        '4 free score reports to institutions',
        'USA universities prefer TOEFL - essential for US study',
    ],
    faq: [
        {
            q: 'What\'s the difference between TOEFL iBT and Essentials?',
            a: 'iBT is the full test (120 points, 2 hours). Essentials is shorter (90 min) with simpler texts, accepted by 500+ institutions. iBT is more widely accepted.',
        },
        {
            q: 'Can I take TOEFL at home?',
            a: 'Yes! TOEFL iBT Home Edition is available 24/7 on 4 days a week (except Thu/Fri). Requires stable internet and online proctoring.',
        },
        {
            q: 'How many times can I take TOEFL?',
            a: 'You can take TOEFL multiple times. Minimum gap between tests depends on registration. Most institutions accept highest score.',
        },
        {
            q: 'Which universities accept TOEFL?',
            a: 'Most US universities require TOEFL for non-native English speakers. Also accepted by universities in Canada, UK, Australia, and many others (11,500+ institutions).',
        },
        {
            q: 'What\'s a good TOEFL score?',
            a: 'Generally 80+ for bachelor\'s, 90+ for Master\'s programs. Top universities often require 100+. Check specific university requirements.',
        },
    ],
};

export const PTE_DATA = {
    name: 'PTE',
    fullName: 'Pearson Test of English',
    tagline: 'Trusted by 35,000+ universities & institutions globally',
    hero: {
        heading: 'Master PTE — The Fast-Track to Global Universities',
        subHeading: 'Computer-delivered excellence with results in 48 hours',
        cta: 'Start Your PTE Journey',
    },
    overview: {
        description: 'PTE Academic is a computer-delivered English language proficiency test recognized by universities and institutions worldwide. With faster scoring and consistent assessment, PTE helps you achieve your study abroad goals efficiently.',
        testFormat: {
            components: ['Speaking', 'Writing', 'Reading', 'Listening'],
            duration: '2 hours 50 minutes',
            scoringScale: '10-90',
            validity: '2 years',
            format: 'Computer-Based Test (CBT)',
        },
    },
    testTypes: [
        {
            name: 'PTE Academic',
            icon: 'mdi:graduation-cap',
            level: 'Advanced',
            usage: 'For undergraduate & graduate admissions',
            score: '10-90',
        },
        {
            name: 'PTE Academic UKVI',
            icon: 'mdi:flag-variant',
            level: 'Advanced',
            usage: 'For UK, Ireland visa & immigration',
            score: '10-90',
        },
        {
            name: 'PTE Home A1/A2/B1',
            icon: 'mdi:home',
            level: 'Beginner',
            usage: 'For basic English proficiency',
            score: 'Pass/Fail',
        },
    ],
    sections: [
        {
            name: 'Personal Introduction',
            duration: '1 minute',
            description: 'Introduce yourself to the testing system. This section is not scored but provides context.',
            icon: 'mdi:account-voice',
        },
        {
            name: 'Speaking & Writing',
            duration: '54-67 minutes',
            tasks: '7 question types',
            components: [
                'Read Aloud',
                'Repeat Sentence',
                'Describe Image',
                'Retell Lecture',
                'Answer Short Question',
                'Summarize Spoken Text',
                'Written Essay',
            ],
            description: 'Demonstrate speaking and writing skills through integrated tasks mimicking real-world communication.',
            icon: 'mdi:microphone-outline',
        },
        {
            name: 'Reading & Writing',
            duration: '30 minutes',
            tasks: '5 question types',
            components: [
                'Multiple Choice (single answer)',
                'Multiple Choice (multiple answers)',
                'Re-order Paragraphs',
                'Fill in the Blanks',
                'Summarize Written Text',
            ],
            description: 'Read passages and demonstrate comprehension through various task types. Tests reading speed and accuracy.',
            icon: 'mdi:book-open-variant',
        },
        {
            name: 'Listening',
            duration: '30-43 minutes',
            tasks: '8 question types',
            components: [
                'Summarize Spoken Text',
                'Multiple Choice (answers)',
                'Fill in the Blanks',
                'Highlight Correct Summary',
                'Multiple Choice (single answer)',
                'Select Missing Word',
                'Highlight Incorrect Words',
                'Write from Dictation',
            ],
            description: 'Listen to lectures and conversations, then respond with comprehension and note-taking skills.',
            icon: 'mdi:headphones',
        },
    ],
    scoring: {
        scale: '10-90 (overall score)',
        bands: [
            { range: '79-90', level: 'Excellent', description: 'Highly proficient - ideal for top universities' },
            { range: '65-78', level: 'Very Good', description: 'Strong performance suitable for good universities' },
            { range: '50-64', level: 'Good', description: 'Competent English skills - meets many university requirements' },
            { range: '30-49', level: 'Fair', description: 'Basic competency in English communications' },
            { range: '10-29', level: 'Limited', description: 'Limited English proficiency' },
        ],
        individualSkills: 'Separate scores for Speaking, Writing, Reading, Listening (10-90 each)',
    },
    uniqueFeatures: [
        {
            icon: 'mdi:lightning-bolt',
            title: 'Fast Results',
            description: 'Results declared within 48 hours (vs 7-10 days for other tests)',
        },
        {
            icon: 'mdi:laptop',
            title: '100% Computer-Based',
            description: 'Integrated speaking and writing assessment through microphone & typing',
        },
        {
            icon: 'mdi:earth',
            title: 'Global Acceptance',
            description: 'Accepted by 35,000+ universities in US, UK, Canada, Australia, NZ',
        },
        {
            icon: 'mdi:handshake',
            title: 'Fair Assessment',
            description: 'Consistent, objective scoring - no human bias in evaluation',
        },
        {
            icon: 'mdi:calendar-multiple',
            title: 'Frequent Dates',
            description: 'Available throughout the year at 62+ test centers in India',
        },
        {
            icon: 'mdi:target',
            title: 'Skill-Focused',
            description: '20 question types testing real-world English communication',
        },
    ],
    trainingFeatures: [
        { icon: 'mdi:clock-outline', title: '30 Hours', description: 'Comprehensive coaching program' },
        { icon: 'mdi:users-outline', title: 'Small Batches', description: '10-15 students for personalized attention' },
        { icon: 'mdi:test-tube', title: '3 Full-Length Tests', description: 'Practice with actual PTE format' },
        { icon: 'mdi:certified', title: 'Pearson-Trained', description: 'Faculty trained by Pearson test creators' },
        { icon: 'mdi:target', title: 'Question-Type Focus', description: 'In-depth coverage of all 20 question types' },
        { icon: 'mdi:laptop', title: 'Online & Offline', description: 'Flexible training modes available' },
    ],
    timings: [
        { duration: 'Weekdays', schedule: 'Tuesday to Friday, 2 hours/day' },
        { duration: 'Weekends', schedule: 'Saturday & Sunday, 4 hours/day' },
        { duration: 'Fast Track', schedule: 'Tuesday to Sunday, 4 hours/day' },
    ],
    fees: {
        testFee: '₹18,000',
        lateFee: '₹18,900',
        extraScoreReporting: 'Free',
        reschedulingFee: '25% of test fee',
    },
    testCenters: '62+ Pearson Testing Centers across India including Mumbai, Pune, Ahmedabad, Delhi, Chennai',
    upcomingDates: [
        { month: 'October 2026', dates: '15, 24, 31' },
        { month: 'November 2026', dates: '7, 14, 19, 27' },
        { month: 'December 2026', dates: '5, 11, 19, 26' },
    ],
    faq: [
        {
            q: 'Why is PTE faster than other tests?',
            a: 'PTE is fully computer-delivered and automatically scored by AI. Results are ready in 48 hours vs 7-10 days for manual correction.',
        },
        {
            q: 'Is PTE accepted internationally?',
            a: 'Yes! PTE is accepted by 35,000+ universities globally, including top institutions in US, UK, Canada, Australia, New Zealand.',
        },
        {
            q: 'What\'s the advantage of speaking into a microphone?',
            a: 'Computer-based speaking assessment eliminates human bias, provides consistent evaluation, and tests real-world English communication scenarios.',
        },
        {
            q: 'How often can I take PTE?',
            a: 'You can retake PTE exam 5 days after your last test appointment. Available frequently throughout the year.',
        },
        {
            q: 'What\'s a good PTE score?',
            a: 'Generally 65+ for bachelor\'s, 75+ for Master\'s programs. Top universities prefer 79+. Individual university requirements vary.',
        },
    ],
};
