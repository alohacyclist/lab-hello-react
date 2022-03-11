import React from 'react'

export function DisplayHeader() {
    return (
        <div className="wrapper">
            <nav className="header">
                <img width="55" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="ironhack-logo" />
                <img width="50" height="20" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu-logo" />
            </nav>
            <div className="topBodyContainer">
                <h1>
                    Say Hello to<br/>
                    ReactJs
                </h1>
                <p>
                    You will learn how to use<br/>
                    the most popular frontend library,<br/>
                    and become a super Ninja developer.
                </p>
                <button>Awesome!</button>
            </div>
        </div>
    )
}
