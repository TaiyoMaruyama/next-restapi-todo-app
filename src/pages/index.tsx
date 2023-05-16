import Header from "@/Components/common/Header";
import TodoList from "@/Components/topPage/TodoList";
import UserInfo from "@/Components/common/UserInfo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Todo App</title>
      </Head>
      <Header />
      <div className="max-width">
        <UserInfo />
        <TodoList />
      </div>
    </>
  );
}
