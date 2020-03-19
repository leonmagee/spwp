import React, { Component } from "react";
import ReactDOM from "react-dom";
import Checkout from './Checkout';
import Button from './Button';
import Tab from './Tab';
//import axios from "axios";

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_tab: 1
        };
    }

    // componentDidMount() {
    //     console.log('mounted')
    // }
    onClickTab(active_tab) {
      this.setState({ active_tab });
    }

    render() {
        return (
            <div className="homepage">
                <div className="tabs">
                    <div className="tabs__nav">
                        <a
                            onClick={() => this.onClickTab(1)}
                        >
                            Info
                        </a>
                        <a
                            onClick={() => this.onClickTab(2)}
                        >
                            Features
                        </a>
                        <a
                            onClick={() => this.onClickTab(3)}
                        >
                            Purchase
                        </a>
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
                                <Button />
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
