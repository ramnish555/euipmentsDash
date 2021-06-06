import MUIDataTable from "mui-datatables";
import api_data from './ApiData';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const columns = [
  {
    name: "ID",
    label: "ID",
  //  options: {
  //   filter: true,
  //   sort: true,
  //   filterType: 'textfield',
  //   print: false,
  //  }
  },
  {
    name: "Equipment_Name",
    label: "Equipment_Name",
  },
  {
    name: "Equipment_ID",
    label: "Equipment_ID",
  },
  {
    name: "Complete_specification",
    label: "Complete_Specification",
    options: {
      setCellProps: () => ({ style: { minWidth: "300px", maxWidth: "400px" }}),
      customBodyRender: (data, type, row) => {return <span>{data}</span>}
    },
  },
  {
    name: "Department",
    label: "Department",
  },
  {
    name: "Date_Of_Purchase",
    label: "Date_Of_Purchase",
  },
  {
    name: "Bill_Date",
    label: "Bill_Date",
  },
  {
    name: "Cost_of_equipment",
    label: "Cost_of_equipment",
  },
  {
    name: "Equip_Status",
    label: "Equip_Status",
  },
  {
    name: "Unit_Name",
    label: "Unit_Name",
  },
  {
    name: "Equip_Remarks",
    label: "Equip_Remarks",
  },
  {
    name: "Category",
    label: "Category",
  },
];
 
const data = api_data;

 const options = {
  filter: true,
  sort: true,
  selectableRows: 'multiple',
  filterType: 'textField',
  responsive: 'vertical',
  rowsPerPage: 6,
};

const SamplePage = () => {
  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiTableCell: {
        head: {
            backgroundColor: "#3f4d67 !important",
        },
      },
      MUIDataTableHeadCell: {
        toolButton: {
          color: "#a9b7d0 !important",
          fontSize: "15px !important",
        },
      },
      MUIDataTableBodyCell: {
        root: {
          padding: "3px !important",
        }
      },
    }
  })
  return(
    <>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Equipments"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  )
}

export default SamplePage;