import React, { useState } from "react";

import { Box, Container, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Header({ onTabChange }) {
  const [tab, setTab] = useState(0);
  const theme = useTheme();

  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: 4,
        paddingBottom: 2,
        paddingX: 1,
      }}
    >
      <Button
        onClick={() => {
          setTab(0);
          onTabChange(0);
        }}
        disableRipple
        sx={{
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
          ":hover": {
            backgroundColor: theme.palette.gray.lightest,
          },
          textTransform: "none",
          borderRadius: 30,
          backgroundColor:
            tab === 0 ? theme.palette.gray.lightest : "transparent",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            paddingY: 1,
            paddingX: 2,
            fontWeight: theme.typography.body1Medium.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            color:
              tab === 0
                ? theme.palette.gray.dark
                : theme.palette.secondary.dark,
          }}
        >
          TSP Holdings
        </Typography>
      </Button>
      <Button
        onClick={() => {
          setTab(1);
          onTabChange(1);
        }}
        disableRipple
        sx={{
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
          ":hover": {
            backgroundColor: theme.palette.gray.lightest,
          },
          marginLeft: 1,
          textTransform: "none",
          borderRadius: 30,
          backgroundColor:
            tab === 1 ? theme.palette.gray.lightest : "transparent",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            paddingY: 1,
            paddingX: 2,
            fontWeight: theme.typography.body1Medium.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            color:
              tab === 1
                ? theme.palette.gray.dark
                : theme.palette.secondary.dark,
          }}
        >
          Look Through Holdings
        </Typography>
      </Button>
    </Container>
  );
}

export default Header;
