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
          {'text': 'Easy Setup, Easy to Manage', 'af': 0},
          {'text': 'Customizable Layout', 'af': 0},
          {'text': 'Fully Responsive', 'af': 0},
          {'text': 'Works with All Affiliate Networks', 'af': 0},
          {'text': 'Embed Amazon Content', 'af': 1},
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
      const features = this.state.features.map((feature, index) => {
        let asterisk = '';
        if(feature.af) {
         asterisk = <i className="fas fa-lock"></i>;
        }
      return (
          <li key={index}>
              <i className="fas fa-check"></i>
              {feature.text}
              {asterisk}
          </li>
      );
      });
        return (
            <div className="homepage">
                <div className="hero">
                    <div className="tabs">
                        <div className="tabs-inner">
                            <Tab index={1} active={this.state.active_tab}>
                                <h1>Your New Blog Shop Page</h1>
                                <ul>{features}</ul>
                                <div className="button-group">
                                    <Button
                                        icon="cloud-download-alt"
                                        style="primary large"
                                        name="Download Now"
                                        href="https://wordpress.org/plugins/shop-page-wp/"
                                        target="_blank"
                                    />
                                    <Button
                                        icon="unlock-alt"
                                        style="second large"
                                        name="Advanced Features"
                                        callback={() => this.onClickTab(2)}
                                    />
                                </div>
                            </Tab>
                            <Tab index={2} active={this.state.active_tab}>
                                <h1>Unlock Advanced Features</h1>
                                <div className="text max-width">
                                    Purchase now with Stripe Checkout. By
                                    purchasing you will be emailed a license key
                                    which can be used to activate plugin
                                    advanced features.
                                </div>
                                <Checkout>
                                    <Button
                                        icon="shopping-cart"
                                        style="third large"
                                        name="Checkout"
                                    />
                                </Checkout>
                                <Button
                                    style="link second"
                                    name="Cancel"
                                    callback={() => this.onClickTab(1)}
                                />
                            </Tab>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("homepage")) {
    ReactDOM.render(<Homepage />, document.getElementById("homepage"));
}
