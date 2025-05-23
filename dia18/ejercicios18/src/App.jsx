// App.jsx
import './App.css';
import { ThemeProvider } from './assets/ThemeContext';
import ThemeToggle from './assets/ThemeToggle';

import { LanguageProvider } from './assets/LanguageContext';
import LanguageToggle from './assets/LanguageToggle';
import Greeting from './assets/Greeting';

import { AuthProvider } from './assets/AuthContext';
import AuthButton from './assets/AuthButton';
import AuthStatus from './assets/AuthStatus';

import { UserContext } from './assets/UserContext';
import UserName from './assets/user';

import { CounterProvider } from './assets/CounterContext';
import CounterControls from './assets/CounterContext';

import { CartProvider } from './assets/CartContext';
import ProductList from './assets/ProductList';
import Cart from './assets/Cart';

function App() {
  const user = { name: 'Antonio' };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <UserContext.Provider value={user}>
              <div className="main">
                <div className="top-controls">
                  <ThemeToggle />
                  <LanguageToggle />
                  <AuthButton />
                </div>
                <AuthStatus />
                <Greeting />
                <UserName />
                <CounterProvider>
                  <CounterControls />
                </CounterProvider>
                <ProductList />
                <Cart />
              </div>
            </UserContext.Provider>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
