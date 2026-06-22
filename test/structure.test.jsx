import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'

// Checks the portfolio includes the required landmarks from the brief. Each is
// its own test so you get partial credit. Layout, colors, and content are up to
// you; only these structural markers are required.
describe('Portfolio structure', () => {
  it('has a level-1 heading (your name / hero)', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThanOrEqual(1)
  })

  it('has a <nav>', () => {
    render(<App />)
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1)
  })

  it('has a <main>', () => {
    render(<App />)
    expect(screen.getAllByRole('main').length).toBeGreaterThanOrEqual(1)
  })

  it('has an About section heading', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { name: /about/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('has a Projects section heading', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { name: /projects/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('has a Contact section heading', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { name: /contact/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('has a contact method (mailto link, external link, or a form)', () => {
    const { container } = render(<App />)
    const contact = container.querySelector('a[href^="mailto:"], a[href^="http"], form')
    expect(contact, 'Add a mailto: link, an external link, or a contact form').not.toBeNull()
  })
})
