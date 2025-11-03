
import Banner from './Banner';
import LogoMarquee from './LogoMarquee';
import Merchant from './Merchant';
import ParcellIssues from './ParcellIssues';
import ReviewPart from './Reviewpart';
import Services from './Services';


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <LogoMarquee/>
            <ParcellIssues/>
            <Merchant/>
            <ReviewPart/>
        
           
        </div>
    );
};

export default HomePage;