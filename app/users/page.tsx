interface User {
  id: number;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const response = await fetch("http://localhost:3000/api/newuser", {
    method: "GET",
  });
  const users: User[] = await response.json();
  console.log(users);

  return (
    <>
      <div className="text-center">User</div>

      {/* {users.map((user, index) => {
        return <h1 key={index}>{user.name}</h1>;
      })} */}
    </>
  );
};

export default UsersPage;
