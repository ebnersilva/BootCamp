import React from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';

const App = () => (
  <React.Fragment>
    <Sidebar />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
