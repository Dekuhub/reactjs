import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './page.user.module.css';

const InputRow = ({ id, title, value, setValue }) => {
  return (
    <div className={classes.row}>
      <label htmlFor={id}>{title}</label>
      <input
        className={classes.input}
        id={id}
        type="text"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export const PageUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3000/users/' + id);
      const data = await resp.json();

      setUser(data);
      setName(data.firstname + ' ' + data.lastname);
      setEmail(data.email);
      setCompany(data.company?.name);
    })();
  }, [id]);

  const handleUpdate = async () => {
    const updatedData = {
      id: user.id,
      firstname: name.split(' ')[0],
      lastname: name.split(' ')[1],
      email: email,
      company: {
        ...user.company,
        name: company,
      },
    };

    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Данные обновлены');
      } else {
        console.error('Ошибка обновлении');
      }
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };

  return (
    <div>
      <InputRow
        title="Name"
        id="user_name"
        value={ name }
        setValue={ setName } />
      <InputRow
        title="Email"
        id="user_email"
        value={ email }
        setValue={ setEmail } />
      <InputRow
        title="Company"
        id="user_company"
        value={ company }
        setValue={ setCompany } />

      <button onClick={ handleUpdate } className={ classes.input }>Update</button>
    </div>
  );
};