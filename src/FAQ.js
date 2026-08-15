import React from 'react';

export default function FAQ(props) {
    let cardStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
        border: props.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)'
    };

    return (
        <div className="container-fluid min-vh-100 py-5" style={{ 
            backgroundColor: props.mode === 'dark' ? '#042743' : 'white', 
            color: props.mode === 'dark' ? 'white' : '#042743' 
        }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-5 mb-2">Frequently Asked Questions</h1>
                    <p className={`fs-5 ${props.mode === 'dark' ? 'text-light opacity-75' : 'text-muted'}`}>
                        Got questions about TechText? Find answers below.
                    </p>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="p-4 rounded shadow-sm mb-3" style={cardStyle}>
                            <h3 className="h5 fw-bold text-primary mb-2">What is TechText?</h3>
                            <p className="mb-0">
                                TechText is a professional, utility-first text manipulation and developer formatting web application designed to help you quickly clean up, transform, and analyze strings of text.
                            </p>
                        </div>

                        <div className="p-4 rounded shadow-sm mb-3" style={cardStyle}>
                            <h3 className="h5 fw-bold text-primary mb-2">Is my data secure?</h3>
                            <p className="mb-0">
                                Yes! All text processing happens completely client-side right inside your browser using JavaScript and React state. Your text is never sent or stored on any external server.
                            </p>
                        </div>

                        <div className="p-4 rounded shadow-sm mb-3" style={cardStyle}>
                            <h3 className="h5 fw-bold text-primary mb-2">How do I switch to Dark Mode?</h3>
                            <p className="mb-0">
                                Simply click the "Enable Dark Mode" toggle switch located in the top-right corner of the navigation bar. The app will instantly transition its theme across all pages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}