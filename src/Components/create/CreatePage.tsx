import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/router";

const CreateTodo: React.FC = () => {
  const [age, setAge] = React.useState("");
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleCreate = () => {
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="create-frame">
      <p>TODOを記入してください</p>
      <div className="input-form">
        <input type="text" className="input" />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">進捗</InputLabel>
            <Select
              id="demo-simple-select"
              value={age}
              label="progress"
              onChange={handleChange}
            >
              <MenuItem value={10}>未実施</MenuItem>
              <MenuItem value={20}>作業中</MenuItem>
              <MenuItem value={30}>作業完了</MenuItem>
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
