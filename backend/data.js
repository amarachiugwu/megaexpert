import bcrypt from 'bcryptjs';

const data = {

    users: [
      {
        name: 'Basir',
        email: 'admin@example.com',
        phone: '09056545456',
        country: 'Nigeria',
        currency: 'NGN',
        occupation: 'Trader',
        referral: '',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
      },
      {
        name: 'John',
        email: 'john@example.com',
        phone: '08059045456',
        country: 'South Africa',
        currency: 'RAND',
        occupation: 'Investor',
        referral: '',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false
      }
    ],
  };
  export default data;