import * as React from "react";
import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  Card,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Title from "../title/Title";

interface DataRow {
  id: number;
  value: number;
  title: string;
  color: any;
}

interface TableListProps {
  data: DataRow[];
  selected: any;
  onSelectionChange: any;
}

const TableList: React.FC<TableListProps> = ({
  data,
  selected,
  onSelectionChange,
}) => {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleRowClick = (index: number) => {
    if (open === index) {
      setOpen(null);
      onSelectionChange(null);
    } else {
      setOpen(index);
      onSelectionChange({ type: "pie", seriesId: "A", dataIndex: index });
    }
  };

  const theme = useTheme();

  React.useEffect(() => {
    setOpen(selected?.dataIndex);
  }, [selected]);

  return (
    //for some reason im unable to give this any padding, so width for now
    <TableContainer sx={{ margin: "auto", width: "90%" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{}}>
            <TableCell sx={{ paddingLeft: 5, paddingBottom: 0 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#A3A7AA",
                }}
              >
                Items
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                sx={{
                  paddingRight: 6,
                  paddingBottom: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#A3A7AA",
                }}
              >
                Total Value
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <React.Fragment key={row.id}>
              <TableRow
                onClick={() => handleRowClick(index)}
                sx={{
                  //tried for a while to get hovering to work how it should, sibling css classes are as close as i could get
                  //grid might be a better solution for this
                  ":hover": {
                    backgroundColor: "#F1F1F1",
                  },
                  "& > *": {
                    borderBottom: "0",
                  },
                  backgroundColor: open === index ? "#F1F1F1" : "transparent",
                }}
              >
                <TableCell
                  sx={{
                    paddingLeft: 5,
                    display: "flex",
                    justifyContent: "flex-start",
                    borderBottom: 0,
                  }}
                >
                  <Title highlighted={index} data={data} />
                </TableCell>
                <TableCell
                  sx={{
                    flexDirection: "row",
                    borderBottom: 0,
                    paddingRight: 6,
                  }}
                  align="right"
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: theme.typography.body2.fontSize,
                      fontWeight: theme.typography.body2.fontWeight,
                      color: "#495057",
                    }}
                  >
                    {`$${row.value.toLocaleString()}`}
                    <span>
                      {open === index ? (
                        <KeyboardArrowUpIcon
                          sx={{ fontSize: "1.5rem", verticalAlign: "middle" }}
                        />
                      ) : (
                        <KeyboardArrowDownIcon
                          sx={{ fontSize: "1.5rem", verticalAlign: "middle" }}
                        />
                      )}
                    </span>
                  </Typography>
                </TableCell>
              </TableRow>
              {/* drop down */}
              <TableRow
                onClick={() => handleRowClick(index)}
                sx={{
                  backgroundColor: "#F1F1F1",
                }}
              >
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                  }}
                  colSpan={3}
                >
                  <Collapse in={open === index} timeout="auto" unmountOnExit>
                    <TableContainer sx={{ marginBottom: 2 }} component={Card}>
                      <Table>
                        {/* this is hardcoded for now because it doesnt change on the figma */}
                        <TableBody
                          sx={{
                            backgroundColor:
                              open === index
                                ? theme.palette.common.white
                                : theme.palette.common.white,
                          }}
                        >
                          <TableRow>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#A3A7AA",
                                }}
                              >
                                Risk Level
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#495057",
                                }}
                              >
                                10
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#A3A7AA",
                                }}
                              >
                                Examples
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#495057",
                                }}
                              >
                                Apple, Google, Microsoft, Meta, Tesla
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#A3A7AA",
                                }}
                              >
                                Description
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  paddingRight: 2,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#495057",
                                }}
                              >
                                Very volatile, will reap the most rewards from
                                good years and the worst losses of bad years
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
