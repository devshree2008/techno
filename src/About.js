import React from 'react';

export default function About(props) {
    let cardStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
        border: props.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)'
    };

    return (
        <div className="container-fluid min-vh-100 py-4" style={{ 
            backgroundColor: props.mode === 'dark' ? '#042743' : 'white', 
            color: props.mode === 'dark' ? 'white' : '#042743' 
        }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-5 mb-2">About TechText</h1>
                    <p className={`fs-5 ${props.mode === 'dark' ? 'text-light opacity-75' : 'text-muted'}`}>
                        Empowering developers and writers with lightning-fast text analysis tools.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Mission Card */}
                    <div className="col-md-4">
                        <div className="p-4 rounded shadow-sm h-100" style={cardStyle}>
                            <h3 className="h5 fw-bold mb-3 text-primary">🎯 Our Mission</h3>
                            <p className="mb-0">
                                We are passionate about building seamless utilities that simplify everyday text manipulation. Our goal is to provide a clean, clutter-free workspace for quick edits and deep insights.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 rounded shadow-sm h-100" style={cardStyle}>
                            <h3 className="h5 fw-bold mb-3 text-primary">⚡ What We Offer</h3>
                            <p className="mb-0">
                                From instant case converters (Title, Sentence, camelCase, snake_case) to real-time word counting, character metrics, and reading time estimation—all in one responsive application.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 rounded shadow-sm h-100" style={cardStyle}>
                            <h3 className="h5 fw-bold mb-3 text-primary">💻 Built For Performance</h3>
                            <p className="mb-0">
                                Engineered using modern React principles, state hooks, and responsive design systems to guarantee smooth cross-platform performance and optimal accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}