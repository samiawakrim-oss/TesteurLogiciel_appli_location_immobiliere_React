import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Collapse from '../src/Components/Collapse/Collapse'

describe('Collapse', () => {
  it('est fermé au chargement', () => {
    render(
      <Collapse title="Fiabilité">
        <p>Contenu de test</p>
      </Collapse>
    )

    const button = screen.getByRole('button', {
      name: 'Fiabilité',
    })

    expect(button).toHaveAttribute(
      'aria-expanded',
      'false'
    )

    expect(
      screen.queryByText('Contenu de test')
    ).not.toBeInTheDocument()
  })

  it('s’ouvre lorsqu’on clique sur le bouton', async () => {
    const user = userEvent.setup()

    render(
      <Collapse title="Fiabilité">
        <p>Contenu de test</p>
      </Collapse>
    )

    const button = screen.getByRole('button', {
      name: 'Fiabilité',
    })

    await user.click(button)

    expect(button).toHaveAttribute(
      'aria-expanded',
      'true'
    )

    expect(
      screen.getByText('Contenu de test')
    ).toBeInTheDocument()
  })

  it('se referme lorsqu’on clique une deuxième fois', async () => {
    const user = userEvent.setup()

    render(
      <Collapse title="Fiabilité">
        <p>Contenu de test</p>
      </Collapse>
    )

    const button = screen.getByRole('button', {
      name: 'Fiabilité',
    })

    await user.click(button)
    await user.click(button)

    expect(button).toHaveAttribute(
      'aria-expanded',
      'false'
    )

    expect(
      screen.queryByText('Contenu de test')
    ).not.toBeInTheDocument()
  })

  it('affiche correctement une liste dans le contenu', async () => {
    const user = userEvent.setup()

    render(
      <Collapse title="Équipements">
        <ul>
          <li>WiFi</li>
          <li>Frigo</li>
        </ul>
      </Collapse>
    )

    const button = screen.getByRole('button', {
      name: 'Équipements',
    })

    await user.click(button)

    expect(screen.getByText('WiFi')).toBeInTheDocument()
    expect(screen.getByText('Frigo')).toBeInTheDocument()
  })
})