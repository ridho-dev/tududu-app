import './style/style.css';
import './style/responsive.css';

import Navbar from './components/Navbar';
import Contents from './components/Contents';
import Modals from './components/Modals';

function App() {
  window.onresize = function () {
    // eslint-disable-next-line no-restricted-globals
    setTimeout(() => { location.reload(); }, 500)
  }
  return (
    <div>
      <Navbar />
      <Modals />
      <Contents />
    </div>
  );
}

export default App;
