import React, { Component } from "react";
//import api from "../../api";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { TablePagination } from "@material-ui/core";
// import { forwardRef } from "react";
// import AddIcon from "@material-ui/icons/LibraryAdd";
// import MenuItem from "@material-ui/core/MenuItem";

// import styled from "styled-components";

import MaterialTable from "material-table";
import {withRouter} from 'react-router-dom';
//import makeStyles from "@material-ui/core/styles/makeStyles";
// const useStyles = makeStyles({
//   caption: {
//     color: "green",
//     padding: 8,
//     border: "1px dashed grey",
//     fontSize: "0.875rem",
//   },
//   toolbar: {
//     "& > p:nth-of-type(2)": {
//       fontSize: "1.25rem",
//       color: "red",
//       fontWeight: 600,
//     },
//   },
// });

// const classes = makeStyles((theme) => ({
//   root: {
//     fontSize: "3rem",
//     flexShrink: 0,
//     marginLeft: theme.spacing(2.5),
//   },

//   labelling:{
//     fontSize: "5rem"
//   },
//   table: {
//     fontSize: "3rem",
//   },
//   pagination: {
//     size: "lg",
//   },
//   f: {
//     fontSize: "3rem",
//   },
//   tablecell: {
//     fontSize: "200pt",
//   },
//   labelDisplayedRows: {
//     fontSize: "24px",
//   },
//   footer: {
//     backgroundColor: "blue",
//     color: "green",
//   },
//   toolbar: {
//     backgroundColor: "white",
//   },
//   caption: {
//     color: "grey",
//     fontSize: "18px",
//   },
//   selectIcon: {
//     color: "blue",
//   },
//   select: {
//     color: "grey",
//     fontSize: "18px",
//   },
//   actions: {
//     color: "blue",
//     fontSize: "18px",
//   },
//   modal: {
//     display: "flex",
//   },
//   radioinput:
//   {
//     marginright: 0,
//   },
  
// }));

// const Wrapper = styled.div`
//   padding: 0 40px 40px 40px;
// `;

class Repair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [],
      data: [],
      columns: [],
      connection: [],
      isLoading: true,
      isShowing: false,
      settype: '',
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });

    // await api.getAllConfigurations().then((res) => {
    //   this.setState({
    //     config: res.data,
    //     isLoading: false,
    //   });
    // });

    // await api.getdbdata().then((res) => {
    //   this.setState({
    //     data: res.data.map((c) => {
    //       return {
    //         id: c.dbID,
    //         db: c.dbType,
    //       };
    //     }),
    //   });
    // });
  };

  render() {
    const { config } = this.state;
    const {
      //DatasetID,
      ConfigurationName = "config",
      IP = "IP",
      Port = "Port",
      DBUserName = "DBUser",
      DBPassword = "DBPassword",
      DBName = "DBName",
      //CreatedBy,
      //dbId,
     
    } = this.state;

    // const payload = {
    //   DatasetID,
    //   ConfigurationName,
    //   IP,
    //   Port,
    //   DBUserName,
    //   DBPassword,
    //   DBName,
    //   CreatedBy,
    //   dbId,
    // };

    const columns = [
      {
        title: "Configuration Name",
        field: "ConfigurationName",
        value: ConfigurationName,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Host",
        field: "IP",
        value: IP,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Port",
        field: "Port",
        value: Port,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "DBUserName",
        field: "DBUserName",
        value: DBUserName,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "DBPassword",
        field: "DBPassword",
        value: DBPassword,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "DBName",
        field: "DBName",
        value: DBName,
        cellStyle: {
          fontSize: 16,
        },
      },

    //   {
    //     title: "DB Type",
    //     field: "dbId",
    //     value: dbId,
    //     lookup: data.map((c) => (
    //       <MenuItem key={c.id} value={c.id}>
    //         {c.db}
    //       </MenuItem>
    //     )), 
    //     cellStyle: {
    //       fontSize: 16,
    //     },
    //   },
    ];

    return (

        <div>
            { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

      <div className= "">
      <MaterialTable
        paging={false}
        title="Repair Bikes"
        columns={columns}
        data={config}
        components={{
          Pagination: (props) => (
            <TablePagination
              {...props}
              SelectProps={{
                style: {
                  fontSize: 20,
                },
              }}
            />
          ),
        }}
        options={{
          fontSize: { fontSize: "16px" },
          headerStyle: {
            backgroundColor: "#00acc1",
            color: "#f8f9fa",
            fontSize: "18px",
          },
        }}
        editable={{
          
          onRowAdd: () =>
			
            // api.insertConfig(newData).then((res) => {
            //   window.alert(`Configuration inserted successfully`);
            //   api.getAllConfigurations().then((res) => {
                this.setState({
                  //config: data,
                  isLoading: false,
                }),
            //   });
            // }),
          onRowUpdate: () =>
            // api.updateConfig(oldData.DatasetID, newData).then((res) => {
            //   window.alert(`Configuration Updated successfully`);
            //   api.getAllConfigurations().then((res) => {
                this.setState({
                  //config: data,
                  isLoading: false,
                }),
            //   });
            // }),
          onRowDelete: () =>
            // api.deleteConfigByPort(oldData.DatasetID).then((res) => {
            //   window.alert(`Configuration deleted successfully`);
            //   api.getAllConfigurations().then((res) => {
                this.setState({
                  //config: data,
                  isLoading: false,
                }),
            //   });
            // }),
        }}
      />
      </div>
               
    </div>
    );
  }
}

export default withRouter(Repair);
