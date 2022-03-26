export default {
  main_layout: {
    button: {
      login: 'เข้าสู่ระบบ',
    },
  },
  index: {
    button: {
      application: 'เริ่มกรอกฟอร์ม',
    },
  },
  login: {
    alert: {
      success: 'เข้าสู่ระบบสำเร็จ',
    },
    label: {
      email: 'อีเมล์',
      password: 'รหัสผ่าน',
    },
    error: {
      empty: 'กรุณากรอกข้อมูล',
      email: 'รูปแบบอีเมล์ไม่ถูกต้อง',
    },
    button: {
      submit: 'เข้าสู่ระบบ',
      register: 'สมัครสมาชิก',
    },
  },
  register: {
    alert: {
      success: 'สมัครสมาชิกสำเร็จ',
    },
    label: {
      email: 'อีเมล์',
      password: 'รหัสผ่าน',
      confirm_password: 'ยืนยันรหัสผ่าน',
    },
    hint: {
      password:
        'รหัสผ่านจะต้องประกอบด้วย ตัวอักษรเล็ก ตัวอักษรใหญ่ ตัวเลข อักขระพิเศษ และจำนวนมากกว่า 8 ตัวอักษร',
    },
    error: {
      empty: 'กรุณากรอกข้อมูล',
      email: 'รูปแบบอีเมล์ไม่ถูกต้อง',
      password: 'รหัสผ่านไม่ถูกต้อง',
      password_match: 'รหัสผ่านไม่เหมือนกัน',
    },
    button: {
      submit: 'สมัครสมาชิก',
    },
  },
  application: {
    firstName: 'ชื่อ',
    lastName: 'นามสกุล',
    dob: 'วันเดือนปีเกิด',
    idCard: 'เลขบัตรประชาชน',
    passport: {
      title: 'พาสปอร์ต',
      description: 'ข้อมูลเกี่ยวพาสปอร์ต',
      number: 'เลขที่พาสปอร์ต',
      expiredDate: 'วันหมดอายุ',
    },
    selfImage: 'รูปภาพของคุณ (พื้นหลังสีขาว)',
    housingDocument: 'ทะเบียนบ้าน',
    termAndCond: 'ฉันยอมรับในข้อตกลง',
    error: {
      empty: 'กรุณากรอกข้อมูล',
      length: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      upload: 'ประเภทของไฟล์ไม่ถูกต้อง',
    },
    close: 'ปิด',
    submit: 'ส่ง',
    reset: 'ล้าง',
    save: 'บันทึก',
    submitted: 'ส่งสำเร็จ',
    failToSubmit: 'กรุณายอมรับเงื่อนไขก่อนส่ง',
  },
};
