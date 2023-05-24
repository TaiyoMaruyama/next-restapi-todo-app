import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

export type Todo = {
  id: number;
  title: string;
  progress: string;
};

const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  const router = useRouter();
  const [modalState, setModalState] = useState<boolean>(false);
  const [deleteAlternate, setDeleteAlternate] = useState({ title: "", id: 0 });

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

  const handleDelete = (title: string, id: number) => {
    setDeleteAlternate({ title: title, id: id });
    switchModal();
  };

  const deleteTitle = () => {
    axios
      .delete(`http://localhost:8000/todos/${deleteAlternate.id}`)
      .then(() => {
        location.reload();
      });
    switchModal();
    setDeleteAlternate({ title: "", id: 0 });
  };

  const switchModal = () => {
    setModalState(!modalState);
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
          {todos?.length != 0 &&
            todos?.map((todo: Todo) => {
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
                        onClick={() => handleDelete(todo.title, todo.id)}
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
      {modalState && (
        <div className="modal-full">
          <div className="modal-frame">
            <h4>以下のアニメタイトルを削除してもよろしいですか</h4>
            <p className="modal-title">{deleteAlternate.title}</p>
            <div className="modal-button">
              <div className="modal-button-frame">
                <Button variant="contained" onClick={deleteTitle}>
                  削除
                </Button>
              </div>
              <div className="modal-button-frame">
                <Button variant="contained" onClick={switchModal}>
                  キャンセル
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
