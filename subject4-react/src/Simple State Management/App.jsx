import ThemeProvider from "./ThemeContext";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  return (
    <ThemeProvider>
      <Layout theme={theme} setTheme={setTheme} fontSize={fontSize} setFontSize={setFontSize} />
    </ThemeProvider>
  );
}

function Layout({ theme, setTheme, fontSize, setFontSize }) {
  const bgColor = theme === 'light' ? '#ffffff' : '#1a1a1a';
  const color = theme === 'light' ? '#000000' : '#ffffff';
  
  return (
    <div style={{ backgroundColor: bgColor, color, minHeight: '100vh', padding: '20px' }}>
      <Header theme={theme} setTheme={setTheme} fontSize={fontSize} setFontSize={setFontSize} />
      <Content theme={theme} fontSize={fontSize} />
    </div>
  );
}

function Header({ theme, setTheme, fontSize, setFontSize }) {
  return (
    <header style={{ marginBottom: '20px' }}>
      <Navigation theme={theme} fontSize={fontSize} />
      <Controls theme={theme} setTheme={setTheme} fontSize={fontSize} setFontSize={setFontSize} />
    </header>
  );
}

function Navigation({ theme, fontSize }) {
  const size = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';
  
  return (
    <nav style={{ fontSize: size, marginBottom: '10px' }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls({ theme, setTheme, fontSize, setFontSize }) {
  return (
    <div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <FontControl fontSize={fontSize} setFontSize={setFontSize} />
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function FontControl({ fontSize, setFontSize }) {
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content({ theme, fontSize }) {
  const size = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';
  
  return (
    <main style={{ fontSize: size }}>
      <Article theme={theme} />
      <Sidebar theme={theme} />
    </main>
  );
}

function Article({ theme }) {
  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. Notice how theme props are passed through every component!</p>
    </article>
  );
}

function Sidebar({ theme }) {
  return (
    <aside style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}

export default App;