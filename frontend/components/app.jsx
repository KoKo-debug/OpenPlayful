import React from 'react';

import TopBar from './topbar/topbar';
import Modal from './modal/modal_container';

const App = () => (
    <header className="page">
      <Modal />
      <TopBar />
    </header>
);

export default App;