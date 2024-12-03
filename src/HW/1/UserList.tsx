export type AddressType = {
  street: string,
  city: string
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType
};

export type UserListPropsType = {
  users: Array<UserType> // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {

  const ListOfUsers: Array<JSX.Element> = props.users.map( user => {
    return (
      <li key={user.id} id={`hw01-user-${user.id}`}>
      <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
    )
  })

  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
        {ListOfUsers}
      </ul>
    </div>
  );
};
