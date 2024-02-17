import React, { useEffect, useState } from "react";

interface Users {
  studentId: string;
  name: string;
  email: string;
  gakubu: string;
  gakka: string;
  phoneNum: string;
  isAdmin: boolean;
  registered_at: string;
}

const RegisteredUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "http://localhost:3000/api/admin/accessHistory/registeredUsers"
      );
      const data = await response.json();

      setUsers(data);
    };

    fetchUsers();
  }, []);
  console.log(users);

  if (users.length === 0) {
    return <div className="text-black">No registered Users</div>;
  }
  return (
    <div>
      <br />
      <div className="text-2xl text-black">ユーザー登録ログ</div>
      <div className="grid place-items-center pb-16 text-gray-500 text-lg table table-zebra-zebra overflow-x-auto border">
        <table>
          <thead className="text-lg">
            <tr className="border-y-gray-500">
              <th className="text-black">StudentID</th>
              <th className="text-black">Name</th>
              <th className="text-black">Email</th>
              <th className="text-black">Gakubu</th>
              <th className="text-black">Gakka</th>
              <th className="text-black">Phone Number</th>
              <th className="text-black">Is Admin</th>
              <th className="text-black">registered At</th>
            </tr>
          </thead>
          <tbody className="table-auto table-row-group">
            {users.map((user) => (
              <tr key={user.studentId}>
                <td>{user.studentId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gakubu}</td>
                <td>{user.gakka}</td>
                <td>{user.phoneNum}</td>
                {user.isAdmin ? (
                  <td className="text-green-500">True</td>
                ) : (
                  <td>False</td>
                )}
                <td>{new Date(user.registered_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUsers;
