import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface DataItem {
  color: string;
  title: string;
}

interface TitleProps {
  highlighted: number | null;
  data: DataItem[];
}

function Title({ highlighted, data }: TitleProps) {
  const theme = useTheme();

  const isValidHighlight =
    highlighted !== undefined &&
    highlighted !== null &&
    data[highlighted] !== undefined;

  const backgroundColor = isValidHighlight
    ? data[highlighted].color
    : "transparent";

  const textColor = isValidHighlight
    ? theme.palette.background.default
    : "#373B47";

  const titleText = isValidHighlight ? data[highlighted].title : "TSP Total";

  return (
    <Typography
      sx={{
        mt: 0,
        borderRadius: 2,
        justifySelf: "center",
        paddingX: 1.5,
        paddingY: 0.5,
        fontWeight: 600,
        fontSize: theme.typography.h6.fontSize,
        color: textColor,
        backgroundColor: backgroundColor,
      }}
    >
      {titleText}
    </Typography>
  );
}

export default Title;
