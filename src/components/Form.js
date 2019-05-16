import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../utils/validate';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)



let Form = props => {
    const { handleSubmit, pristine, submitting } = props;
    // console.log("props", props);
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    name="number_rupiah"
                    component={renderField}
                    label="Number of Rupiah" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting} onClick={validate}>Submit</button>
            </div>
        </form>
    )
}

Form = reduxForm({
    form: 'form',
    validate
})(Form);

// export default Form;
export default connect((state) => {
    return { formData: state }
})(Form)
