import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StartPage from "../start/startPage";

const Header = () => {
  const router = useRouter();

  const JumpHome = () => {
    router.push({
      pathname: "/",
    });
  };

  const { data: session } = useSession();

  if (!session) {
    return <StartPage />;
  } else {
    return (
      <>
        <div className="header-frame">
          <div className="header-in-frame">
            <h1 className="header-title" onClick={JumpHome}>
              見たいアニメリスト
            </h1>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => router.push("/api/auth/signin/google")}
            >
              ログアウト
            </Button>
          </div>
        </div>
      </>
    );
  }
};

export default Header;
