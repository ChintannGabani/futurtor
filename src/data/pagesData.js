import { BookOpen, GraduationCap, Users, Globe, Briefcase, Award, Clock } from 'lucide-react';

export const GERMAN_PAGE_DATA = {
  hero: {
    title: "German Language",
    subtitle: "Master the language of innovation and opportunities.",
  },
  whyChooseUs: [
    {
      title: "Goethe-Institute Aligned Curriculum",
      description: "Our courses are designed in accordance with international standards, giving you the best foundation in the German language.",
      icon: Award
    },
    {
      title: "Small Class Sizes for Better Attention",
      description: "We keep our classes small to ensure you get personalized support and focused learning.",
      icon: Users
    },
    {
      title: "Focus on All Four Skills",
      description: "Reading, Writing, Listening, and Speaking — we emphasize a well-rounded approach to mastering German.",
      icon: BookOpen
    },
    {
      title: "Real-World Application",
      description: "You'll not only learn the language but also gain cultural insights and practical language use for living, working, or studying in Germany.",
      icon: Globe
    },
    {
      title: "Technical Focus",
      description: "We specialize in providing tailored German language courses with a focus on technical vocabulary, helping professionals and students excel in specialized fields such as engineering, IT, business, and more.",
      icon: Briefcase
    },
    {
      title: "Constant Support",
      description: "We offer 24/7 support, with practice sessions and extra help whenever needed, ensuring no one is left behind.",
      icon: Clock
    },
    {
      title: "Affordable Fees",
      description: "Quality German language education doesn't have to break the bank — we offer competitive pricing and flexible payment plans.",
      icon: Award
    }
  ],
  benefits: [
    {
      title: "Access to Career Opportunities",
      description: "German is widely spoken in the business world, particularly in fields like engineering, technology, finance, and science. Mastering German opens up job opportunities in Germany, Austria, Switzerland, and other German-speaking countries."
    },
    {
      title: "Widely Used in Research",
      description: "German is a dominant language in academic research."
    },
    {
      title: "Access to Scholarships",
      description: "Many German-speaking universities offer scholarships to international students."
    },
    {
      title: "Study Abroad Opportunities",
      description: "Opens doors to studying in top German-speaking universities."
    },
    {
      title: "Tech Industry Advantage",
      description: "German is a key language in tech and engineering sectors."
    }
  ]
};

export const IELTS_PAGE_DATA = {
  hero: {
    title: "IELTS Training",
    subtitle: "Your gateway to global education and immigration.",
  },
  offeringsText: "We specialize in IELTS and PTE preparation, focusing on the four key modules: Reading, Listening, Writing, and Speaking. From day one, we emphasize speaking practice to build confidence. Our highly skilled coaching faculty and excellent results are a testament to the quality of instruction we provide.",
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "500+", label: "Happy Students" }
  ],
  scoreInfo: [
    "IELTS score is graded on a band scale from 0-9",
    "Generally the score required for UG is atleast 6 bands & for PG is 6.5 or more",
    "It usually takes 15 days to receive the hard copy of the result",
    "The score is valid for 2 years"
  ],
  modules: [
    "Listening",
    "Reading",
    "Writing",
    "Speaking"
  ]
};

export const EDUCATION_CONSULTANCY_DATA = {
  hero: {
    title: "Education Consultancy",
    subtitle: "Expert guidance for your international academic journey.",
  },
  introText: "FutureTor is an independent and Top Study Visa Consultant that helps students/parents with educational planning and awareness program about your course and career. We are keeping a tab on worldwide trend and advice students on the basis of:",
  adviceBasis: [
    { text: "Popular courses in that country", icon: Globe },
    { text: "Students caliber and interest", icon: Users },
    { text: "Budget and financial requirement", icon: Briefcase },
    { text: "Latest trending Professional course", icon: Award }
  ],
  footerText: "Our team of professional experts is here to answer all your career and college-related queries. Students can ask questions, participate in discussions, and stay updated with the latest news and articles related to their education interests. FutureTor is India's smartest college gateway, combining deep domain knowledge in higher education with technology, innovation, and credibility to offer personalized insights, helping students make informed decisions about their career, courses, and college choices."
};
