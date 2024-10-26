import "./ProductList.css";
import { data } from "../../result";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React, { useState, useEffect } from "react";

const pagination = true;
const paginationPageSize = 50;
const paginationPageSizeSelector = [25, 50, 100, 250];

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
  },

  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agTextColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
];

function ProductList() {
  const [pageSize, setPageSize] = useState(50);

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <div className="productList">
      <div>
        <b>ProductList</b>
      </div>

      <div className="productListTable">
        <div className="ag-theme-alpine" style={{ width: "100%" }}>
          <AgGridReact
            rowData={data}
            columnHoverHighlight={true}
            columnDefs={columns}
            pagination={pagination}
            paginationPageSize={pageSize}
            paginationPageSizeSelector={[50, 100, 250]}
            defaultColDef={{ resizable: true }}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
