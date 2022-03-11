import React from 'react'

export function DisplayBody() {
    return (
        <div className="logos">
            <div className="logo-container">
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="logo1" />
                <h3>Declarative</h3>
                <p className="desc">React makes it painless to create interactive UIs.</p>
            </div>
            <div className="logo-container">
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="logo2" />
                <h3>Components</h3>
                <p className="desc">Build encapsulated components that manage their state.</p>
            </div>
            <div className="logo-container">
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="logo3" />
                <h3>Single-Way</h3>
                <p className="desc">A set of immutable values are passed to the components.</p>
            </div>
            <div className="logo-container">
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="logo4" />
                <h3>JSX</h3>
                <p className="desc">Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}
