import { describe, test, expect } from 'vitest';
import { ItemsList } from './ItemsList';
import { render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

describe('Given ItemsList', () => {
  const mockTodoList = [
    {
      id: 1,
      title: 'Todo test',
      description: 'Todo description',
      status: 'pending',
    },
  ];

  afterEach(() => {
    cleanup();
  });
  test('When ItemsList is rendered Then an h4 should be printed', () => {
    // Act
    const { getByText } = render(<ItemsList itemsList={mockTodoList} />);

    const title = getByText('Todo test');

    // Assert

    expect(title.tagName).toBe('H4');
  });

  test('When ItemsList is rendered Then a p should be printed', () => {
    // Act
    const { getByText } = render(<ItemsList itemsList={mockTodoList} />);

    const paragraph = getByText('Todo description');

    // Assert
    expect(paragraph.tagName).toBe('P');
  });

  test('When ItemsList is rendered Then a span should be printed', () => {
    // Act
    const { getByText } = render(<ItemsList itemsList={mockTodoList} />);

    const span = getByText('PENDING');

    // Assert
    expect(span.tagName).toBe('SPAN');
  });

  test('When ItemsList is rendered Then a li should be printed', () => {
    // Act
    const { getByRole } = render(<ItemsList itemsList={mockTodoList} />);

    const li = getByRole('listitem');

    // Assert
    expect(li.tagName).toBe('LI');
  });
  test('When ItemsList has elements Then it should render a <ul> element', () => {
    // Act
    const { getByRole } = render(<ItemsList itemsList={mockTodoList} />);

    const ulElement = getByRole('list');

    // Assert
    expect(ulElement.tagName).toBe('UL');
  });
});
