import './App.css';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className={`app ${theme}`}>
      <Header setPage={setPage} theme={theme} toggleTheme={toggleTheme}/>
      <Main page={page} setPage={setPage}/>
      <Footer page={page} setPage={setPage}/>
    </div>
  );
}
export default App;
