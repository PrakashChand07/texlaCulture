import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBar from '../search/Search';

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const columns = [
  { id: "name", label: "Company Name", minWidth: 80 },
  {
    id: "goLiveDate",
    label: "Go-Live Date",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "totalUserBase",
    label: "Total User Base",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "lastBilling",
    label: "Last Billing",
    minWidth: 80,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  { id: "status", label: "Status", minWidth: 100 },
];

function createData(
  name,
  goLiveDate,
  totalUserBase,
  lastBilling,
  status
) {
  return {
    name,
    goLiveDate,
    totalUserBase,
    lastBilling,
    status,
  };
}

const rows = [
  createData(
    "Texlaculture",
  
    "07 Aug 2022",
    244,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "Pinch Life",

    "06 May 2022",
    1000,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "O Buddy",

    "05 Oct 2022",
    150,
    "07 Aug 2022",
    "Draft"
  ),
  createData(
    "Texlaculture 2",

    "12 Jan 2022",
    244,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "Pinch Life 2",
    "06 May 2022",
    1000,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "O Buddy 2",

    "05 Oct 2022",
    150,
    "07 Aug 2022",
    "Draft"
  ),
  createData(
    "Texlaculture 3",
    "12 Jan 2022",
    244,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "Pinch Life 3",
    "06 May 2022",
    1000,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "O Buddy 3",
    "05 Oct 2022",
    150,
    "07 Aug 2022",
    "Draft"
  ),
  createData(
    "Pinch Life 4",
    "06 May 2022",
    1000,
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "O Buddy 4",
    "05 Oct 2022",
    150,
    "07 Aug 2022",
    "Draft"
  ),
];

export default function CompanyTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (text) => {
    setPage(0);
    setSearchText(text);
  };

  const handleTypeChange = (event) => {
    setPage(0);
    setSelectedType(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      (selectedType === "" || row.status === selectedType) &&
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        marginBottom: 2,
        fontSize: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <FormControl size="small" sx={{ marginRight: 1 }}>
          <Select
            value={selectedType}
            onChange={handleTypeChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              All
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Draft">Draft</MenuItem>
          </Select>
        </FormControl>
        <SearchBar onSearch={handleSearch} />
      </Box>

      <TableContainer sx={{ maxHeight: 300 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ fontSize: "16px", marginBottom: "0px", gap: '5px'}}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "13px",
                    fontWeight: 'bold',
                    padding: "8px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  sx={{ marginBottom: "0px" }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ fontSize: "12px", padding: "8px" }}
                    >
                      {column.id === "status" ? (
                        <Button
                          style={{
                            backgroundColor:
                              row.status === "Active" ? "#8BC34A" : "white",
                            color: row.status === "Active" ? "white" : "black",
                            fontSize: "12px",
                          }}
                        >
                          {row.status}
                        </Button>
                      ) : column.format &&
                        typeof row[column.id] === "number" ? (
                        column.format(row[column.id])
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
