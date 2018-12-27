import React, { Component } from 'react';
import Button from '../components/Button';

class Home extends Component {
    render() {
        return (
            <div className="page home-page">
                <div className="cta-wrapper">
                    <Button btnText="Click me!" btnClass="btn home-page why floating-cta glow float-animation same-as-bgc-c" />
                    <Button btnText="Click me!" btnClass="btn home-page what floating-cta glow float-animation same-as-bgc-c" />
                    <Button btnText="Click me!" btnClass="btn home-page how floating-cta glow float-animation same-as-bgc-c" />
                </div>
            </div>
        )
    }
}

export default Home;