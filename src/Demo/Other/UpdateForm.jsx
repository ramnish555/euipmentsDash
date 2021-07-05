import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateForm = (props) =>{
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast.info('Updated Successfully....', { position: "bottom-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined,textStyle: {
    textAlign: 'center'
  }});

  let obj1={};
  let arr1=["","id","euip_name","euip_id","spec","department","dop","bill_date","cost","quip_status","unit_name","remarks","category"];
  let arr2 = props.list;
  for(let i=0; i<arr2.length; i++){
    if(arr2[i] == undefined){
        continue;
    }
    if(arr2[i] == null){
        arr2[i] = "";
    }
    if(arr1[i] == "dop" || arr1[i] == "bill_date"){
        arr2[i] = arr2[i].substring(0, 10);
    }
    obj1[arr1[i]] = arr2[i];
  }

  const [obj, setObj] = useState(obj1);
  const setValues = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if(name == "id"){
      setObj({...obj,id: value});
    }else if(name == "euip_name"){
      setObj({...obj,euip_name: value});
    }
    else if(name == "euip_id"){
      setObj({...obj,euip_id: value});
    }
    else if(name == "spec"){
      setObj({...obj,spec: value});
    }
    else if(name == "department"){
      setObj({...obj,department: value});
    }
    else if(name == "dop"){
      setObj({...obj,dop: value});
    }
    else if(name == "bill_date"){
      setObj({...obj,bill_date: value});
    }
    else if(name == "cost"){
      setObj({...obj,cost: value});
    }
    else if(name == "quip_status"){
      setObj({...obj,quip_status: value});
    }
    else if(name == "unit_name"){
      setObj({...obj,unit_name: value});
    }
    else if(name == "remarks"){
      setObj({...obj,remarks: value});
    }
    else if(name == "category"){
      setObj({...obj,category: value});
    }
  };

  const saveData = () => {
    console.log(obj);
    setShow(false);
    notify();
  }

  return (
    <>
      <Tooltip title={"Edit Record"}>
        <IconButton onClick={handleShow}>
          <EditIcon fontSize="small"/>
        </IconButton>
      </Tooltip>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Table>
              <tbody>
                <tr>
                  <td><TextField label="ID" name="id" value={obj["id"]} onChange={setValues}/></td>
                  <td><TextField label="Equipment Name" name="euip_name" value={obj["euip_name"]} onChange={setValues}/></td>
                  <td><TextField label="Equipment ID" name="euip_id" value={obj["euip_id"]} onChange={setValues}/></td>
                  <td><TextField label="Specification" name="spec" value={obj["spec"]} onChange={setValues}/></td>
                </tr>
                <tr>
                  <td>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="department-label">Department</InputLabel>
                      <Select labelId="department-label" id="department" name="department" value={obj["department"]} onChange={setValues}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={"OPD"}>OPD</MenuItem>
                        <MenuItem value={"R&M Store"}>R&M Store</MenuItem>
                        <MenuItem value={"CCU"}>CCU</MenuItem>
                        <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td><TextField label="Date Of Purchase" type="date" InputLabelProps={{shrink: true,}} name="dop" value={obj["dop"]} onChange={setValues}/></td>
                  <td><TextField label="Bill Date" type="date" InputLabelProps={{shrink: true,}} name="bill_date" value={obj["bill_date"]} onChange={setValues}/></td>
                  <td><TextField label="Cost Of Equipment" name="cost" value={obj["cost"]} onChange={setValues}/></td>
                </tr>
                <tr>
                  <td><TextField label="Equip Status" name="quip_status" value={obj["quip_status"]} onChange={setValues}/></td>
                  <td><TextField label="Unit Name" name="unit_name" value={obj["unit_name"]} onChange={setValues}/></td>
                  <td><TextField label="Equip Remarks" name="remarks" value={obj["remarks"]} onChange={setValues}/></td>
                  <td><TextField label="Category" name="category" value={obj["category"]} onChange={setValues} /></td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    </>
  );
}

export default UpdateForm;

