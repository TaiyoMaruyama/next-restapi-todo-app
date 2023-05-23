import Header from "@/Components/common/Header";
import UserInfo from "@/Components/common/UserInfo";
import EditTodo from "@/Components/editPage/EditPage";

export default function CreatePage() {
  return (
    <>
      <Header />
      <div className="max-width">
        <UserInfo />
        <EditTodo />
      </div>
    </>
  );
}
