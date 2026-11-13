import { NavLink } from 'react-router';

export const ClientsPage = () => {
  return (
    <>
      <h1>Clients</h1>
      <NavLink to="/" end>
        Домашняя страница
      </NavLink>
    </>
  );
};
