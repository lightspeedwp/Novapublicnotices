import React from 'react';
import { 
  MagnifyingGlass, 
  Funnel, 
  Calendar, 
  MapPin, 
  Tag, 
  Hash,
  CheckCircle,
  Paperclip,
  Printer,
  PaperPlaneRight,
  ShieldCheck,
  Archive,
  Globe,
  CaretDown,
  CaretUp,
  CaretLeft,
  CaretRight,
  Envelope,
  Phone,
  Download,
  Upload,
  Plus,
  Minus,
  PencilSimple,
  Trash,
  Check,
  WarningCircle,
  Info,
  Gear,
  SignOut,
  SignIn,
  Eye,
  EyeClosed,
  Star,
  Heart,
  ShareNetwork,
  Copy,
  ArrowSquareOut,
  File,
  FileText,
  Folder,
  House,
  Bell,
  DotsThreeVertical,
  DotsThree,
  List,
  X
} from '@phosphor-icons/react';
import './Styleguide.css';

export default function Styleguide() {
  return (
    <div className="styleguide">
      {/* Header */}
      <header className="styleguide__header">
        <h1 className="styleguide__title">
          Nova Public Notices Portal
        </h1>
        <p className="styleguide__subtitle">
          Design System Styleguide — Colors, Typography, Components, Icons & CSS Variables
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="styleguide__toc">
        <h2 className="styleguide__toc-title">Table of Contents</h2>
        <ul className="styleguide__toc-list">
          <li><a href="#colors" className="styleguide__toc-link">1. Colors</a></li>
          <li><a href="#typography" className="styleguide__toc-link">2. Typography</a></li>
          <li><a href="#spacing" className="styleguide__toc-link">3. Spacing</a></li>
          <li><a href="#buttons" className="styleguide__toc-link">4. Buttons</a></li>
          <li><a href="#forms" className="styleguide__toc-link">5. Form Elements</a></li>
          <li><a href="#icons" className="styleguide__toc-link">6. Icons</a></li>
          <li><a href="#elevation" className="styleguide__toc-link">7. Elevation</a></li>
          <li><a href="#animations" className="styleguide__toc-link">8. Animations</a></li>
          <li><a href="#css-variables" className="styleguide__toc-link">9. CSS Variables</a></li>
        </ul>
      </nav>

      {/* 1. Colors */}
      <section id="colors" className="styleguide__section">
        <h2 className="styleguide__section-title">1. Colors</h2>
        <p className="styleguide__description">
          The Nova Public Notices color palette emphasizes trust, authority, and clarity for legal content.
        </p>

        {/* Nova Brand Colors */}
        <div className="styleguide__subsection">
          <h3 className="styleguide__subsection-title">Nova Brand Colors</h3>
          <div className="styleguide__color-grid">
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--nova-primary)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Primary</div>
                <div className="styleguide__color-value">--nova-primary</div>
                <div className="styleguide__color-value">#09082f</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--nova-primary-hover)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Primary Hover</div>
                <div className="styleguide__color-value">--nova-primary-hover</div>
                <div className="styleguide__color-value">#1a1849</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--nova-accent)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Accent</div>
                <div className="styleguide__color-value">--nova-accent</div>
                <div className="styleguide__color-value">#d70025</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--nova-accent-hover)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Accent Hover</div>
                <div className="styleguide__color-value">--nova-accent-hover</div>
                <div className="styleguide__color-value">#b5001f</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--nova-blue)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Blue</div>
                <div className="styleguide__color-value">--nova-blue</div>
                <div className="styleguide__color-value">#549CBE</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Colors */}
        <div className="styleguide__subsection">
          <h3 className="styleguide__subsection-title">System Colors</h3>
          <div className="styleguide__color-grid">
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--background)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Background</div>
                <div className="styleguide__color-value">--background</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--foreground)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Foreground</div>
                <div className="styleguide__color-value">--foreground</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--muted)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Muted</div>
                <div className="styleguide__color-value">--muted</div>
              </div>
            </div>
            <div className="styleguide__color-swatch">
              <div className="styleguide__color-sample" style={{ backgroundColor: 'var(--destructive)' }} />
              <div className="styleguide__color-info">
                <div className="styleguide__color-name">Destructive</div>
                <div className="styleguide__color-value">--destructive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Typography */}
      <section id="typography" className="styleguide__section">
        <h2 className="styleguide__section-title">2. Typography</h2>
        <p className="styleguide__description">
          Nova Public Notices uses Lexend for all text. The type scale balances readability for legal content with clear hierarchies.
        </p>

        {/* Font Families */}
        <div className="styleguide__subsection">
          <h3 className="styleguide__subsection-title">Font Family</h3>
          <div className="styleguide__typography-samples">
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">Lexend (Primary)</div>
              <div className="styleguide__type-example">
                <p style={{ fontFamily: 'var(--font-family-lexend)' }}>
                  The quick brown fox jumps over the lazy dog. 0123456789
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Type Scale */}
        <div className="styleguide__subsection">
          <h3 className="styleguide__subsection-title">Type Scale</h3>
          <div className="styleguide__typography-samples">
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-xs (12px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-xs)' }}>
                Small labels, metadata, captions
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-sm (14px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-sm)' }}>
                Secondary text, form labels
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-base (16px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-base)' }}>
                Body text, default paragraph text
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-lg (24px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-lg)' }}>
                Lead paragraphs, subheadings
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-xl (32px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-extrabold)' }}>
                Section titles (H3)
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-2xl (40px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-extrabold)' }}>
                Page titles (H2)
              </div>
            </div>
            <div className="styleguide__type-sample">
              <div className="styleguide__type-label">--text-3xl (48px)</div>
              <div className="styleguide__type-example" style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-weight-extrabold)' }}>
                Main headings (H1)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Spacing */}
      <section id="spacing" className="styleguide__section">
        <h2 className="styleguide__section-title">3. Spacing</h2>
        <p className="styleguide__description">
          Gap-first spacing scale from 4px to 80px. Use gap and padding instead of margin for layouts.
        </p>

        <div className="styleguide__spacing-grid">
          {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map(space => (
            <div key={space} className="styleguide__spacing-item">
              <div 
                className="styleguide__spacing-box" 
                style={{ 
                  width: `var(--space-${space})`, 
                  height: `var(--space-${space})` 
                }} 
              />
              <div className="styleguide__spacing-label">--space-{space}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Buttons */}
      <section id="buttons" className="styleguide__section">
        <h2 className="styleguide__section-title">4. Buttons</h2>
        <p className="styleguide__description">
          BEM-structured button system with three sizes and four variants. Use <code>.wpn-button</code> classes.
        </p>

        <div className="styleguide__button-grid">
          {/* Primary Buttons */}
          <div className="styleguide__button-group">
            <div className="styleguide__button-group-label">Primary</div>
            <button className="wpn-button wpn-button--primary wpn-button--sm">Small</button>
            <button className="wpn-button wpn-button--primary wpn-button--md">Medium</button>
            <button className="wpn-button wpn-button--primary wpn-button--lg">Large</button>
          </div>

          {/* Accent Buttons */}
          <div className="styleguide__button-group">
            <div className="styleguide__button-group-label">Accent</div>
            <button className="wpn-button wpn-button--accent wpn-button--sm">Small</button>
            <button className="wpn-button wpn-button--accent wpn-button--md">Medium</button>
            <button className="wpn-button wpn-button--accent wpn-button--lg">Large</button>
          </div>

          {/* Outline Buttons */}
          <div className="styleguide__button-group">
            <div className="styleguide__button-group-label">Outline</div>
            <button className="wpn-button wpn-button--outline wpn-button--sm">Small</button>
            <button className="wpn-button wpn-button--outline wpn-button--md">Medium</button>
            <button className="wpn-button wpn-button--outline wpn-button--lg">Large</button>
          </div>

          {/* Ghost Buttons */}
          <div className="styleguide__button-group">
            <div className="styleguide__button-group-label">Ghost</div>
            <button className="wpn-button wpn-button--ghost wpn-button--sm">Small</button>
            <button className="wpn-button wpn-button--ghost wpn-button--md">Medium</button>
            <button className="wpn-button wpn-button--ghost wpn-button--lg">Large</button>
          </div>
        </div>
      </section>

      {/* 5. Form Elements */}
      <section id="forms" className="styleguide__section">
        <h2 className="styleguide__section-title">5. Form Elements</h2>
        <p className="styleguide__description">
          Form fields use consistent height (48px) and styling via CSS variables.
        </p>

        <div className="styleguide__form-example">
          <div className="styleguide__form-field">
            <label htmlFor="text-input" className="styleguide__form-label">Text Input</label>
            <input 
              type="text" 
              id="text-input"
              className="styleguide__form-input"
              placeholder="Enter text..."
            />
          </div>

          <div className="styleguide__form-field">
            <label htmlFor="email-input" className="styleguide__form-label">Email Input</label>
            <input 
              type="email" 
              id="email-input"
              className="styleguide__form-input"
              placeholder="email@example.com"
            />
          </div>

          <div className="styleguide__form-field">
            <label htmlFor="select-input" className="styleguide__form-label">Select Dropdown</label>
            <select id="select-input" className="styleguide__form-input">
              <option>Select an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="styleguide__form-field">
            <label htmlFor="textarea-input" className="styleguide__form-label">Textarea</label>
            <textarea 
              id="textarea-input"
              className="styleguide__form-input"
              rows={4}
              placeholder="Enter longer text..."
            />
          </div>
        </div>
      </section>

      {/* 6. Icons */}
      <section id="icons" className="styleguide__section">
        <h2 className="styleguide__section-title">6. Icons</h2>
        <p className="styleguide__description">
          Phosphor Icons with standardized sizes. Icon sizes: 12px (xs), 16px (sm), 20px (md), 24px (lg), 32px (xl).
        </p>

        <div className="styleguide__icon-grid">
          <div className="styleguide__icon-item">
            <MagnifyingGlass size={24} />
            <div className="styleguide__icon-label">Search</div>
          </div>
          <div className="styleguide__icon-item">
            <Funnel size={24} />
            <div className="styleguide__icon-label">Filter</div>
          </div>
          <div className="styleguide__icon-item">
            <Calendar size={24} />
            <div className="styleguide__icon-label">Calendar</div>
          </div>
          <div className="styleguide__icon-item">
            <MapPin size={24} />
            <div className="styleguide__icon-label">Location</div>
          </div>
          <div className="styleguide__icon-item">
            <Tag size={24} />
            <div className="styleguide__icon-label">Tag</div>
          </div>
          <div className="styleguide__icon-item">
            <Hash size={24} />
            <div className="styleguide__icon-label">Reference</div>
          </div>
          <div className="styleguide__icon-item">
            <CheckCircle size={24} />
            <div className="styleguide__icon-label">Success</div>
          </div>
          <div className="styleguide__icon-item">
            <WarningCircle size={24} />
            <div className="styleguide__icon-label">Warning</div>
          </div>
          <div className="styleguide__icon-item">
            <Info size={24} />
            <div className="styleguide__icon-label">Info</div>
          </div>
          <div className="styleguide__icon-item">
            <Download size={24} />
            <div className="styleguide__icon-label">Download</div>
          </div>
          <div className="styleguide__icon-item">
            <Upload size={24} />
            <div className="styleguide__icon-label">Upload</div>
          </div>
          <div className="styleguide__icon-item">
            <Printer size={24} />
            <div className="styleguide__icon-label">Print</div>
          </div>
        </div>
      </section>

      {/* 7. Elevation */}
      <section id="elevation" className="styleguide__section">
        <h2 className="styleguide__section-title">7. Elevation</h2>
        <p className="styleguide__description">
          Shadow system for creating depth and hierarchy.
        </p>

        <div className="styleguide__elevation-grid">
          <div className="styleguide__elevation-card styleguide__elevation-card--sm">
            --shadow-sm
          </div>
          <div className="styleguide__elevation-card styleguide__elevation-card--md">
            --shadow-md
          </div>
          <div className="styleguide__elevation-card styleguide__elevation-card--lg">
            --shadow-lg
          </div>
          <div className="styleguide__elevation-card styleguide__elevation-card--xl">
            --shadow-xl
          </div>
        </div>
      </section>

      {/* 8. Animations */}
      <section id="animations" className="styleguide__section">
        <h2 className="styleguide__section-title">8. Animations</h2>
        <p className="styleguide__description">
          Hover these boxes to see animation effects. Duration: fast (150ms), normal (250ms), slow (350ms).
        </p>

        <div className="styleguide__animation-grid">
          <div className="styleguide__animation-demo wp-hover-lift">
            Hover Lift
          </div>
          <div className="styleguide__animation-demo wp-hover-scale">
            Hover Scale
          </div>
          <div className="styleguide__animation-demo wp-hover-fade">
            Hover Fade
          </div>
        </div>
      </section>

      {/* 9. CSS Variables */}
      <section id="css-variables" className="styleguide__section">
        <h2 className="styleguide__section-title">9. CSS Variables Reference</h2>
        <p className="styleguide__description">
          All design tokens are available as CSS custom properties. Update <code>theme.css</code> to modify the entire design system.
        </p>

        <table className="styleguide__var-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brand</td>
              <td><code>--nova-primary</code></td>
              <td>#09082f</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td><code>--nova-accent</code></td>
              <td>#d70025</td>
            </tr>
            <tr>
              <td>Spacing</td>
              <td><code>--space-4</code></td>
              <td>1rem (16px)</td>
            </tr>
            <tr>
              <td>Typography</td>
              <td><code>--text-base</code></td>
              <td>16px</td>
            </tr>
            <tr>
              <td>Button</td>
              <td><code>--button-height-md</code></td>
              <td>48px</td>
            </tr>
            <tr>
              <td>Form</td>
              <td><code>--form-field-height</code></td>
              <td>48px</td>
            </tr>
            <tr>
              <td>Animation</td>
              <td><code>--duration-fast</code></td>
              <td>150ms</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
