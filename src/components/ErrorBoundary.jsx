import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          background: "#1a0000",
          color: "#ff6b6b",
          padding: "40px",
          fontFamily: "monospace",
          minHeight: "100vh",
          whiteSpace: "pre-wrap",
        }}>
          <h1 style={{ color: "#ff6b6b" }}>App crashed:</h1>
          <p>{this.state.error.message}</p>
          <pre style={{ marginTop: "20px", fontSize: "12px", opacity: 0.8 }}>
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}