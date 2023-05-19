import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";
import axios from "axios";

const EditTodo: React.FC = () => {
  const router = useRouter();
  const getQuery = router.query;
  const [title, setTitle] = React.useState(getQuery.selectedTodo);
  const [progress, setProgress] = React.useState(getQuery.selectedProgress);

  React.useEffect(() => {
    console.log(getQuery);
  }, []);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProgress = (e: SelectChangeEvent) => {
    setProgress(e.target.value as string);
  };

  const handleEdit = () => {
    const modify = { title: title, progress: progress };
    axios
      .put(`http://localhost:8000/todos/${getQuery.selectedId}`, modify)
      .then(() => {
        router.push("/");
      });
  };

  return (
    <div className="create-frame">
      <p>編集を行ってください</p>
      <div className="input-form">
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleChangeTitle}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>進捗</InputLabel>
            <Select
              value={`${progress}`}
              label="progress"
              onChange={handleChangeProgress}
            >
              <MenuItem value={"NOT_START"}>未放送</MenuItem>
              <MenuItem value={"DOING"}>放送中</MenuItem>
              <MenuItem value={"DONE"}>放送済</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="edit-button-frame">
        <Button variant="contained" onClick={handleEdit}>
          更新
        </Button>
        <Button variant="contained" onClick={() => router.push("/")}>
          キャンセル
        </Button>
      </div>
    </div>
  );
};

export default EditTodo;
