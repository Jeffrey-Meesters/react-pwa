import React, { Component } from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component { 

    scrollHandler = (event) => {
        console.log(event.nativeEvent.wheelDelta)
        if (event.nativeEvent.wheelDelta > 0) {
            console.log('up')
        } else {
            this.props.history.push('/products')
        }
    }
    
    render() {
        return (
            <div className="page home-page" onWheel={ this.scrollHandler }>
                <div className="cta-wrapper">
                    <span className="btn-slide-animation btn-span" id="btn-why">
                        <Button btnText="WHY" btnClass="btn home-page why floating-cta glow float-animation same-as-bgc-c" />
                    </span>
                    <span className="btn-slide-animation btn-span" id="btn-what">
                        <Button btnText="WHAT" btnClass="btn home-page what floating-cta glow float-animation same-as-bgc-c" />
                    </span>
                    <span className="btn-slide-animation btn-span" id="btn-how">
                        <Button btnText="HOW" btnClass="btn home-page how floating-cta glow float-animation same-as-bgc-c" />
                    </span>
                </div>
                <div className="croll-button" onClick={this.scrollHandler} >
                    <Button btnText="product" btnClass="btn home-page croller same-as-bgc-c" />
                    <FontAwesomeIcon className="double-arrow" icon="angle-double-down" />
                </div>
            </div>
        )
    }
}

export default Home;