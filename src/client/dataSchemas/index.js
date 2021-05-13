import * as yup from 'yup';

export const formPIISchema = yup.object({
    patientfirstName: yup.string()
        .required('Required'),
    patientLastName: yup.string()
        .required('Required'),
    patientDOB: yup.string()
        .length(10, 'Invalid Date')
        .required('Required'),
    patientAddress: yup.string()
        .required('Required'),
    patientAddressSecond: yup.string(),
    patientCity: yup.string()
        .required('Required'),
    patientState: yup.string()
        .required('Required'),
    patientZip: yup.number()
        .max(99999,'Invalid Zip')
        .min(501,'Invalid Zip'),
    patientAge: yup.number().required('Required'),
    patientSex: yup.string()
        .required('Required'),
    patientSSN: yup.string()
        .length(9, 'Invalid SSN')
        .required('Required'),
    patientMaritalStatus: yup.string(),
    patientEmail: yup.string()
        .email('Invalid Email')
        .required('Required'),
    patientCellPhone: yup.string()
        .length(10),
    patientHomePhone: yup.string()
        .length(10),
    patientWorkPhone: yup.string()
        .length(10),
    patientOccupation: yup.string(),
});

export const mappedPIISchema = {
    "patientfirstName": "First Name",
    "patientLastName": "Last Name",
    "patientDOB": "D.O.B",
    "patientAddress": "Address",
    "patientAddressSecond": "Address 2",
    "patientCity": "City",
    "patientState": "State",
    "patientZip": "Zip Code",
    "patientSSN": "Social Security #",
    "patientSex": "Sex",
    "patientAge": "Age",
    "patientMaritalStatus": "Marital Status",
    "patientEmail": "Email",
    "patientOccupation": "Occupation",
    "patientWorkPhone": "Work Phone",
    "patientHomePhone": "Home Phone",
    "patientCellPhone": "Cell Phone",
  }