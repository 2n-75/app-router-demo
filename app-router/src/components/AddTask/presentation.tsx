'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { addTask } from './action';
import { useState } from 'react';

export type Props = {
  submitAction: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  successMessage: string;
};

export const Presentation = ({
  submitAction,
  isSubmitting,
  successMessage,
}: Props) => {
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
        action={submitAction}
      >
        <FormControl>
          <TextField
            id="task-name"
            label="名前"
            variant="outlined"
            name="name"
          ></TextField>
        </FormControl>
        <FormControl>
          <FormLabel id="tasks-type-label">種類</FormLabel>
          <RadioGroup
            aria-labelledby="tasks-type-label"
            defaultValue="private"
            name="type"
          >
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="private"
            />
            <FormControlLabel value="work" control={<Radio />} label="work" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          登録
        </Button>
        <Typography color="primary.light" variant="caption">
          {successMessage}
        </Typography>
      </Box>
    </Box>
  );
};
