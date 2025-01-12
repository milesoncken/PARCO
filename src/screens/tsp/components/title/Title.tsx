import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//tag probably would have been a better name for this
function Title({ highlighted, data }) {
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
    : theme.palette.gray.darkest;

  const titleText = isValidHighlight ? data[highlighted].title : "TSP Total";

  return (
    <Typography
      sx={{
        mt: 0,
        borderRadius: 2,
        justifySelf: "center",
        paddingX: 1.5,
        paddingY: 0.5,
        fontWeight: theme.typography.body1Medium.fontWeight,
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
