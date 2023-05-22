import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import react, { useEffect } from "react";
import axios from "axios";

export type Todo = {
  id: number;
  title: string;
  progress: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = react.useState<Todo[]>([]);
  const router = useRouter();

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

  // 画面マウント時に発火
  useEffect(() => {
    getDataInfo();
  }, []);

  const jumpEditPage = (
    selectedId: number,
    selectedTodo: string,
    selectedProgress: string
  ) => {
    const pathQuery = { selectedId, selectedTodo, selectedProgress };
    router.push({
      pathname: "/edit",
      query: pathQuery,
    });
  };

  // 削除する関数
  // レスポンスがあればデータだけ再取得
  const handleDelete = (selectedId: number) => {
    axios.delete(`http://localhost:8000/todos/${selectedId}`).then(() => {
      getDataInfo();
    });
  };

  return (
    <>
      <div className="todos-list">
        <div className="division">
          <div className="todo-title-name">
            <p>TODO TITLE</p>
          </div>
          <div className="todo-progress-name">
            <p>進捗状況</p>
          </div>
          <div className="button-frame-name">
            <p>アクション</p>
          </div>
        </div>
        <hr />
        <ul className="todos-body">
          {todos.length != 0 &&
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <div className="todo-row">
                    <div className="todo-title">
                      <p>{todo.title}</p>
                    </div>
                    <div className="todo-progress">
                      <p>{todo.progress}</p>
                    </div>
                    <div className="button-frame">
                      <Button
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={() =>
                          jumpEditPage(todo.id, todo.title, todo.progress)
                        }
                      >
                        編集
                      </Button>
                    </div>
                    <div className="button-frame">
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => handleDelete(todo.id)}
                      >
                        削除
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="add-todo">
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => router.push("/create")}
        >
          新規追加
        </Button>
      </div>
    </>
  );
};

export default TodoList;
