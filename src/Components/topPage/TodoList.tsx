import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import react, { useEffect } from "react";
import axios from "axios";

const TodoList: React.FC = () => {
  const [todos, setTodos] = react.useState();
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then((response) => {
      setTodos(response.data);
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
          <li>
            <div className="todo-row">
              <div className="todo-title">
                <p>1つ目のTODO</p>
              </div>
              <div className="todo-progress">
                <p>未実施</p>
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
