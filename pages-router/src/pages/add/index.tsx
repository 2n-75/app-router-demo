import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Box, Button, Link, Typography } from '@mui/material';
import { AddTask } from '@/components/AddTask';

const inter = Inter({ subsets: ['latin'] });

export default function Add() {
  return (
    <>
      <Head>
        <title>タスクリスト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            ※ これはPages Routerの画面です
          </Typography>
        </Box>
      </Box>
    </>
  );
}
