import Footer from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('Render sans crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    )
  })
  it('Le theme change', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
