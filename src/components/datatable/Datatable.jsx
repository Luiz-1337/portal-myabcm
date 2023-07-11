import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { caseColumns, caseRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(caseRows);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Cases
        <Link to="/users/new" className="link">
          New Case
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={caseRows}
        columns={caseColumns}
        pageSize={7}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;