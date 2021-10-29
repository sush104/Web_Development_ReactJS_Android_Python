import React, { Component } from "react";
import api from "../../api/api";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { TablePagination } from "@material-ui/core";
import AddIcon from "@material-ui/icons/LibraryAdd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import MenuItem from "@material-ui/core/MenuItem";
import { alpha } from '@material-ui/core/styles'

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [],
      data: [],
      dump: [],
      columns: [],
      connection: [],
      isLoading: true,
      isShowing: false,
      settype: '',
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getCycle().then((res) => {
      this.setState({
        config: res.data.response,
        isLoading: false,
      });
      //console.log(res.data.response)
    });
    
    await api.getStation().then((res) => {
      this.setState({
        data: res.data.response.map((c) => {
          return {
            id: c.station_id,
            address: c.address,
          };
        }),
      });
      //console.log("Station->",res.data.response)
    });

    await api.getStatus().then((res) => {
      this.setState({
        demo: res.data.response.map((c) => {
          return {
            status_id: c.status_id,
            status: c.status,
          };
        }),
      });
      //console.log("status->",res.data.response)
    });
    await api.getStatus().then((res) => {
      this.setState({
        dump: res.data.response.map((c) => {
          return {
            id: c.status_id,
            status: c.status,
          };
        }),
      });
      //console.log("Station->",res.data.response)
    });
  };

  render() {
    const { config, data ,dump } = this.state;
    console.log("dump data-> ",dump)
    console.log("data data-> ",data)
    const {
      cycle_id,
      station_id,
      category,
      is_charging,
      battery_percentage,
      model_number,
      status_id,
    } = this.state;

    const payload = {
      cycle_id,
      station_id,
      category,
      is_charging,
      battery_percentage,
      model_number,
      status_id,
    };

    const columns = [
      {
        title: "Cycle Model No",
        field: "model_number",
        value: model_number,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Cycle category",
        field: "category",
        value: category,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Charging Status",
        field: "is_charging",
        value: is_charging,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Battery Percentage",
        field: "battery_percentage",
        value: battery_percentage,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Availability Status",
        field: "status_id",
        value: status_id,
        editable: 'onAdd',
        lookup: dump.map((d) => (
          <MenuItem key={d.id} value={d.id}>
            {d.status}
          </MenuItem>
        )),
        cellStyle: {
          fontSize: 16,
        },
      },
      // {
      //   title: "Status Id",
      //   field: "status_id",
      //   value: status_id,
      //   cellStyle: {
      //     fontSize: 16,
      //   },
      // },
      // {
      //   title: "Status",
      //   field: "status_id",
      //   value: status_id,
      //   lookup: dump.map((c) => (
      //     <MenuItem key={c.status_id} value={c.status_id}>
      //       {c.status}
      //     </MenuItem>
      //   )),
      //   cellStyle: {
      //     fontSize: 16,
      //   },
      // },
      // {
      //   title: "Station Id",
      //   field: "station_id",
      //   value: station_id,
      //   cellStyle: {
      //     fontSize: 16,
      //   },
      // },
      {
        title: "Move Station",
        field: "station_id",
        value: station_id,
        lookup: data.map((c) => (
          <MenuItem key={c.id} value={c.id}>
            {c.address}
          </MenuItem>
        )), 
        cellStyle: {
          fontSize: 16,
        },
      },
    ];

  
    return (

      <MaterialTable
        paging={false}
        title="Dashboard"
        columns={columns}
        data={config}
        // data ={[
        //    {BikeName: 'MountainRainger',BikeID: 1, BikeLoc: 'UofG', BikeOwner: "Sushant", BikeProblem: "Punctured rear tyre", RepairStatus: "Repaired" },
        // ]}
        icons={{
          Add: props => (
            <div ref={AddIcon}>
              <i className="fa fa-plus" />
            </div>
          ),
          Edit: props => (
            <div ref={EditIcon}>
              <i className="fa fa-pencil-alt"></i>
            </div>
          ),
          Delete: props => (
            <div ref={DeleteIcon}>
              <i className="fa fa-trash"></i>
            </div>
          ),
          Clear: props => (
            <div ref={CancelIcon}>
              <i className="fa fa-times"></i>
            </div>
          ),
          Search: props => (
            <div ref={SearchIcon}>
              <i className="fa fa-search"></i>
            </div>
          ),
          Check: props => (
            <div ref={Check}>
              <i className="fa fa-check"></i>
            </div>
          ),
        }}
          // actions={[
          //   {
          //     icon: "loop",
          //     tooltip: "Connect",
          //     iconProps: { style: { color: "red" } },
          //     // onClick: (event, oldData) => {
          //     //   alert("You want to connect to " + oldData.ConfigurationName);
          //     //   console.log(oldData);
          //       // if (oldData.dbId == 3) {
          //       //   api.postgresConnection(oldData).then((res) => {
          //       //     // iconProps: { style: {color: "green" } }
          //       //     this.setState({
          //       //       connection: res.data,
          //       //     });
  
          //       //     console.log(connection);
          //       //     alert("Msg from server:Connected");
          //       //   });
          //       // } else {
          //       //   alert("Stay tunned for :" + oldData.ConfigurationName);
          //       // }
          //    // },
          //   },
          // ]}
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
          sorting: false,
          
        }}
        editable={{
          onRowAdd: (newData, details = new FormData()) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
            {
              details.append("station_id", newData.station_id);
              details.append("category", newData.category);
              details.append("is_charging", newData.is_charging);
              details.append("battery_percentage", newData.battery_percentage);
              details.append("model_number", newData.model_number);
              details.append("status_id", newData.status_id);
              // for (var pair of details.entries()) {
              //   console.log(pair[0]+ ', ' + pair[1]); 
              // }
              api.addCycle(details).then((res) => {
                api.getCycle().then((res) => {
                  this.setState({
                    config: res.data.response,
                    isLoading: true,
                  });
                });
                window.alert("Added")
              });
            }
            resolve()
            }, 1000)
          }),
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
          onRowDelete: (oldData, id = new FormData()) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
              {
                id.append("cycle_id", oldData.cycle_id);
                console.log(id);
                api.deleteCycle(id).then((res) => {
                  api.getCycle().then((res) => {
                    this.setState({
                      config: res.data.response,
                      isLoading: true,
                    });
                  });
                  window.alert("Deleted")
                });
              }
              resolve()
              }, 1000)
            }),
            //oldData.append('cycle_id', oldData.cycle_id)
            //id = new FormData()
            //id.append('cycle_id', oldData.cycle_id)
            
        }}
      />
    );
  }
}

export default withRouter(Dashboard);
