import styles from './ItemCard.module.css';

export const ItemCard = ({ item: { status, title, description } }) => {
  let statusModifier = styles['itemCard__status'];
  let titleModifier = styles['itemCard__title'];
  const statusUpperCase = status.toUpperCase();

  if (status === 'done') {
    statusModifier = styles['itemCard__status--done'];
    titleModifier = styles['itemCard__title--done'];
  }
  if (status === 'in progress') {
    statusModifier = styles['itemCard__status--in-progress'];
    titleModifier = styles['itemCard__title--in-progress'];
  }
  if (status === 'pending') {
    statusModifier = styles['itemCard__status--pending'];
    titleModifier = styles['itemCard__title--pending'];
  }

  return (
    <>
      <h4 className={`${styles['itemCard__title']} ${titleModifier}`}>
        {title}
      </h4>
      <p className={styles['itemCard__description']}>{description}</p>
      <span className={`${styles['itemCard__status']} ${statusModifier}`}>
        {statusUpperCase}
      </span>
    </>
  );
};
