import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const PageUsers = () => {
  const [ users, setUsers ] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3000/users');
      const data = await resp.json();

      setUsers(data);
    })();
  }, []);

  const renderUser = (userData) => {
    const { lastname, firstname, email, phone, company } = userData;
    const fullName = firstname + ' ' + lastname;

    return (
      <tr onClick={() => navigate(userData.id)}>
        <td>{ fullName }</td>
        <td>{ email }</td>
        <td>{ phone }</td>
        <td>{ company?.name }</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Пользователи</h1>
      <table>
        <tbody>
          { users.map(renderUser) }
        </tbody>
      </table>
    </>
  )
}