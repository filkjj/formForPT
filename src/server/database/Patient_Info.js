const { STRING } = require('sequelize');
const db = require('./db')

const Patient_Info = db.define("patient_info",{
    patientfirstName: {
        type: STRING
    },
    patientLastName : {
        type: STRING
    },
    patientDOB: {
        type: STRING
    },
    patientAddress : {
        type: STRING
    },
    patientAddressSecond : {
        type: STRING
    },
    patientCity : {
        type: STRING
    },
    patientState : {
        type: STRING
    },
    patientZip : {
        type: STRING
    },
    patientCity : {
        type: STRING
    },
    patientSSN : {
        type: STRING
    },
    patientSex : {
        type: STRING
    },
    patientAge : {
        type: STRING
    },
    patientMaritalStatus : {
        type: STRING
    },
    patientEmail : {
        type: STRING
    },
    patientOccupation : {
        type: STRING
    },
    patientWorkPhone : {
        type: STRING
    },
    patientHomePhone : {
        type: STRING
    },
    patientCellPhone : {
        type: STRING
    }
})

module.exports = Patient_Info