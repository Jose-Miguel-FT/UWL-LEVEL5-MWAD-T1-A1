import React from 'react';

function MedicalTreatment(props) {
  return (
    <div>
      <p>
        Treat ID: {props.medicalTreatment.treatId}
        <br />
        Treat Course ID: {props.medicalTreatment.treatCourseId}
        <br />
        Type: {props.medicalTreatment.type}
        <br />
        Category: {props.medicalTreatment.category}
        <br />
        Name: {props.medicalTreatment.name}
        <br />
        Start Date: {props.medicalTreatment.startDate}
      </p>
    </div>
  );
}

export default MedicalTreatment;
