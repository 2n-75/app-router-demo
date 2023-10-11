import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Box, Typography } from '@mui/material';
import { TaskList } from '@/components/TaskList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>タスクリスト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main" sx={{ width: '600px', margin: '20px auto' }}>
        <Typography
          component="h2"
          variant="h5"
          color="primary.dark"
          fontWeight={600}
        >
          タスクリスト
        </Typography>
        <TaskList />
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography color="primary.light" variant="caption">
          ※ これはApp Routerの画面です
        </Typography>
      </Box>
    </>
  );
}
