import { TaskList } from '@/components/TaskList';
import { Box, Button, Typography } from '@mui/material';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Box component="main" sx={{ width: '600px', margin: '20px auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          component="h2"
          variant="h5"
          color="primary.dark"
          fontWeight={600}
        >
          タスクリスト
        </Typography>
        <Button variant="contained" href="/add">
          タスクを追加する
        </Button>
      </Box>
      <Suspense fallback={`loading...`}>
        <TaskList />
      </Suspense>

      <Box sx={{ marginTop: 4 }}>
        <Typography color="primary.light" variant="caption">
          ※ これはApp Routerの画面です
        </Typography>
      </Box>
    </Box>
  );
}
