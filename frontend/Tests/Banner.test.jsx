import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Banner from '../src/Components/Banner/Banner'

describe('Banner', () => {
  it('affiche le titre sur la page accueil', () => {
    render(<Banner variant="home" />)

    expect(
      screen.getByRole('heading', {
        name: 'Chez vous, partout et ailleurs',
      })
    ).toBeInTheDocument()
  })

  it('utilise la variante home par défaut', () => {
    render(<Banner />)

    expect(
      screen.getByRole('heading', {
        name: 'Chez vous, partout et ailleurs',
      })
    ).toBeInTheDocument()
  })

  it('n’affiche pas de titre avec la variante about', () => {
    render(<Banner variant="about" />)

    expect(
      screen.queryByRole('heading')
    ).not.toBeInTheDocument()
  })
})