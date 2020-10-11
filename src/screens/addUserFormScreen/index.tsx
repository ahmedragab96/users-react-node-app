import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { UserContext } from '../../contextProvider/usersProvider/userProvider';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { User } from '../../contextProvider/usersProvider/types';
import { useHistory } from 'react-router-dom';
import {
  validateEmail,
  validatePhone,
} from '../../helperFunctions/index';

const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError ] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const history = useHistory();
  const {
    createUser,
  } = useContext(UserContext);

  const addUser = async () => {
    if (emailError || phoneError) {
      return;
    }
    const newUser: User = {
      name,
      email,
      phone,
    };

    await createUser!(newUser);
    history.push('/');
  }

  return (
    <div className={styles.formContainer}>
      <h2> Add User Form</h2>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        variant="outlined"
        style={{
          width: '100%',
          margin: '25px 0',
        }}
      />
      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {  
          setEmail(event.target.value)
          if (!validateEmail(event.target.value)) {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
        }}
        variant="outlined"
        style={{
          width: '100%',
          margin: '25px 0',
        }}
        error={emailError}
        required
        helperText={emailError ? 'Please enter a valid email!' : null}
      />
      <TextField
        id="phone"
        label="Phone Number"
        value={phone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
          if (!validatePhone(event.target.value)) {
            setPhoneError(true);
          } else {
            setPhoneError(false);
          }
        }}
        variant="outlined"
        style={{
          width: '100%',
          margin: '25px 0',
        }}
        error={phoneError}
        required
        helperText={phoneError ? 'Please enter a valid phone number!' : null}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addUser}
      >
        Submit
      </Button>
    </div>
  );
}

export default AddUserScreen;