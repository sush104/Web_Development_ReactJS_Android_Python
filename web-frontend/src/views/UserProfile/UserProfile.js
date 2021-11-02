import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import api from "../../api/api";
import avatar from "assets/img/faces/marc.jpg";
import ls from 'local-storage'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};



const useStyles = makeStyles(styles);

export default function UserProfile() {

  
const [fname, setFName] = useState()
const [lname, setLName] = useState()
const [email, setEmail] = useState()
const [phone, setPhone] = useState()

useEffect(() => {

  const id = new FormData()
  id.append("id", ls.get('id'));
  api.operatorDetails(id).then((res) => {
    
    setFName(res.data.response.first_name)
    setLName(res.data.response.last_name)
    setEmail(res.data.response.email)
    setPhone(res.data.response.phone)
    //console.log("Pie",chartData)
  });
},[]);
  

  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4} align="center">
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Designation: Operator</h6>
              <h4 className={classes.cardTitle}>Name: {fname} {lname}</h4>
              <h5 className={classes.cardTitle}>Email: {email} </h5>
              <h5 className={classes.cardTitle}>Phone: {phone} </h5>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
