import React from "react";

export default function Popup({ message, onClose }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <p style={styles.message}>{message}</p>
                <button style={styles.button} onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    popup: {
        background: "white",
        padding: "20px 30px",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        textAlign: "center",
        minWidth: "260px",
    },
    message: {
        fontSize: "18px",
        margin: "0 0 15px 0",
        fontWeight: "500",
    },
    button: {
        background: "#2563eb",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
    },
};
