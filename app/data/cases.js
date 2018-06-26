var types = require('./types');
var uuid = require('uuid/v4');
var moment = require('moment');

module.exports = [

  {
    id: 'LU17C87541',
    typeId: types.publiclaw.id,
    status: 'Interim Hearing',
    applicationDate: moment('2018-06-05 13:01'),
    lastAction: moment('2018-06-26 12:01'),
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
        date: moment('2018-06-26 12:01'),
        title: 'Draft care order created',
        by: 'Luton Borough Council (Enda Smith)'
      },
      {
        id: uuid(),
        date: moment('2018-06-26 08:00'),
        title: 'Directions completed',
        by: 'System update'
      },
      {
        id: uuid(),
        date: moment('2018-06-08 08:18'),
        title: 'Case management hearing scheduled',
        by: 'Scheduling and listings'
      },
      {
        id: uuid(),
        date: moment('2018-06-07 12:42'),
        title: 'Standard directions issued',
        by: 'Terry Hall'
      },
      {
        id: uuid(),
        date: moment('2018-06-05 13:01'),
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