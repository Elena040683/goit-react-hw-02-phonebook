import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.list__item} key={id}>
        <p className={styles.list__text}>
          {name}: {number}
        </p>
        <button
          className={styles.list__btn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
