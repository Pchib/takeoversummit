"use client";
import React, { useState } from 'react';
import {
  Box,
  Fab,
  Paper,
  Typography,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { role: 'user', content: userInput };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setLoading(true);

    try {
      // Prepare the request payload
      const payload = {
        messageText: userInput,
        conversation: messages,
      };

      const response = await fetch(
        'https://us-central1-global--harvest.cloudfunctions.net/bot',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      // Extract the replyText from the API response
      const botMessage = {
        role: 'assistant',
        content: data.replyText || 'No response from bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        role: 'assistant',
        content: 'Error: Unable to get response.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating action button to open chat */}
      <Fab
        color="primary"
        onClick={handleToggleOpen}
        sx={{ position: 'fixed', bottom: 16, left: 16, zIndex: 9999 }}
        style={{backgroundColor:"#f47321"}}
      >
        <ChatIcon />
      </Fab>

      {open && (
        <Paper
          elevation={3}
          sx={{
            position: 'fixed',
            bottom: 80,
            left: 16,
            width: 300,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1,
              borderBottom: '1px solid #ccc',
            }}
          >
            <Typography variant="h6">Chat</Typography>
            <IconButton onClick={handleToggleOpen} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ flex: 1, overflowY: 'auto', p: 1 }}>
            <List>
              {messages.map((msg, idx) => (
                <React.Fragment key={idx}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      justifyContent:
                        msg.role === 'user' ? 'flex-end' : 'flex-start',
                      textAlign: msg.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    <ListItemText
                      primary={msg.content}
                      primaryTypographyProps={{
                        sx: {
                          backgroundColor:
                            msg.role === 'user' ? '#1976d2' : '#f0f0f0',
                          color: msg.role === 'user' ? '#fff' : '#000',
                          p: 1,
                          borderRadius: 1,
                          display: 'inline-block',
                          maxWidth: '80%',
                          wordWrap: 'break-word',
                        },
                      }}
                    />
                  </ListItem>
                  {idx < messages.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '1px solid #ccc',
              p: 1,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              disabled={loading}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : <SendIcon />}
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default ChatWidget;
