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
      columns: [],
      connection: [],
      isLoading: true,
      isShowing: false,
      settype: '',
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });
  };

  render() {
    const { config} = this.state;
    //console.log("dump data-> ",dump)
    const {
      first_name,
      last_name,
      email,
      phone,
      hashed_password
    } = this.state;

    const columns = [
      {
        title: "Operator First Name",
        field: "first_name",
        value: first_name,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Operator Last Name",
        field: "last_name",
        value: last_name,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Operator Email",
        field: "email",
        value: email,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Operator Contact Number",
        field: "phone",
        value: phone,
        cellStyle: {
          fontSize: 16,
        },
      },
      {
        title: "Operator Password",
        field: "hashed_password",
        value: hashed_password,
        cellStyle: {
          fontSize: 16,
        },
      },
    ];
    return (

      <MaterialTable
        paging={false}
        title="Add Operator"
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
              details.append("first_name", newData.first_name);
              details.append("last_name", newData.last_name);
              details.append("email", newData.email);
              details.append("phone", newData.phone);
              details.append("hashed_password", newData.hashed_password);
              // for (var pair of details.entries()) {
              //   console.log(pair[0]+ ', ' + pair[1]); 
              // }
              api.addOperator(details).then((res) => {
                window.alert("Added")
              });
            }
            resolve()
            }, 1000)
          }),
          onRowDelete: (oldData, id = new FormData()) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
              {
                id.append("cycle_id", oldData.cycle_id);
                //console.log(id);
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
        }}
      />
    );
  }
}

export default withRouter(Dashboard);
