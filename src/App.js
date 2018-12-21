import React, { Component } from 'react';
import './App.sass';
import Button from './components/Button';
import axios from 'axios';

class App extends Component {

  clickHiHandler = () => {
    try {
      const postData = new FormData();
      postData.append('email', "jef");
      postData.append('password', "testt")
      const config = { headers: {'Content-Type': 'multipart/form-data' }};

      axios.post(`http://www.teerenpelit.com.machinejef/ajax/auth.php?action=logon`, postData, config)
      .then(res => {
        const persons = res.data;
        console.log(persons)
      })
      .catch(error => {
        console.error(error)
      })
    } catch(error) {
      console.error('error', error)
    }
  }

  clickByeHandler = () => {
    console.log('Bye Bye');
  }

  clickYoloHandler = () => {
    console.log('Yolo');
  }

  clickWTFHandler = () => {
    try {
      const postData = new FormData();
      postData.append('country_code', "AU");
      postData.append('bundle_id', 10);
      postData.append('payment_method', "visamastercard");
      postData.append('redirect_location', "http://www.teerenpelit.com.machinejef/messages/overview");
      const config = { headers: {'Content-Type': 'multipart/form-data' }};

      axios.post("http://www.teerenpelit.com.machinejef/ajax/credits.php?action=createOrder", postData, config)
      .then(res => {
        const response = res.data;
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
    } catch(error) {
      console.error('error', error)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm still here!</h1>
        <div className="button-wapper">
          <div className="spacer hi-btn">
            <Button btnText="Login" btnClass="btn primary" btnFunction={this.clickHiHandler} />
          </div>

          <div className="spacer">
            <Button btnText="Bye bye" btnClass="btn secondary" btnFunction={this.clickByeHandler} />
          </div>

          <div className="spacer">
            <Button btnText="Yolo!" btnClass="btn light" btnFunction={this.clickYoloHandler} />
          </div>

          <div className="spacer">
            <Button btnText="Buy credits" btnClass="btn dark" btnFunction={this.clickWTFHandler} />
          </div>

          <div className="spacer">
            <Button btnText="no class" btnClass="no class" btnFunction={this.clickWTFHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
