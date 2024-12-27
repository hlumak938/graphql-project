import { ApolloProvider } from '@apollo/client';
import { client } from './apolloConfig';
import './App.css'
import Users from './Users'
import AddUser from'./AddUser'

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>GraphQL Users</h1>
      <AddUser />
      <Users />
    </div>
  </ApolloProvider>
);

export default App;
