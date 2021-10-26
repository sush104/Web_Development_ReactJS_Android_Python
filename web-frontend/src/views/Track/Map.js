import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./Data/skateboard-parks.json";
import "./Map.css";
import api from "../../api/api";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { margin, positions } from "@mui/system";
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



//console.log("Station in Map->",data)

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function App() {
  //const [data, setData] = React.useState(null);
  const position = [55.882309, -4.270780]
  const [lat, setlat] = React.useState(null);
  const [long, setLong] = React.useState(null);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  useEffect(() => {
    loadRelation()
}, [])

  const loadRelation = () => {
      api.getStation().then((res) => {
        //setlat(res.data.response[)
        //console.log("Station in Map->",res.data.response)
        const data = res.data.response.map((c) => {
          return {
            //station_id: c.station_id,
            address: c.address,
          };
          
        })
        const demo = data
        console.log("Station in Map->",data)
      });
    }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (

    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {position.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    <MapContainer center={position} zoom={100} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Bike
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  );
}
