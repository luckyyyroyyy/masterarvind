import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import './ThemeColorSwitch.css';

const THEMES = {
  DEFAULT: 'default',
  JAYARAM: 'ref-jayaram',
};

const ThemeColorSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('arvind_theme') || THEMES.DEFAULT;
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (currentTheme === THEMES.JAYARAM) {
      document.documentElement.setAttribute('data-theme', THEMES.JAYARAM);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('arvind_theme', currentTheme);
  }, [currentTheme]);

  const switchTheme = (themeKey, name) => {
    if (themeKey === currentTheme) return;
    setCurrentTheme(themeKey);
    setToastMessage(`Switched to ${name}`);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const isJayaram = currentTheme === THEMES.JAYARAM;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="theme-switch-toast">
          <Sparkles size={16} className="toast-sparkle" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Theme Switcher Widget */}
      <div 
        className={`theme-switcher-widget ${isExpanded ? 'expanded' : ''}`}
        aria-label="Color Scheme Switcher"
      >
        {/* Toggle Pill Bar */}
        <div className="theme-switcher-pill">
          <button 
            type="button"
            className="theme-switcher-trigger"
            onClick={() => setIsExpanded(!isExpanded)}
            title="Click to switch between Original and Reference Website colors"
            aria-expanded={isExpanded}
          >
            <div className="palette-icon-wrap">
              <Palette size={18} className="palette-svg" />
            </div>
            <div className="theme-current-label">
              <span className="theme-subtitle">Theme Switcher</span>
              <span className="theme-active-name">
                {isJayaram ? 'Jayaram Demo (Ref)' : 'Master Arvind (Original)'}
              </span>
            </div>
            <span className="theme-toggle-indicator">
              {isExpanded ? '▲' : '▼'}
            </span>
          </button>

          {/* Quick 1-Click Toggle Button */}
          <button
            type="button"
            className="theme-quick-flip-btn"
            onClick={() => switchTheme(
              isJayaram ? THEMES.DEFAULT : THEMES.JAYARAM,
              isJayaram ? 'Original Master Arvind Theme' : 'Reference Website Theme (Jayaram)'
            )}
            title="Switch palette immediately"
          >
            <span className="quick-flip-dot default-dot" />
            <span className="quick-flip-arrow">⇄</span>
            <span className="quick-flip-dot ref-dot" />
          </button>
        </div>

        {/* Expanded Panel with theme cards */}
        {isExpanded && (
          <div className="theme-switcher-dropdown">
            <div className="dropdown-header">
              <div className="dropdown-title-row">
                <Palette size={15} />
                <span>Live Color Comparison</span>
              </div>
              <p className="dropdown-desc">
                Switch instantly between Master Arvind's colors and the reference client website (psychicjayaramdemo.vercel.app).
              </p>
            </div>

            <div className="theme-options-grid">
              {/* Option 1: Original Master Arvind */}
              <button
                type="button"
                className={`theme-option-card ${!isJayaram ? 'active' : ''}`}
                onClick={() => switchTheme(THEMES.DEFAULT, 'Original Master Arvind Theme')}
              >
                <div className="option-card-top">
                  <div className="theme-swatch-row">
                    <span className="swatch arvind-rose" title="Rose Crimson #C2185B" />
                    <span className="swatch arvind-gold" title="Vedic Gold #B8860B" />
                    <span className="swatch arvind-amber" title="Amber Sun #D97706" />
                    <span className="swatch arvind-white" title="Sacred Light #FFFDF9" />
                  </div>
                  {!isJayaram && <Check size={16} className="active-check" />}
                </div>
                <div className="option-title">Master Arvind</div>
                <div className="option-subtitle">Original (Rose & Vedic Gold)</div>
              </button>

              {/* Option 2: Reference Psychic Jayaram */}
              <button
                type="button"
                className={`theme-option-card ${isJayaram ? 'active' : ''}`}
                onClick={() => switchTheme(THEMES.JAYARAM, 'Reference Website Theme (Jayaram)')}
              >
                <div className="option-card-top">
                  <div className="theme-swatch-row">
                    <span className="swatch jayaram-red" title="Crimson Red #C62828" />
                    <span className="swatch jayaram-coral" title="Sunset Coral #FF5722" />
                    <span className="swatch jayaram-gold" title="Bright Amber #FFB800" />
                    <span className="swatch jayaram-navy" title="Deep Navy #0A192F" />
                  </div>
                  {isJayaram && <Check size={16} className="active-check" />}
                </div>
                <div className="option-title">Reference Demo</div>
                <div className="option-subtitle">Psychic Jayaram (Red & Coral)</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThemeColorSwitch;
