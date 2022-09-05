import React from "react";
import { createRoot } from "react-dom/client";

interface AppProps {
  color: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App color="red" />);
}
