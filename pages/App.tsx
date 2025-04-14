import React, { Component } from "react";
import Header from "@/src/shared/Header";
import Footer from "@/src/shared/Footer";
import "../src/App.scss"

export default class App extends Component {
    state = {
        isFullPageLayout: false
    }

    render() {
        const headerComponent = !this.state.isFullPageLayout ? <Header/> : null;

        const footerComponent = !this.state.isFullPageLayout ? <Footer/> : null;
        return (
            <>
                <header className="foi-header landing-header">
                    {headerComponent}
                </header>

                <footer className="foi-footer text-white">
                    {footerComponent}
                </footer>
            </>
        );
    }
}