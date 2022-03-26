export default {
  main_layout: {
    button: {
      login: 'Login',
    },
  },
  index: {
    application: 'Start filling form',
  },
  login: {
    alert: {
      success: 'successfully login',
    },
    label: {
      email: 'Email',
      password: 'Password',
    },
    error: {
      empty: 'This field is required',
      email: 'Invalid email',
    },
    button: {
      submit: 'Login',
      register: 'register',
    },
  },
  register: {
    alert: {
      success: 'registered successfully',
    },
    label: {
      email: 'Email',
      password: 'Password',
      confirm_password: 'Confirm password',
    },
    hint: {
      password:
        'Password must contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 special character',
    },
    error: {
      empty: 'This field is required',
      email: 'Invalid email',
      password: 'Invalid password',
      password_match: 'Password does not match',
    },
    button: {
      submit: 'สมัครสมาชิก',
    },
  },
  application: {
    firstName: 'First name',
    lastName: 'Last name',
    dob: 'Date of birth',
    idCard: 'ID card number',
    passport: {
      title: 'Passport',
      description: 'Information about your passport',
      number: 'Passport number',
      expiredDate: 'Expiration date',
    },
    selfImage: 'Your photo (on white background)',
    housingDocument: 'Housing docuemnt',
    termAndCond: 'I accept the term and condition',
    error: {
      empty: 'Please type something',
      length: 'Please fill in to certain length',
      upload: 'ประเภทของไฟล์ไม่ถูกต้อง',
    },
    close: 'Close',
    submit: 'Submit',
    reset: 'Reset',
    save: 'Save',
    submitted: 'Submitted',
    failToSubmit: 'You need to accept the license and terms first',
  },
};
