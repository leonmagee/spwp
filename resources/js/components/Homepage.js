import React, { Component } from "react";
import ReactDOM from "react-dom";
import Checkout from './Checkout';
import Button from './Button';
import Tab from './Tab';
//import axios from "axios";

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        const features = [
          {'text': 'Easy Setup, easy to manage', 'af': 0},
          {'text': 'Customizable Layout', 'af': 0},
          {'text': 'Fully Responsive', 'af': 0},
          {'text': 'Works with all affiliate networks', 'af': 0},
          {'text': 'Embed Amazon content', 'af': 1},
        ];

        this.state = {
            active_tab: 1,
            features
        };
    }

    // componentDidMount() {
    //     console.log('mounted')
    // }
    onClickTab(active_tab) {
      this.setState({ active_tab });
    }

    render() {
      const features = this.state.features.map(feature => {
        let asterisk = '';
        if(feature.af) {
         asterisk = <i className="fas fa-asterisk"></i>;
        }
      return (
          <li>
              <i className="fas fa-check"></i>
              {feature.text}
              {asterisk}
          </li>
      );
      });
        return (
            <div className="homepage">
                <div className="hero">
                    <h1>Your New Blog Shop Page</h1>
                    <ul>{features}</ul>
                    <div className="button-group">
                        <Button
                            icon="cloud-download-alt"
                            style="primary large"
                            name="Download Now"
                        />
                        <Button
                            icon="unlock-alt"
                            style="second large"
                            name="Advanced Features"
                        />
                    </div>
                </div>
                <div className="tabs">
                    <div className="tabs__nav">
                        <a onClick={() => this.onClickTab(1)}>Info</a>
                        <a onClick={() => this.onClickTab(2)}>Features</a>
                        <a onClick={() => this.onClickTab(3)}>Purchase</a>
                    </div>
                    <div className="tabs-inner">
                        <Tab index={1} active={this.state.active_tab}>
                            <h1>Your New Blog Shop Page</h1>
                            <h4>
                                A free WordPress plugin to create a simple and
                                <br />
                                powerful affiliate shop page on your website
                            </h4>
                        </Tab>
                        <Tab index={2} active={this.state.active_tab}>
                            <h1>Unlock Advanced Features</h1>
                            <h4>Purchase now with Stripe checkout</h4>
                            <Checkout>
                                <Button name="Checkout" />
                            </Checkout>
                        </Tab>
                        <Tab index={3} active={this.state.active_tab}>
                            <h4>Tab 3</h4>
                        </Tab>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("homepage")) {
    ReactDOM.render(<Homepage />, document.getElementById("homepage"));
}
