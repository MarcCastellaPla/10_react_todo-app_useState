import { ItemCard } from './ItemCard';
import styles from './ItemsList.module.css';

export const ItemsList = ({ itemsList }) => {
  return (
    <ul className={styles['taskList__items']}>
      {itemsList.map((item) => (
        <li key={item.uuid}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  );
};
