import { useState } from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/header/Header";
import Pie from "./components/pie/Pie";
import TableList from "./components/table/TableList";

function TSP() {
  const theme = useTheme();
  //IDs are currently set to how they are on figma, i sorted by value beacuse i think it looks nicer
  const data = [
    { id: 1, value: 64198, title: "G Fund", color: theme.palette.primary.main },
    {
      id: 0,
      value: 50150,
      title: "C Fund",
      color: theme.palette.gray.mediumDark,
    },
    {
      id: 3,
      value: 22739,
      title: "Y Fund",
      color: theme.palette.secondary.dark,
    },
    {
      id: 4,
      value: 22739,
      title: "S Fund",
      color: theme.palette.customColors.black,
    },
    {
      id: 5,
      value: 22739,
      title: "F Fund",
      color: theme.palette.action.selected,
    },
    {
      id: 2,
      value: 16640,
      title: "I Fund",
      color: theme.palette.customColors.pastelWater,
    },
  ];

  const [selected, setSelected] = useState(null);
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
        //manually setting data to a slice because we dont have any real data to show that the components work dynamically
        data={tab == 0 ? data : data.slice(0, 3)}
      />
      <TableList
        onSelectionChange={setSelected}
        selected={selected}
        data={tab == 0 ? data : data.slice(0, 3)}
      />
    </Container>
  );
}

export default TSP;
