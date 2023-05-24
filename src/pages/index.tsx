import Header from "@/Components/common/Header";
import TodoList, { Todo } from "@/Components/topPage/TodoList";
import UserInfo from "@/Components/common/UserInfo";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get("http://localhost:8000/todos");
  const data = await response.data;
  console.log(data);
  return {
    props: {
      todos: data,
    },
  };
};

type HomeProps = {
  todos: Todo[];
};

export default function Home({ todos }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Todo App</title>
      </Head>
      <Header />
      <div className="max-width">
        <UserInfo />
        <TodoList todos={todos} />
      </div>
    </>
  );
}
