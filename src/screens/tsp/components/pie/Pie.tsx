import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "@mui/material/styles";
import { HighlightItemData } from "@mui/x-charts/context";
import Title from "../title/Title";
import { PieItemIdentifier } from "@mui/x-charts";

interface DataItem {
  value: number;

  color: string;
  title: string;
}

interface PieProps {
  data: DataItem[];
  onSelectionChange: (selected: HighlightItemData | null) => void;
  selected: HighlightItemData | null;
}

function Pie({ data, onSelectionChange, selected }: PieProps) {
  const theme = useTheme();

  const [selectedItem, setSelectedItem] = useState<HighlightItemData | null>(
    null
  );
  const [hoveredItem, setHoveredItem] = useState<HighlightItemData | null>(
    null
  );

  useEffect(() => {
    if (selected) {
      setSelectedItem(selected);
    } else {
      resetSelection();
    }
  }, [selected]);

  const resetSelection = () => {
    setSelectedItem(null);
    setHoveredItem(null);
  };

  const handleHighlightChange = (highlight: HighlightItemData | null) => {
    setHoveredItem(highlight);
  };

  const handleItemClick = (
    _event: React.MouseEvent,
    pieItemIdentifier: PieItemIdentifier
  ) => {
    if (selectedItem?.dataIndex === pieItemIdentifier?.dataIndex) {
      resetSelection();
      onSelectionChange(null);
    } else {
      setSelectedItem(pieItemIdentifier);
      setHoveredItem(pieItemIdentifier);
      onSelectionChange(pieItemIdentifier);
    }
  };

  const getHighlightedItem = () => selectedItem || hoveredItem;

  const getValue = () => {
    const activeItem = selectedItem || hoveredItem;

    if (
      activeItem === null ||
      typeof activeItem.dataIndex !== "number" ||
      !data[activeItem.dataIndex]
    ) {
      return data.reduce((acc, item) => acc + item.value, 0);
    } else {
      return data[activeItem.dataIndex].value;
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: 300,
        overflow: "visible",
      }}
    >
      <PieChart
        series={[
          {
            id: "A",
            highlightScope: { highlight: "item" },
            highlighted: { additionalRadius: 8 },
            data,
            innerRadius: "80%",
            outerRadius: "100%",
            paddingAngle: 2.5,
            cornerRadius: 0,
            startAngle: 0,
            endAngle: 360,
            cx: "62%",
            cy: "50%",
          },
        ]}
        slotProps={{ legend: { hidden: true } }}
        sx={{
          scale: 0.95,
          overflow: "visible",
          ".MuiChart-highlighted": {
            fill: "transparent",
            strokeWidth: 2,
          },
        }}
        onHighlightChange={handleHighlightChange}
        highlightedItem={getHighlightedItem()}
        onItemClick={handleItemClick}
        tooltip={{ trigger: "none" }}
      />
      <Container
        sx={{
          position: "absolute",
          pointerEvents: "none",
          width: 300,
        }}
      >
        <Title
          highlighted={getHighlightedItem()?.dataIndex ?? null}
          data={data}
        />
        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: theme.typography.h3.fontSize,
            color: "#F1F1F1",
          }}
        >
          {`$${getValue().toLocaleString()}`}
        </Typography>
      </Container>
    </Container>
  );
}

export default Pie;
