import React, { useContext, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles.module.scss';
import { UserContext } from '../../contextProvider/usersProvider/userProvider';
import { User } from '../../contextProvider/usersProvider/types';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'azure',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserTableScreen: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState(-1);
  const [updatingRow, setUpdatingRow] = useState(-1);
  const classes = useStyles();
  const history = useHistory();
  const {
    createUser,
    deleteUser,
    getUsers,
    isLoadingUsers,
    selectedUser,
    setSelectedUser,
    updateUser,
    users,
  } = useContext(UserContext);
  useEffect(() => {
    async function loadData() {
      await getUsers!();
    }

    loadData();
  }, []);

  const removeUser = async (id: number) => {
    await deleteUser!(id);
    getUsers!();
    setSelectedRow(-1);
  }

  const updatingUser = () => {

  }

  const showUserDetails = () => {
    if (selectedUser) {
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              Name : {selectedUser!.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Email : {selectedUser!.email}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Phone : {selectedUser!.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' color='secondary' onClick={() => setSelectedUser!(null)}>Close</Button>
          </CardActions>
        </Card>
      ) 
    }
    return <div>Select User to Show it's Details</div>;
  };

  if (isLoadingUsers) {
    return <div> Loading ........... </div>;
  }

  return (
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email Address</TableCell>
            <TableCell align="center">Mobile Number</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users!.map((user: User, index: number) => (
            <TableRow
              key={user.id!.toString()}
              className={selectedRow === index ? styles.selectedTableRow : styles.regularTableRow}
            >
              <TableCell
                align="center"
                onClick={() => {
                  if (selectedRow === index) {
                    setSelectedRow(-1);
                    return;
                  }
                  setSelectedRow(index);
                }}
              >
                <TextField id="standard-basic" defaultValue={user.name} disabled={updatingRow !== user.id} />
              </TableCell>
              <TableCell
                align="center"
                onClick={() => {
                  if (selectedRow === index) {
                    setSelectedRow(-1);
                    return;
                  }
                  setSelectedRow(index);
                }}
              >
              <TextField id="standard-basic" defaultValue={user.email} disabled={updatingRow !== user.id} />
              </TableCell>
              <TableCell
                align="center"
                onClick={() => {
                  if (selectedRow === index) {
                    setSelectedRow(-1);
                    return;
                  }
                  setSelectedRow(index);
                }}
              >
              <TextField id="standard-basic" defaultValue={user.phone} disabled={updatingRow !== user.id} />
              </TableCell>
              <TableCell align="center" style={{ display: 'flex' , justifyContent: 'space-between'}}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setSelectedUser!(user);
                  }}
                >
                  Read
                </Button>
                <Button
                  variant="contained"
                  color='primary'
                  onClick={() => {
                    if (updatingRow > 0) {

                      setUpdatingRow(-1);
                      return;
                    }
                    setUpdatingRow(user.id!);
                  }}
                >
                  {updatingRow > 0 && updatingRow === user.id! ? 'Save' : 'Update'}
                </Button>
                <Button variant="contained" color='secondary' onClick={() => removeUser(user.id!)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button
        variant="contained"
        color='secondary'
        onClick={() => history.push('/new')}
      >
        Add User
      </Button>
    <div
      className={styles.cardConatiner}
    >
      {
        showUserDetails()
      }
    </div>
    </div>
  );
}

export default UserTableScreen;