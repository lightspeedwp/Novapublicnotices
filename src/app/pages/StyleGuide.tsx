/**
 * Nova Public Notices Portal - Style Guide (Dev Tool)
 * 
 * Comprehensive design system documentation
 * Shows all tokens, components, icons, and patterns
 * Data-driven from /src/app/data/dev-tools/style-guide-data.ts
 */

import { useState } from 'react';
import Layout from '../components/Layout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  borderTokens,
  radiusTokens,
  shadowTokens,
  iconSizes,
  bemComponents,
  iconCategories,
  breakpoints,
  layoutTokens,
  animationTokens,
  systemStats,
} from '../data/dev-tools/style-guide-data';
import {
  Home, Search, Menu, ChevronDown, ChevronRight, ArrowRight, X,
  Plus, Edit, Trash2, Download, Upload, Save, Send,
  User, Settings, HelpCircle, Info, AlertCircle, CheckCircle, XCircle,
  FileText, File, Image, Calendar, Clock, Mail, Phone,
  Briefcase, Building, MapPin, Scale, Gavel, Wine, Store,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Eye, EyeOff, Filter, MoreVertical, Heart, Bell, Lock,
  Copy, Check
} from 'lucide-react';
import '../../styles/components.css';

// Icon map for rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Search, Menu, ChevronDown, ChevronRight, ArrowRight, X,
  Plus, Edit, Trash2, Download, Upload, Save, Send,
  User, Settings, HelpCircle, Info, AlertCircle, CheckCircle, XCircle,
  FileText, File, Image, Calendar, Clock, Mail, Phone,
  Briefcase, Building, MapPin, Scale, Gavel, Wine, Store,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Eye, EyeOff, Filter, MoreVertical, Heart, Bell, Lock
};

