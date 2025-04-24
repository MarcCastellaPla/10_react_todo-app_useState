import { describe, test, expect } from 'vitest';
import { ItemCard } from './ItemCard';
import { render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

describe('Given ItemCard', () => {
  const mockTodo = {
    id: 1,
    title: 'Todo test',
    description: 'Todo description',
    status: 'pending',
  };

  afterEach(() => {
    cleanup();
  });
  test('When ItemCard is rendered Then an h4 should be printed', () => {
    // Act
    const { getByText } = render(<ItemCard item={mockTodo} />);

    const title = getByText('Todo test');

    // Assert

    expect(title.tagName).toBe('H4');
  });

  test('When ItemCard is rendered Then a p should be printed', () => {
    // Act
    const { getByText } = render(<ItemCard item={mockTodo} />);

    const paragraph = getByText('Todo description');

    // Assert
    expect(paragraph.tagName).toBe('P');
  });

  test('When ItemCard is rendered Then a span should be printed', () => {
    // Act
    const { getByText } = render(<ItemCard item={mockTodo} />);

    const span = getByText('PENDING');

    // Assert
    expect(span.tagName).toBe('SPAN');
  });
});
