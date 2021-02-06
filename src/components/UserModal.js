import React from 'react';
import {inject, observer} from "mobx-react";
import {Button, Dialog, DialogContent, DialogTitle, Grid, Typography} from "@material-ui/core";
import { Field, Form } from 'react-final-form'
import TextFieldWrapper from "./Form/TextFieldWrapper";
import SelectWrapper from "./Form/SelectWrapper";
import DatePickerWrapper from "./Form/DatePickerWrapper";

@inject('userStore')
@observer
class UserModal extends React.Component {
  onSubmit = async (values) => {
    const { userStore } = this.props;

    try {
      await userStore.saveUpdateUser(values)
    } catch (e) {

    }
  }

  validate = values => {
    const error = {};
    if (!values.name) {
      Object.assign(error, {
        name: 'Field is required'
      })
    }

    if (!values.surname) {
      Object.assign(error, {
        surname: 'Field is required'
      })
    }

    if (!values.birthDate) {
      Object.assign(error, {
        birthDate: 'Field is required'
      })
    }

    if (!values.gender) {
      Object.assign(error, {
        gender: 'Field is required'
      })
    }

    if (values.married === undefined) {
      Object.assign(error, {
        married: 'Field is required'
      })
    }

    if (!values.job) {
      Object.assign(error, {
        job: 'Field is required'
      })
    }

    return error
  }

  render() {
    const { userStore } = this.props;
    return (
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={userStore.openModal}
        onClose={() => console.log("close")}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{userStore.currentUser ? 'Update' : 'Create'} User</DialogTitle>
        <DialogContent>
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            mutators={{

            }}
            initialValues={userStore.currentUser || {}}
            render={({ handleSubmit, values, mutators, valid, form }) => {
              return (
                <form id='createContract' onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item md={6} style={{ display: 'none' }}>
                      <Field
                        fullWidth
                        name={'id'}
                        component={TextFieldWrapper}
                        type='text'
                        label='ID'
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'name'}
                        component={TextFieldWrapper}
                        type='text'
                        label='Name'
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'surname'}
                        component={TextFieldWrapper}
                        type='text'
                        label='Surname'
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'job'}
                        component={SelectWrapper}
                        type='text'
                        placeholder='Job'
                        rowsData={[
                          { value: 'programmer', label: 'Propgrammer' },
                          { value: 'engineer', label: 'Engineer' },
                          { value: 'ceo', label: 'CEO' },
                          { value: 'cto', label: 'CTO' },
                        ]}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'birthDate'}
                        component={DatePickerWrapper}
                        native={false}
                        type="text"
                        label={'Birth Date'}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'married'}
                        component={SelectWrapper}
                        type='text'
                        placeholder='Married'
                        rowsData={[
                          { value: 1, label: 'YES' },
                          { value: 0, label: 'NO' }
                        ]}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name={'gender'}
                        component={SelectWrapper}
                        type='text'
                        placeholder='Gender'
                        rowsData={[
                          { value: 'M', label: 'M' },
                          { value: 'F', label: 'F' }
                        ]}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} style={{ marginTop: 20 }}>
                    <Grid item xs={6}>
                      <Button onClick={() => userStore.resetUser()} color={'secondary'} variant={'outlined'} fullWidth>Dismiss</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button type={'submit'} color={'primary'} variant={'outlined'} fullWidth>Save</Button>
                    </Grid>
                  </Grid>
                </form>
              )
            }}
          />
        </DialogContent>
      </Dialog>
    )
  }
}

export default UserModal;