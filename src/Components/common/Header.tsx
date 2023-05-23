import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (status === "unauthenticated") {
      router.replace("/api/auth/signin/google");
    }
  }, [session, status]);

  return (
    <>
      <div className="header-frame">
        <div className="header-in-frame">
          <h1 className="header-title" onClick={() => router.push("/")}>
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
};

export default Header;
