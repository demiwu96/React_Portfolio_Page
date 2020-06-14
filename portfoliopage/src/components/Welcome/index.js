import React, { Component } from "react";
import "./style.css";

const styles = {
    divStyle: {
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(https://cdn.hk01.com/di/media/images/3473061/org/1bf4d6b616bbccfef6f66e0034acd376.jpg/Ua8QqShySKlijPxMEgIQg1zmLJvMWX0lTw6L4U8Oi-E?v=w1920r16_9)"
    }
}

class Welcome extends Component {
    render() {
        return (
            <div style={styles.divStyle}>
                <p className="expand">Welcome</p>
                <p className="expand">I am Yu-Hsuan</p>
                <div className="arrow">
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Welcome;