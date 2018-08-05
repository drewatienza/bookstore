// const App = () => {
//   return (
//     <h2>Hello components</h2>
//   );
// };

class App extends React.Component {
  state = { answer: 42 };
  render() {
    return (
      <h2>Hello components {this.state.answer}</h2>
    );
  }
}

export default App;
