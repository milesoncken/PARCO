import { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface HeaderProps {
  onTabChange: (tabIndex: number) => void;
}

function Header({ onTabChange }: HeaderProps) {
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
            backgroundColor: "#F1F1F1",
          },
          textTransform: "none",
          borderRadius: 30,
          backgroundColor: tab === 0 ? "#F1F1F1" : "transparent",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            paddingY: 1,
            paddingX: 2,
            fontWeight: 600,
            fontSize: theme.typography.h6.fontSize,
            color: tab === 0 ? "#495057" : theme.palette.secondary.dark,
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
            backgroundColor: "#F1F1F1",
          },
          marginLeft: 1,
          textTransform: "none",
          borderRadius: 30,
          backgroundColor: tab === 1 ? "#F1F1F1" : "transparent",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            paddingY: 1,
            paddingX: 2,
            fontWeight: 600,
            fontSize: theme.typography.h6.fontSize,
            color: tab === 1 ? "#495057" : theme.palette.secondary.dark,
          }}
        >
          Look Through Holdings
        </Typography>
      </Button>
    </Container>
  );
}

export default Header;
