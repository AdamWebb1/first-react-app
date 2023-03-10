import React, { Component } from "react";

class Header extends Component {
    render () {

        const headerStyle = {
            padding: "20px 0",
            lineHeight: "1.5em",
        }

        return (
            <header style={headerStyle}>
                <h1
                    style={{
                        fontSize: "6rem",
                        fontWeight: "600",
                        marginBottom: "2rem",
                        lineHeight: "1em",
                        color: "#444",
                        textAlign: "center",
                      }}
                >
                    {this.props.titleProp}
                </h1>
            </header>
        )
    }
}

export default Header