import { TaskList } from '@/components/TaskList';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Box component="main" sx={{ width: '600px', margin: '20px auto' }}>
      <Typography
        component="h2"
        variant="h5"
        color="primary.dark"
        fontWeight={600}
      >
        タスクリスト
      </Typography>
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