export default function StyleGuide() {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'colors', name: 'Colors' },
    { id: 'typography', name: 'Typography' },
    { id: 'spacing', name: 'Spacing' },
    { id: 'borders', name: 'Borders & Radius' },
    { id: 'shadows', name: 'Shadows' },
    { id: 'icons', name: 'Icons' },
    { id: 'components', name: 'Components' },
    { id: 'buttons', name: 'Buttons' },
    { id: 'forms', name: 'Forms' },
    { id: 'layout', name: 'Layout' },
    { id: 'responsive', name: 'Responsive' },
    { id: 'animation', name: 'Animation' },
  ];

  return (
    <Layout lang="en" showAds={false}>
      {/* Header */}
      <div className="wpn-page-header">
        <div className="wpn-page-header__container">
          <div className="flex items-center gap-3 mb-4">
            <div className="wpn-icon-badge wpn-bg--accent">
              <Settings className="wpn-icon-badge__icon text-white" />
            </div>
            <span className="text-sm font-medium wpn-text--accent uppercase tracking-wide">
              Dev Tools
            </span>
          </div>
          <h1 className="wpn-heading-h1 wpn-heading--primary">
            Nova Style Guide
          </h1>
          <p className="wpn-page-header__subtitle">
            Complete design system documentation • {systemStats.totalColors} colors • {systemStats.totalBemComponents} BEM components • {systemStats.fontFamilies} font family
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-4">
              <Card className="p-4">
                <h3 className="wpn-heading-h6 wpn-heading--primary mb-4">
                  Sections
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeSection === section.id
                          ? 'wpn-bg--accent text-white font-medium'
                          : 'hover:bg-[var(--muted)] wpn-text--primary'
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                </nav>

                {/* System Stats */}
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <h4 className="text-xs font-semibold wpn-text--muted uppercase tracking-wider mb-3">
                    System Stats
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="wpn-text--muted">Colors</span>
                      <span className="font-medium">{systemStats.totalColors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="wpn-text--muted">Components</span>
                      <span className="font-medium">{systemStats.totalBemComponents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="wpn-text--muted">CSS Files</span>
                      <span className="font-medium">{systemStats.cssFiles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="wpn-text--muted">Breakpoints</span>
                      <span className="font-medium">{systemStats.totalBreakpoints}</span>
                    </div>
                  </div>
                  <p className="text-xs wpn-text--muted mt-4">
                    Last audited: {systemStats.lastAudited}
                  </p>
                </div>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-4">
                    Design System Overview
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    The Nova Public Notices design system is built on CSS custom properties (variables), BEM methodology, and a mobile-first responsive approach. All styling adheres to the design tokens defined in <code className="px-2 py-1 bg-[var(--muted)] rounded text-sm font-mono">/src/styles/theme-variables.css</code>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg bg-[var(--muted)]">
                      <div className="wpn-icon-badge wpn-icon-badge--sm wpn-bg--primary mb-3">
                        <FileText className="wpn-icon-badge__icon text-white" />
                      </div>
                      <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                        BEM Architecture
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        Block Element Modifier methodology for scalable, maintainable CSS
                      </p>
                    </div>

                    <div className="p-6 rounded-lg bg-[var(--muted)]">
                      <div className="wpn-icon-badge wpn-icon-badge--sm wpn-bg--accent mb-3">
                        <Settings className="wpn-icon-badge__icon text-white" />
                      </div>
                      <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                        CSS Variables
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        All design tokens as CSS custom properties for easy theming
                      </p>
                    </div>

                    <div className="p-6 rounded-lg bg-[var(--muted)]">
                      <div className="wpn-icon-badge wpn-icon-badge--sm wpn-icon-badge--primary mb-3">
                        <Eye className="wpn-icon-badge__icon text-white" style={{ color: 'var(--primary-foreground)' }} />
                      </div>
                      <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                        Responsive First
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        Mobile-first approach with breakpoints from 320px to 1440px
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Key Principles */}
                <Card className="p-8">
                  <h2 className="wpn-heading-h4 wpn-heading--primary mb-6">
                    Key Principles
                  </h2>
                  <div className="grid gap-4">
                    <div className="flex gap-4">
                      <CheckCircle className="size-6 wpn-text--accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">No Inline Styles</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          All visual styling through CSS classes and variables - no hardcoded colors, spacing, or typography
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="size-6 wpn-text--accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">Gap-First Spacing</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          Use gap and padding for layout - avoid margin as primary spacing method
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="size-6 wpn-text--accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">Single Font Family</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          Lexend for all text - headings, body, and metadata for consistency
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="size-6 wpn-text--accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">Sentence Case</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          All headings, labels, and UI text use sentence case (only first letter capitalized)
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Colors Section */}
            {activeSection === 'colors' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Color System
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Complete color palette with CSS variable references. Click any token to copy.
                  </p>

                  {/* Brand Colors */}
                  <div className="mb-8">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Brand Colors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colorTokens.filter(t => t.category === 'brand').map((token) => (
                        <button
                          key={token.cssVar}
                          onClick={() => copyToClipboard(`var(${token.cssVar})`)}
                          className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--nova-primary)] transition-colors text-left group"
                        >
                          <div
                            className="size-12 rounded-lg border border-[var(--border)] flex-shrink-0"
                            style={{ backgroundColor: `var(${token.cssVar})` }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium wpn-text--primary text-sm truncate">
                              {token.name}
                            </div>
                            <code className="text-xs text-[var(--muted-foreground)] font-mono">
                              {token.cssVar}
                            </code>
                            <div className="text-xs text-[var(--muted-foreground)] mt-1">
                              {token.value}
                            </div>
                          </div>
                          {copiedToken === `var(${token.cssVar})` ? (
                            <Check className="size-4 wpn-text--accent" />
                          ) : (
                            <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Semantic Colors */}
                  <div className="mb-8">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Semantic Colors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colorTokens.filter(t => t.category === 'semantic').map((token) => (
                        <button
                          key={token.cssVar}
                          onClick={() => copyToClipboard(`var(${token.cssVar})`)}
                          className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--nova-primary)] transition-colors text-left group"
                        >
                          <div
                            className="size-12 rounded-lg border border-[var(--border)] flex-shrink-0"
                            style={{ backgroundColor: `var(${token.cssVar})` }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium wpn-text--primary text-sm truncate">
                              {token.name}
                            </div>
                            <code className="text-xs text-[var(--muted-foreground)] font-mono">
                              {token.cssVar}
                            </code>
                          </div>
                          {copiedToken === `var(${token.cssVar})` ? (
                            <Check className="size-4 wpn-text--accent" />
                          ) : (
                            <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Colors */}
                  <div className="mb-8">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Status Colors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {colorTokens.filter(t => t.category === 'status').map((token) => (
                        <button
                          key={token.cssVar}
                          onClick={() => copyToClipboard(`var(${token.cssVar})`)}
                          className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--nova-primary)] transition-colors text-left group"
                        >
                          <div
                            className="size-12 rounded-lg border border-[var(--border)] flex-shrink-0"
                            style={{ backgroundColor: `var(${token.cssVar})` }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium wpn-text--primary text-sm truncate">
                              {token.name}
                            </div>
                            <code className="text-xs text-[var(--muted-foreground)] font-mono">
                              {token.cssVar}
                            </code>
                          </div>
                          {copiedToken === `var(${token.cssVar})` ? (
                            <Check className="size-4 wpn-text--accent" />
                          ) : (
                            <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Typography Section */}
            {activeSection === 'typography' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Typography System
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Single font family (Lexend) with comprehensive scale and presets.
                  </p>

                  {/* Heading Examples */}
                  <div className="mb-12">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-6">
                      Heading Scales
                    </h3>
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
                          Heading 1 - Page Title
                        </h1>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h1 • 60px • semibold (600)
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h2 className="wpn-heading-h2 wpn-heading--primary mb-2">
                          Heading 2 - Section Title
                        </h2>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h2 • 48px • semibold (600)
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h3 className="wpn-heading-h3 wpn-heading--primary mb-2">
                          Heading 3 - Subsection Title
                        </h3>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h3 • 40px • semibold (600)
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h4 className="wpn-heading-h4 wpn-heading--primary mb-2">
                          Heading 4 - Card Title
                        </h4>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h4 • 32px • semibold (600)
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h5 className="wpn-heading-h5 wpn-heading--primary mb-2">
                          Heading 5 - Small Heading
                        </h5>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h5 • 24px • medium (500)
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <h6 className="wpn-heading-h6 wpn-heading--primary mb-2">
                          Heading 6 - Tiny Heading
                        </h6>
                        <code className="text-sm font-mono text-[var(--muted-foreground)]">
                          .wpn-heading-h6 • 16px • medium (500)
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* Font Size Tokens */}
                  <div className="mb-8">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Font Size Tokens
                    </h3>
                    <div className="grid gap-3">
                      {typographyTokens.filter(t => t.category === 'fontSize').map((token) => (
                        <div
                          key={token.cssVar}
                          className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)]"
                        >
                          <div className="flex items-center gap-4">
                            <code className="text-sm font-mono text-[var(--muted-foreground)] min-w-[120px]">
                              {token.cssVar}
                            </code>
                            <span className="font-medium wpn-text--primary">
                              {token.name}
                            </span>
                          </div>
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {token.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Font Weights */}
                  <div className="mb-8">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Font Weights
                    </h3>
                    <div className="grid gap-3">
                      {typographyTokens.filter(t => t.category === 'fontWeight').map((token) => (
                        <div
                          key={token.cssVar}
                          className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)]"
                        >
                          <div className="flex items-center gap-4">
                            <code className="text-sm font-mono text-[var(--muted-foreground)] min-w-[200px]">
                              {token.cssVar}
                            </code>
                            <span className="font-medium wpn-text--primary">
                              {token.name}
                            </span>
                          </div>
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {token.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Spacing Section */}
            {activeSection === 'spacing' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Spacing Scale
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Gap-first spacing system. Use for gap, padding - avoid margin.
                  </p>

                  <div className="space-y-4">
                    {spacingTokens.map((token) => (
                      <div
                        key={token.cssVar}
                        className="flex items-center gap-6 p-4 rounded-lg border border-[var(--border)]"
                      >
                        <div className="flex-shrink-0">
                          <div
                            className="h-12 rounded bg-[var(--nova-accent)]"
                            style={{ width: `var(${token.cssVar})`, minWidth: '4px' }}
                          />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <div>
                            <code className="text-sm font-mono wpn-text--primary">
                              {token.cssVar}
                            </code>
                            <div className="text-xs text-[var(--muted-foreground)] mt-1">
                              {token.name}
                            </div>
                          </div>
                          <span className="text-sm font-medium text-[var(--muted-foreground)]">
                            {token.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Icons Section */}
            {activeSection === 'icons' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Icon Library
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Lucide React icons used throughout the application. All icons are imported from 'lucide-react'.
                  </p>

                  {/* Icon Sizes */}
                  <div className="mb-12">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Icon Sizes
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {iconSizes.map((size) => (
                        <div key={size.cssVar} className="text-center">
                          <div className="flex items-center justify-center mb-3">
                            <div
                              className="wpn-icon-badge wpn-bg--accent"
                              style={{
                                width: `calc(${size.value} + 16px)`,
                                height: `calc(${size.value} + 16px)`
                              }}
                            >
                              <Settings
                                className="text-white"
                                style={{ width: size.value, height: size.value }}
                              />
                            </div>
                          </div>
                          <code className="text-xs font-mono text-[var(--muted-foreground)] block">
                            {size.cssVar}
                          </code>
                          <span className="text-xs text-[var(--muted-foreground)] block mt-1">
                            {size.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon Categories */}
                  {Object.entries(iconCategories).map(([category, icons]) => (
                    <div key={category} className="mb-8">
                      <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                        {category}
                      </h3>
                      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {icons.map((iconName) => {
                          const Icon = iconMap[iconName];
                          return Icon ? (
                            <button
                              key={iconName}
                              onClick={() => copyToClipboard(iconName)}
                              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--nova-primary)] hover:bg-[var(--muted)] transition-colors group"
                            >
                              <Icon className="size-6 wpn-text--primary" />
                              <span className="text-xs text-[var(--muted-foreground)] text-center">
                                {iconName}
                              </span>
                              {copiedToken === iconName && (
                                <Check className="size-3 wpn-text--accent" />
                              )}
                            </button>
                          ) : null;
                        })}
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            )}

            {/* Buttons Section */}
            {activeSection === 'buttons' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Button Components
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    All button variants and sizes using BEM classes.
                  </p>

                  {/* Button Variants */}
                  <div className="mb-12">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-6">
                      Button Variants
                    </h3>
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Primary Button
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button className="wpn-button wpn-button--primary">
                            <Plus className="size-4" />
                            Primary Action
                          </Button>
                          <Button className="wpn-button wpn-button--primary" disabled>
                            <Plus className="size-4" />
                            Disabled
                          </Button>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button .wpn-button--primary
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Accent Button
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button className="wpn-button wpn-button--accent">
                            <Send className="size-4" />
                            Accent Action
                          </Button>
                          <Button className="wpn-button wpn-button--accent" disabled>
                            Disabled
                          </Button>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button .wpn-button--accent
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Outline Button
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button variant="outline" className="wpn-button wpn-button--outline">
                            <Download className="size-4" />
                            Download
                          </Button>
                          <Button variant="outline" className="wpn-button wpn-button--outline" disabled>
                            Disabled
                          </Button>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button .wpn-button--outline
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Ghost Button
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button variant="ghost" className="wpn-button wpn-button--ghost">
                            <Edit className="size-4" />
                            Edit
                          </Button>
                          <Button variant="ghost" className="wpn-button wpn-button--ghost" disabled>
                            Disabled
                          </Button>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button .wpn-button--ghost
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Destructive Button
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button variant="destructive" className="wpn-button wpn-button--destructive">
                            <Trash2 className="size-4" />
                            Delete
                          </Button>
                          <Button variant="destructive" className="wpn-button wpn-button--destructive" disabled>
                            Disabled
                          </Button>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button .wpn-button--destructive
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* Button Sizes */}
                  <div>
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-6">
                      Button Sizes
                    </h3>
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Small (44px)
                        </p>
                        <Button size="sm" className="wpn-button wpn-button--primary wpn-button--sm">
                          <Plus className="size-4" />
                          Small Button
                        </Button>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button--sm • height: 44px
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Medium / Default (48px)
                        </p>
                        <Button className="wpn-button wpn-button--primary">
                          <Plus className="size-4" />
                          Medium Button
                        </Button>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button • height: 48px
                        </code>
                      </div>

                      <div className="p-6 rounded-lg bg-[var(--muted)]">
                        <p className="text-sm font-medium wpn-text--primary mb-4">
                          Large (56px)
                        </p>
                        <Button size="lg" className="wpn-button wpn-button--primary wpn-button--lg">
                          <Plus className="size-4" />
                          Large Button
                        </Button>
                        <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-4">
                          .wpn-button--lg • height: 56px
                        </code>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Forms Section */}
            {activeSection === 'forms' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Form Components
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Form inputs, textareas, selects, and other form controls.
                  </p>

                  <div className="space-y-8 max-w-xl">
                    {/* Text Input */}
                    <div>
                      <label className="block text-sm font-medium wpn-text--primary mb-2">
                        Text Input
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter text here..."
                      />
                      <code className="text-xs font-mono text-[var(--muted-foreground)] block mt-2">
                        48px height • var(--form-field-height)
                      </code>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium wpn-text--primary mb-2">
                        Email Input
                      </label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                      />
                    </div>

                    {/* Textarea */}
                    <div>
                      <label className="block text-sm font-medium wpn-text--primary mb-2">
                        Textarea
                      </label>
                      <textarea
                        className="w-full min-h-[120px] px-4 py-3 rounded-md border border-[var(--input-border)] bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                        placeholder="Enter longer text here..."
                      />
                    </div>

                    {/* Select */}
                    <div>
                      <label className="block text-sm font-medium wpn-text--primary mb-2">
                        Select Dropdown
                      </label>
                      <select className="w-full h-12 px-4 rounded-md border border-[var(--input-border)] bg-[var(--input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
                        <option>Select an option...</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="checkbox-example"
                        className="size-5 rounded border-[var(--input-border)]"
                      />
                      <label htmlFor="checkbox-example" className="text-sm wpn-text--primary">
                        Checkbox Label
                      </label>
                    </div>

                    {/* Radio */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          id="radio-1"
                          name="radio-example"
                          className="size-5"
                        />
                        <label htmlFor="radio-1" className="text-sm wpn-text--primary">
                          Radio Option 1
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          id="radio-2"
                          name="radio-example"
                          className="size-5"
                        />
                        <label htmlFor="radio-2" className="text-sm wpn-text--primary">
                          Radio Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Components Section */}
            {activeSection === 'components' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    BEM Components
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Complete list of {bemComponents.length} BEM component classes.
                  </p>

                  <div className="space-y-2">
                    {bemComponents.map((component) => (
                      <button
                        key={component.name}
                        onClick={() => copyToClipboard(`.${component.name}`)}
                        className="w-full flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--nova-primary)] hover:bg-[var(--muted)] transition-colors text-left group"
                      >
                        <div className="flex-1">
                          <code className="text-sm font-mono wpn-text--primary">
                            .{component.name}
                          </code>
                          <p className="text-sm text-[var(--muted-foreground)] mt-1">
                            {component.description}
                          </p>
                          {component.variants && component.variants.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {component.variants.map((variant) => (
                                <span
                                  key={variant}
                                  className="text-xs px-2 py-1 rounded bg-[var(--muted)] text-[var(--muted-foreground)]"
                                >
                                  {variant}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs wpn-text--muted uppercase tracking-wider">
                            {component.category}
                          </span>
                          {copiedToken === `.${component.name}` ? (
                            <Check className="size-4 wpn-text--accent" />
                          ) : (
                            <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Responsive Section */}
            {activeSection === 'responsive' && (
              <div className="space-y-8">
                <Card className="p-8">
                  <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                    Responsive Breakpoints
                  </h2>
                  <p className="text-[var(--muted-foreground)] mb-8">
                    Mobile-first responsive design from 320px to 1440px max-width.
                  </p>

                  <div className="space-y-4">
                    {breakpoints.map((bp) => (
                      <div
                        key={bp.name}
                        className="p-6 rounded-lg border border-[var(--border)]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="wpn-heading-h6 wpn-heading--primary">
                            {bp.name}
                          </h4>
                          <span className="text-lg font-semibold wpn-text--accent">
                            {bp.value}
                          </span>
                        </div>
                        <code className="text-xs font-mono text-[var(--muted-foreground)]">
                          {bp.cssQuery}
                        </code>
                      </div>
                    ))}
                  </div>

                  {/* Max Width */}
                  <div className="mt-8 p-6 rounded-lg bg-[var(--muted)]">
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-4">
                      Container Max Width
                    </h3>
                    <div className="flex items-center justify-between">
                      <code className="font-mono wpn-text--primary">
                        --container-max-width
                      </code>
                      <span className="text-2xl font-semibold wpn-text--accent">
                        1440px
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}