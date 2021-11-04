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
import TrackIcon from "@material-ui/icons/Router";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import MenuItem from "@material-ui/core/MenuItem";
import { alpha } from '@material-ui/core/styles'
import UserProfile from "views/UserProfile/UserProfile.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/faces/marc.jpg";
// import styled from "styled-components";

import MaterialTable from "material-table";
import {withRouter} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { times } from "chartist";
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

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [],
      data: [],
      dump: [],
      trip:[],
      columns: [],
      connection: [],
      isLoading: true,
      isShowing: false,
      settype: '',
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });

    
    await api.showActiveCycles().then((res) => {
      this.setState({
         config: res.data.response,
         isLoading: false,
      })
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
        dump: res.data.response.map((c) => {
          return {
            id: c.status_id,
            status: c.status,
          };
        }),
      });
      //console.log("Status->",res.data.response)
    });
  };

  render() {
    const { config, data ,dump, trip } = this.state;
    // console.log("dump data-> ",dump)
    // console.log("data data-> ",data)
    const {
      cycle_id,
      station_id,
      category,
      is_charging,
      battery_percentage,
      model_number,
      status_id,
      address,
      location_lat,
      location_long,
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
        editable: 'never',
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
        editable: 'onUpdate',
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Battery Percentage",
        field: "battery_percentage",
        value: battery_percentage,
        editable: 'onUpdate',
        cellStyle: {
          fontSize: 16,
        },
      },
      // {
      //   title: "Availability Status",
      //   field: "status_id",
      //   value: status_id,
      //   lookup: dump.map((d) => (
      //     <MenuItem key={d.id} value={d.id}>
      //       {d.status}
      //     </MenuItem>
      //   )),
      //   cellStyle: {
      //     fontSize: 16,
      //   },
      // },
      {
        title: "Station Name",
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

    // const alertMyRow = (selectedRow) => (
    //     // here i can request something on my api with selectedRow.id to get additional
    //     // datas which weren't displayed in the table
    //     alert(`Model: ${selectedRow.model_number}, Station: ${selectedRow.station_id}`)
    //   );
  
    return (
      <MaterialTable
        paging={false}
        //onRowClick={(evt, selectedRow) => alertMyRow(selectedRow)}
        title="Track Bike"
        columns={columns}
        data={config}
        // data ={[
        //    {BikeName: 'MountainRainger',BikeID: 1, BikeLoc: 'UofG', BikeOwner: "Sushant", BikeProblem: "Punctured rear tyre", RepairStatus: "Repaired" },
        // ]}
        detailPanel={[
            {
              icon: TrackIcon,  
              tooltip: 'Track Bike',
              render: (rowData) => {
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                    {
                      const {trip} = this.state;
                      const cycle_id = new FormData()
                      cycle_id.append("cycle_id", rowData.cycle_id);
                      for (var pair of cycle_id.entries()) {
                        console.log(pair[0]+ ', ' + pair[1]); 
                      }
                      api.showActiveTripDetails(cycle_id).then((res) => {
                          this.setState({
                            trip: res.data.response,
                            isLoading: true,
                          });
                      });
                    }
                    resolve()
                    }, 1000)
                  })
                return (
                  <div
                    style={{
                      fontSize: 100,
                      textAlign: 'center',
                      color: 'black',
                    }}
                  >
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4} align="center">
                            <Card profile>
                                    <CardBody profile>
                                    {/* <h6 className={classes.cardCategory}>{rowData.model_number}</h6> */}
                                    <h4 className={classes.cardTitle}>Cycle is currently on RENT</h4>
                                    <p className={classes.description}>
                                        Details Below:
                                    </p>
                                    <p className={classes.description}>
                                        Latitude: {trip.location_lat}
                                    </p>
                                    <p className={classes.description}>
                                        Longitude: {trip.location_long}
                                    </p>
                                    <p className={classes.description}>
                                        Trip Start Time: {new Date(trip.started_at).toString()}
                                    </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                  </div>
                )
              },
            },
        ]}
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
      />
      
    );
  }
}

export default withRouter(Track);
