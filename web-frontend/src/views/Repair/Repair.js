import React, { Component } from "react";
//import api from "../../api";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { TablePagination } from "@material-ui/core";
import { forwardRef } from "react";
import AddIcon from "@material-ui/icons/LibraryAdd";
import MenuItem from "@material-ui/core/MenuItem";

// import styled from "styled-components";

import MaterialTable from "material-table";
import {withRouter} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
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

const classes = makeStyles((theme) => ({
  root: {
    fontSize: "3rem",
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },

  labelling:{
    fontSize: "5rem"
  },
  table: {
    fontSize: "3rem",
  },
  pagination: {
    size: "lg",
  },
  f: {
    fontSize: "3rem",
  },
  tablecell: {
    fontSize: "200pt",
  },
  labelDisplayedRows: {
    fontSize: "24px",
  },
  footer: {
    backgroundColor: "blue",
    color: "green",
  },
  toolbar: {
    backgroundColor: "white",
  },
  caption: {
    color: "grey",
    fontSize: "18px",
  },
  selectIcon: {
    color: "blue",
  },
  select: {
    color: "grey",
    fontSize: "18px",
  },
  actions: {
    color: "blue",
    fontSize: "18px",
  },
  modal: {
    display: "flex",
  },
  radioinput:
  {
    marginright: 0,
  },
  
}));

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
    const { config,data } = this.state;
    const {
      //DatasetID,
      BikeName,
      BikeID,
      BikeLoc,
      BikeOwner,
      BikeProblem,
      RepairStatus,
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
        title: "Bike Name",
        field: "BikeName",
        value: BikeName,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Bike ID",
        field: "BikeID",
        value: BikeID,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Bike Location",
        field: "BikeLoc",
        value: BikeLoc,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Bike Owner",
        field: "BikeOwner",
        value: BikeOwner,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Bike Problem",
        field: "BikeProblem",
        value: BikeProblem,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Repair Status",
        field: "RepairStatus",
        value: RepairStatus,
        lookup: data.map((c) => (
          <MenuItem key={c.id} value={c.id}>
            {c.db}
          </MenuItem>
        )), 
        cellStyle: {
          fontSize: 16,
        },
      },
    ];

  
    return (

        <div>
            { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

      <div className= "">
      <MaterialTable
        paging={false}
        title="Repair Bikes"
        columns={columns}
        //data={config}
        data ={[
           {BikeName: 'MountainRainger',BikeID: 1, BikeLoc: 'UofG', BikeOwner: "Sushant", BikeProblem: "Punctured rear tyre", RepairStatus: "Repaired" },
        ]}
        // icons={{
        //   Add: forwardRef((props,ref,) => (
        //     <AddIcon {...props} ref={ref} />
        //   )),
        //  }}
          actions={[
            {
              icon: "loop",
              tooltip: "Connect",
              iconProps: { style: { color: "red" } },
              // onClick: (event, oldData) => {
              //   alert("You want to connect to " + oldData.ConfigurationName);
              //   console.log(oldData);
                // if (oldData.dbId == 3) {
                //   api.postgresConnection(oldData).then((res) => {
                //     // iconProps: { style: {color: "green" } }
                //     this.setState({
                //       connection: res.data,
                //     });
  
                //     console.log(connection);
                //     alert("Msg from server:Connected");
                //   });
                // } else {
                //   alert("Stay tunned for :" + oldData.ConfigurationName);
                // }
             // },
            },
          ]}
        components={{
          Pagination: (props) => (
            <TablePagination
              component="div"
              colSpan={props.colSpan}
              count={props.count}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              onChangePage={props.onChangePage}
              onChangeRowsPerPage={props.onChangeRowsPerPage}
              classes={{
                root: classes.footer,
                toolbar: classes.toolbar,
                caption: classes.caption,
                selectIcon: classes.selectIcon,
                select: classes.select,
                actions: classes.actions,
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
