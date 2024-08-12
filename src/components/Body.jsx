import LandingPage from '../elements/LandingPage.jsx'
import Article from '../elements/Article.jsx';
import Portfolio from '../elements/Portoflio.jsx';
import Contact from './Contact.jsx';

const Body = () => {
    return (
        <div>
            <LandingPage />
            <Article />
            <Portfolio />
            <Contact/>
        </div>
    )
}

export default Body;