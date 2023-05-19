import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const JumpHome = () => {
    router.push({
      pathname: "/",
    });
  };

  const router = useRouter();
  return (
    <>
      <div className="header-frame">
        <div className="header-in-frame">
          <h1 className="header-title" onClick={JumpHome}>
            見たいアニメリスト
          </h1>
          <Button variant="contained" size="small" color="error">
            ログアウト
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
