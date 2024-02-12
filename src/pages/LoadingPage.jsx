
    import React, { Component } from 'react';

    export default class LoadingPage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showLoading: false, // Add the initial state for showLoading
            };
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ showLoading: true });
            }, 1000);
        }
        render() {
            return (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9999,
                        opacity: 0,
                        transition: 'opacity 2s ease-in-out',
                        animation: 'fade-in 2s ease-in-out infinite',

                    }}
                    
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            fontSize: 24,
                            opacity: 0,
                            transition: 'opacity 2s ease-in-out',
                        animation: 'fade-in 2s ease-in-out infinite',
                        }}
                    >
                        Loading...
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: 12,
                        opacity: 1,
                    
                    }}>
                        This might take a while, usually less than a minute.
                    </div>
                </div>
            );
        }
    }
    // Add CSS keyframes for fade-in animation
    const styles = `
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
    `;

    // Inject the CSS styles into the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
