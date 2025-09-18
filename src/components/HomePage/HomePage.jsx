import Merchant from '../../Merchant';
import Banner from './Banner';
import LogoMarquee from './LogoMarquee';
import ParcellIssues from './ParcellIssues';
import Services from './Services';


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <LogoMarquee/>
            <ParcellIssues/>
            <Merchant/>
        </div>
    );
};

export default HomePage;