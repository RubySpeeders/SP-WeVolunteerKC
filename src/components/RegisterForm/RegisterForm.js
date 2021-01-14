import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI imports
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Chip,
  Grid,
  Box,
} from '@material-ui/core';

class RegisterForm extends Component {
  state = {
    first_name: '',
    middle_name: '',
    last_name: '',
    birth_date: '2000-01-01',
    sex: '',
    race: '',
    email: '',
    phone_number: '',
    zip_code: '',
    company: '',
    job_title: '',
    education_level: [],
    username: '',
    password: '',
  };

  //go to next page of registration
  handleNextClick = (e) => {
    //saves part 1 of registration to a reducer

    this.props.dispatch({
      type: 'UPDATE_USER',
      payload: this.state,
    });
    //go to the next page of registration
    this.props.history.push('/registration/page/2');
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const level = this.props.store.dropdown.educationReducer.map(
      (item, index) => {
        return (
          <MenuItem value={item.id} key={index}>
            {item.education_label}
          </MenuItem>
        );
      }
    );
    const race = this.props.store.dropdown.raceReducer.map((item, index) => {
      return (
        <MenuItem value={item.id} key={index}>
          {item.race_label}
        </MenuItem>
      );
    });
    const sex = this.props.store.dropdown.sexReducer.map((item, index) => {
      return (
        <MenuItem value={item.id} key={index}>
          {item.sex_label}
        </MenuItem>
      );
    });
    return (
      <Container>
        <Grid container justify="center">
          <Grid item>
            <form className="opacity" onSubmit={this.handleNextClick}>
              <Typography variant="h3" component="h2" gutterBottom>
                Registration
              </Typography>
              {this.props.store.errors.registrationMessage && (
                <h3 className="alert" role="alert">
                  {this.props.store.errors.registrationMessage}
                </h3>
              )}
              <Typography variant="h6" component="h3" gutterBottom>
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="first name"
                        type="text"
                        name="first_name"
                        value={this.state.first_name}
                        // required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('first_name')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="middle name/initial"
                        type="text"
                        name="middle_name"
                        value={this.state.middle_name}
                        // required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('middle_name')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="last name"
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        // required
                        variant="outlined"
                        onChange={this.handleInputChangeFor('last_name')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      fullWidth
                      id="birth_date"
                      // label="birth date"
                      type="date"
                      placeholder="birth date"
                      value={this.state.birth_date}
                      onChange={this.handleInputChangeFor('birth_date')}
                      // defaultValue="2000-01-01"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Box mb={2}>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <InputLabel id="sex">Sex</InputLabel>
                      <Select
                        labelId="sex"
                        id="sex"
                        value={this.state.sex}
                        onChange={this.handleInputChangeFor('sex')}
                        label="sex"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {sex}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box mb={2}>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <InputLabel id="Race">Race</InputLabel>
                      <Select
                        labelId="race"
                        id="race"
                        value={this.state.race}
                        onChange={this.handleInputChangeFor('race')}
                        label="race"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {race}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      fullWidth
                      placeholder="create username"
                      type="text"
                      name="username"
                      variant="outlined"
                      size="small"
                      value={this.state.username}
                      // required
                      onChange={this.handleInputChangeFor('username')}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('email')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="phone number"
                        // type="number"
                        name="phone_number"
                        value={this.state.phone_number}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('phone_number')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="zipcode"
                        type="number"
                        name="zip_code"
                        value={this.state.zip_code}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('zip_code')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="company"
                        type="text"
                        name="company"
                        value={this.state.company}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('company')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <div>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="job title"
                        type="text"
                        name="job_title"
                        value={this.state.job_title}
                        variant="outlined"
                        onChange={this.handleInputChangeFor('job_title')}
                      />
                    </div>
                  </Box>
                  <Box mb={2}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="education_level">
                        Highest Level of Education
                      </InputLabel>
                      <Select
                        // style={{
                        //   border: 'solid grey',
                        // }}
                        labelId="education_level"
                        id="education_level"
                        multiple
                        value={this.state.education_level}
                        onChange={this.handleInputChangeFor('education_level')}
                        // input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                          <div>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </div>
                        )}
                      >
                        {level}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box mb={2}>
                    <TextField
                      fullWidth
                      placeholder="create password"
                      type="password"
                      name="password"
                      variant="outlined"
                      size="small"
                      value={this.state.password}
                      // required
                      onChange={this.handleInputChangeFor('password')}
                    />
                  </Box>
                </Grid>
              </Grid>
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  // name="submit"
                  // value="Register"
                >
                  Next
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterForm));
