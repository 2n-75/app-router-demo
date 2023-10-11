import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { FormEventHandler, useState } from 'react';
import { Task } from '.';

export type Props = {
  successMessage: string;
  isSubmitting: boolean;
  onSubmit: (task: Task) => void;
};

export const Presentation = ({
  successMessage,
  isSubmitting,
  onSubmit,
}: Props) => {
  const [name, setName] = useState<Task['name']>('');
  const [type, setType] = useState<Task['type']>('private');

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box
        component="form"
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <FormControl>
          <TextField
            id="task-name"
            label="名前"
            variant="outlined"
            onBlur={(e) => setName(e.target.value)}
          ></TextField>
        </FormControl>
        <FormControl>
          <FormLabel id="tasks-type-label">種類</FormLabel>
          <RadioGroup
            aria-labelledby="tasks-type-label"
            defaultValue="private"
            name="radio-buttons-group"
            onChange={(e) => setType(e.target.value as Task['type'])}
          >
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="private"
            />
            <FormControlLabel value="work" control={<Radio />} label="work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          onClick={() => onSubmit({ name, type })}
        >
          登録
        </Button>
        <Typography color="primary.light" variant="caption">
          {successMessage}
        </Typography>
      </Box>
    </Box>
  );
};
