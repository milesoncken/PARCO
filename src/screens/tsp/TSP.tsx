import { useState } from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/header/Header";
import Pie from "./components/pie/Pie";
import TableList from "./components/table/TableList";
import { HighlightItemData } from "@mui/x-charts/context";

function TSP() {
  const theme = useTheme();
  const data = [
    { id: 1, value: 64198, title: "G Fund", color: theme.palette.primary.main },
    { id: 0, value: 50150, title: "C Fund", color: "#75787B" },
    {
      id: 3,
      value: 22739,
      title: "Y Fund",
      color: theme.palette.secondary.dark,
    },
    { id: 4, value: 22739, title: "S Fund", color: "#262627" },
    {
      id: 5,
      value: 22739,
      title: "F Fund",
      color: theme.palette.action.selected,
    },
    { id: 2, value: 16640, title: "I Fund", color: "#ADC5E3" },
  ];

  const [selected, setSelected] = useState<HighlightItemData | null>(null);
  const [tab, setTab] = useState(0);

  return (
    <Container
      fixed
      maxWidth="sm"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: 4,
      }}
    >
      <Header onTabChange={setTab} />
      <Pie
        selected={selected}
        onSelectionChange={setSelected}
        data={tab === 0 ? data : data.slice(0, 3)}
      />
      <TableList
        onSelectionChange={setSelected}
        selected={selected}
        data={tab === 0 ? data : data.slice(0, 3)}
      />
    </Container>
  );
}

export default TSP;
