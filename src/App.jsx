import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const templeted = 'Apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>
          {`My first ${templeted} app`}{' '}
          <span role='img' aria-label='Rocket'>
            🚀
          </span>
        </h2>
      </div>
    </ApolloProvider>
  );
}
export default App;
