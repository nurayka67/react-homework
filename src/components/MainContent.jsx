import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="card">
                <h2>About This Project</h2>
                <p>This is a React application created for Week 1 homework assignment.</p>
                <p>The application includes:</p>
                <ul>
                    <li>A Header component</li>
                    <li>A Main Content component</li>
                    <li>A Footer component</li>
                    <li>Responsive styling with CSS</li>
                </ul>
            </div>
            
            <div className="card">
                <h2>Homework Requirements</h2>
                <div className="step">
                    <div className="step-number">1</div>
                    <div>Set up development environment</div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div>Create App component</div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div>Create additional components</div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;