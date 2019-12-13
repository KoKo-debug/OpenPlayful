import React from 'react';

import TopBar from './topbar/topbar';
import Modal from './modal/modal_container';
import SearchBar from './search_bar/search_bar';

const App = () => (
    <header className="page">
      <Modal />
      <TopBar />
      <SearchBar />
    </header>
);

export default App;