import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import HeaderContainer from './features/layout/Header.container';
import FooterContainer from './features/layout/Footer.container';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import HomeContainer from './features/home/Home.container';
import LanguagesContainer from './features/languages/Languages.container';
import ServicesContainer from './features/services/Services.container';
import AboutContainer from './features/about/About.container';
import ContactContainer from './features/contact/Contact.container';
import GermanContainer from './features/languages/German.container';
import IeltsToeflPteContainer from './features/languages/IeltsToeflPte.container';
import EducationConsultancyContainer from './features/services/EducationConsultancy.container';
import VisaServicesContainer from './features/services/VisaServicesContainer';
import ApplicationServicesContainer from './features/services/ApplicationServicesContainer';
import EducationalLoanGuidanceContainer from './features/services/EducationalLoanGuidanceContainer';
import AdmissionAdvicesContainer from './features/services/AdmissionAdvicesContainer';
import AfterArrivalSupportContainer from './features/services/AfterArrivalSupportContainer';
import './index.css';

function ScrollToTop() {
    const { pathname } = window.location;
    if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
    }
    return null;
}

function App() {
    return (
        <Router>
            <CustomCursor />
            <ScrollProgress />
            <AnimatedBackground />
            <div className="flex flex-col min-h-screen text-slate-900 font-sans">
                <HeaderContainer />
                <main className="flex-grow w-full">
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/languages" element={<LanguagesContainer title="Our Languages" />} />
                        <Route path="/languages/german" element={<GermanContainer />} />
                        <Route path="/languages/ielts-toefl-pte" element={<IeltsToeflPteContainer />} />
                        <Route path="/services" element={<ServicesContainer />} />
                        <Route path="/services/education-consultancy" element={<EducationConsultancyContainer />} />
                        <Route path="/services/application-services" element={<ApplicationServicesContainer />} />
                        <Route path="/services/educational-loan-guidance" element={<EducationalLoanGuidanceContainer />} />
                        <Route path="/services/admission-advices" element={<AdmissionAdvicesContainer />} />
                        <Route path="/services/visa-services" element={<VisaServicesContainer />} />
                        <Route path="/services/after-arrival-support" element={<AfterArrivalSupportContainer />} />
                        <Route path="/about-us" element={<AboutContainer />} />
                        <Route path="/contact-us" element={<ContactContainer />} />
                        <Route path="*" element={<HomeContainer />} />
                    </Routes>
                </main>
                <FooterContainer />
            </div>
        </Router>
    );
}

export default App;
