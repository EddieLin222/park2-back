import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const List = (props) => {
  return (
    <Card variant='outlined rounded'>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: '#f4f4f4',
          margin: '10px',
          padding: '10px'
          // '&:hover': {
          //   backgroundColor: 'teal',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        {props.value}
        <Button size="small" variant='outlined'
          sx={{
            margin: '10px'
          }}
        >Edit</Button>
        <TextField id="outlined-basic" label="活動名稱" variant="outlined" />
      </Box>
    </Card>
  );
}

export default List;