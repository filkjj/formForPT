import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { formPIISchema, mappedPIISchema } from '../dataSchemas';
import { Button, TextField } from "@material-ui/core"
import axios from 'axios'

export const InitialPII = () =>{


    const piiInfoObj = Object.keys(mappedPIISchema);

    const formik = useFormik({
        initialValues:{
            patientfirstName: '',
            patientLastName: '',
            patientDOB: '',
            patientAddress: '',
            patientAddressSecond: '',
            patientCity: '',
            patientState: '',
            patientZip: 10001,
            patientAge: 0,
            patientSex: '',
            patientSSN: '',
            patientMaritalStatus: '',
            patientEmail: '',
            patientCellPhone: '',
            patientHomePhone: '',
            patientWorkPhone: '',
            patientOccupation: '',
        },
        onSubmit:async (values)=>{
            await axios.post('/newIntakeData',values);
        },
        validationSchema:formPIISchema
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                {piiInfoObj.map(ele=>{
                    return(
                        <TextField
                            fullWidth
                            id={ele}
                            name={ele}
                            label={mappedPIISchema[ele]}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched[ele] && Boolean(formik.errors[ele])}
                            helperText={formik.touched[ele] && formik.errors[ele]}
                        />
                    ) 
                } )}
                <Button color='primary' variant='contained' fullWdith type="submit">
                    Next Form
                </Button>
            </form>
        </div>
    )
}