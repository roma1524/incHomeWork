import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = ({filterUsers,users}: UserList2PropsType) => {

	function onclickButtonHandler() {
		filterUsers()
	}

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={onclickButtonHandler}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {users.myFriends.map((user) => (
			    <CurrentUser user={user} />
			  ))}
			</ul>
		</div>
	);
};
