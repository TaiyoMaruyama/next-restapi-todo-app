import { Todo } from "@prisma/client";
import axios from "axios";
import { useState } from "react";

const useGetData = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // TODOデータを取得
  const getDataInfo = async () => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("追加されました");
  };

  return { todos, getDataInfo };
};

export default useGetData;
