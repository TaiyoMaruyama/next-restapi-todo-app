import { useSession } from "next-auth/react";

const UserInfo: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="user-info">
      <h3>{session ? session.user!.email : null}</h3>
    </div>
  );
};

export default UserInfo;
