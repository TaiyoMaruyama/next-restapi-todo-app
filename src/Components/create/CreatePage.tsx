import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";
import axios from "axios";

const CreateTodo: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [progress, setProgress] = React.useState<string>("");

  const router = useRouter();

  const createTitle = async () => {
    axios.post("http://localhost:8000/todos", { title, progress });
    router.push("/");
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProgress = (e: SelectChangeEvent) => {
    setProgress(e.target.value as string);
  };

  const handleCreate = () => {
    createTitle();
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="create-frame">
      <p>TODOを記入してください</p>
      <div className="input-form">
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleChangeTitle}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">進捗</InputLabel>
            <Select
              value={progress}
              label="progress"
              onChange={handleChangeProgress}
            >
              <MenuItem value={"NOT_START"}>未実施</MenuItem>
              <MenuItem value={"DOING"}>作業中</MenuItem>
              <MenuItem value={"DONE"}>作業完了</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="create-button-frame"></div>
      <Button variant="contained" onClick={handleCreate}>
        作成
      </Button>
      <Button variant="contained" onClick={handleCancel}>
        キャンセル
      </Button>
    </div>
  );
};

export default CreateTodo;
