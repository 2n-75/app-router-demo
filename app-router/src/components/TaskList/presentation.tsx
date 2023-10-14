import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import { DeleteTask } from '../DeleteTask';
import { TasksResponse } from '@/app/api/tasks/route';

export type Props = {
  list: TasksResponse['tasks'];
};

export const Presentation = ({ list }: Props) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        {list.map((item) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {item.type === 'private' ? <HomeIcon /> : <WorkIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} />
            <DeleteTask id={item.id} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
