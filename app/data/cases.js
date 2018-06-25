var types = require('./types');
var uuid = require('uuid/v4');
var moment = require('moment');

module.exports = [

  {
    id: 'LU17C87541',
    typeId: types.publiclaw.id,
    status: 'Interim Hearing',
    applicationDate: moment('2017-11-20 13:01'),
    lastAction: moment('2018-01-25 16:48'),
    court: 'Luton County Court and Family Court',
    documents: [{
      id: '1',
      label: 'A. Preliminary documents'
    }, {
      id: '2',
      label: 'B. Application and orders'
    }, {
      id: '3',
      label: 'C. Statements and affidavits'
    }, {
      id: '4',
      label: 'D. Care plans'
    }, {
      id: '5',
      label: 'E. Expert’s reports'
    }, {
      id: '6',
      label: 'F. Other documents'
    }, {
      id: '7',
      label: 'G. Police documents'
    }, {
      id: '8',
      label: 'H. Medical notes'
    }],
    events: [
      {
        id: uuid(),
        date: moment('2018-05-25 12:01'),
        title: 'Draft care order created',
        by: 'Luton Local Authority Legal Representative (Enda Smith)'
      },
      {
        id: uuid(),
        date: moment('2018-05-22 08:00'),
        title: 'Directions completed',
        by: 'system update'
      },
      {
        id: uuid(),
        date: moment('2018-05-21 08:00'),
        title: 'Interim hearing scheduled for...',
        by: 'system update'
      },
      {
        id: uuid(),
        date: moment('2018-05-20 12:42'),
        title: 'Standard directions issued',
        by: 'Judge Prita Shah'
      },
      {
        id: uuid(),
        date: moment('2018-05-19 15:12'),
        title: 'Application for care order submitted',
        by: 'Luton Borough Council (Enda Smith)'
      }
    ],
    parties: [
      {
        type: 'Applicant',
        org: 'Luton Borough Council',
      },
      {
        type: 'Respondent',
        org: 'Martins'
      }
    ]
  }

];