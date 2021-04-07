import {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
function App(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => props.history.listen(() => {
        setIsMenuOpen(false);
    }));
    return (
        <div>
            <Header
                isMenuOpen={isMenuOpen}
                onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
            {/* Other stuff */}
        </div>
    );
}
export default withRouter(App);
