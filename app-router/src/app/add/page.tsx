import { AddTask } from '@/components/AddTask';
import { Box, Typography } from '@mui/material';

export default async function Page() {
  return (
    <Box component="main" sx={{ width: '600px', margin: '20px auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          component="h2"
          variant="h5"
          color="primary.dark"
          fontWeight={600}
        >
          タスクの追加
        </Typography>
      </Box>

      <AddTask />
      <Box sx={{ marginTop: 4 }}>
        <Typography color="primary.light" variant="caption">
          ※ これはApp Routerの画面です
        </Typography>
      </Box>
    </Box>
  );
}
