import React from "react";

const styles = {
    custom: {
        padding: 0
    }
}

function Footer() {
    return (
        <footer style={styles.custom} className="page-footer deep-purple lighten-1">
            <div className="footer-copyright">
                <div className="container deep-purple-text text-lighten-4">
                    Copyright © 2020, All Rights Reserved
            </div>
            </div>
        </footer>
    )
}

export default Footer;
