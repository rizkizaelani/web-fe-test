const validate = values => {
    const errors = {}

    if (!values.number_rupiah) {
        errors.number_rupiah = 'Required'
    } else if (/^[0-9]+\,[0-9]+$/.test(values.number_rupiah)) {

        // if number = 17,500 (invalid separator)
        errors.number_rupiah = 'invalid separator';

    } else if (/^[0-9]+\s[0-9]+$/.test(values.number_rupiah)) {

        // if number = 2 500(invalid separator)
        errors.number_rupiah = 'invalid separator';

    } else if (/^[0-9]+\s[a-zA-Z]{2}$/.test(values.number_rupiah)) {

        // if number = 3000 Rp (valid character in wrong position)
        errors.number_rupiah = 'valid character in wrong position';

    } //else if (!/^[0-9]+\.[0-9]+$/.test(values.number_rupiah) || !/^[a-zA-Z]{2}\[0-9]+$/.test(values.number_rupiah) || !/^[a-zA-Z]{2}\[0-9]+\.[0-9]+\,\[0-9]+$/.test(values.number_rupiah)) {

    // if number != 18.215
    // errors.number_rupiah = 'invalid input (example : )';

    //} //else if (!/^[a-zA-Z]{2}\[0-9]+$/.test(values.number_rupiah)) {

    //     // if number != Rp17500
    //     errors.number_rupiah = 'invalid input (example : Rp17500)';

    // } else if (!/^[a-zA-Z]{2}\[0-9]+\.[0-9]+\,\[0-9]+$/.test(values.number_rupiah)) {

    //     // if number != Rp17.500,00
    //     errors.number_rupiah = 'invalid input (example : Rp17.500,00)';

    // }

    return errors

}

export default validate;