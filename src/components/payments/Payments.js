// import React, { useMemo, useCallback, useRef } from "react";

// import { Grid, Button, Divider, Typography } from "@mui/material";
// import { AgGridReact } from "ag-grid-react";

// import Dialog from "../dialog/Dialog";
// import { useNavigate } from "react-router-dom";

// import data from "./paymentsData";

// const Payments = () => {
//   const gridRef = useRef();
//   const navigate = useNavigate();

//   const [columns] = React.useState(data.columns);
//   const [rows] = React.useState(data.rows);

//   const [selected, setSelected] = React.useState();
//   const [dialogDetails, setDialogDetails] = React.useState({
//     title: "",
//     content: "",
//     noText: "",
//     yesText: "",
//     yesFun: () => {},
//     noFun: () => {},
//   });
//   const [openDialog, setOpenDialog] = React.useState(false);

//   const defaultColDef = useMemo(
//     () => ({
//       sortable: true,
//       resizable: true,
//     }),
//     []
//   );

//   const rowClickedListener = useCallback(({ data }) => {
//     console.log("cellClicked", data);
//     setSelected(data);
//   }, []);

//   const getRowClass = (params) => {
//     if (params.node.rowIndex % 2 === 0) {
//       return "my-shaded-effect";
//     }
//   };

//   const clearFilters = useCallback(() => {
//     gridRef.current.api.setFilterModel(null);
//   }, []);

//   const handleRowDoubleClicked = useCallback(
//     (row) => {
//       setOpenDialog(true);
//       setDialogDetails({
//         title: `${selected.name}`,
//         content: ` ${selected.name} is a popular general medicine clininc based in the west coast`,
//         noText: "Update",
//         yesText: "Know More",
//         yesFun: () => {
//           navigate(`admin/clinic/${selected.id}`);
//           setOpenDialog(false);
//         },
//         noFun: () => {
//           setOpenDialog(false);
//         },
//       });
//     },
//     [selected, navigate]
//   );

//   const handleCloseDialog = useCallback(() => {
//     setOpenDialog(false);
//   }, []);

//   return (
//     <>
//       <Grid container p={2} justifyContent="space-between">
//         <Typography variant="h4">Payments</Typography>
//         <Grid item height="100%" alignItems="center">
//           <Button variant="standard" size="small" onClick={clearFilters}>
//             Reset Filters
//           </Button>
//         </Grid>
//       </Grid>
//       <Divider />



//       <div
//         className="ag-theme-alpine"
//         style={{ height: "80vh", width: "100%" }}
//       >
//         <AgGridReact
//           ref={gridRef}
//           rowData={rows}
//           columnDefs={columns}
//           defaultColDef={defaultColDef}
//           animateRows={true}
//           rowSelection="multiple"
//           onRowClicked={rowClickedListener}
//           rowClass="my-green-class"
//           getRowClass={getRowClass}
//           checkboxSelection={true}
//           onRowDoubleClicked={handleRowDoubleClicked}
//           pagination={true}
//           paginationPageSize={10}
//         ></AgGridReact>
//       </div>
//       {openDialog && selected && (
//         <Dialog
//           open={openDialog}
//           handleClose={handleCloseDialog}
//           title={dialogDetails.title}
//           content={dialogDetails.content}
//           noText={dialogDetails.noText}
//           yesText={dialogDetails.yesText}
//           yesFun={dialogDetails.yesFun}
//           noFun={dialogDetails.noFun}
//         />
//       )}
//     </>
//   );
// };

// export default Payments;

import React from 'react'

const Payments = () => {
  return (
    <div>
      <div className='mb-3 ms-3 mt-3' style={{ border: "1px solid black", width: "150px", borderRadius: "15px", backgroundColor: "#54E6D8" }}>
        <h5 className='ms-3 mt-2 mx-auto'>Patient List</h5>
      </div>
      <table class="table" >
        <thead style={{ backgroundColor: " linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)" }}>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Booking ID's</th>
            <th scope="col">Date</th>
            <th scope="col">Mop</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Payments
