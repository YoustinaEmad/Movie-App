// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';
import Register from './Register';
import WatchList from './WatchList';
import { Provider } from 'react-redux';
import store from './configureStore';
import { useState } from 'react';
import { LanguageContext } from './Language';

function App() {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <LanguageContext.Provider value={{ language, toggleLanguage }}>
            <Routes>
              <Route path="" element={<NavBar />} />
              <Route path="MovieList" element={<MovieList />} />
              <Route path='MovieDetails/:id' element={<MovieDetails />} />
              <Route path='NotFound' element={<NotFound />} />
              <Route path='Register' element={<Register />} />
              <Route path='WatchList' element={<WatchList />} />
            </Routes>
          </LanguageContext.Provider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
