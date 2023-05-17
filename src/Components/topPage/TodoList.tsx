import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import react, { useEffect } from "react";
import axios from "axios";

type Todo = {
  id: number;
  title: String;
  progress: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = react.useState<Todo[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // 作成ボタンに対する関数
  const handleCreate = () => {
    router.push("/create");
  };

  // 編集ボタンに対する関数
  const handleEdit = () => {
    router.push("/edit");
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
          {todos.map((todo) => {
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
                      onClick={handleEdit}
                    >
                      編集
                    </Button>
                  </div>
                  <div className="button-frame">
                    <Button variant="contained" size="small" color="error">
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
          onClick={handleCreate}
        >
          新規追加
        </Button>
      </div>
    </>
  );
};

export default TodoList;
