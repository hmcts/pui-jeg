var types = require('./types');
var uuid = require('uuid/v4');
var moment = require('moment');

module.exports = [

  {
    id: 'LU17C87541',
    typeId: types.publiclaw.id,
    status: 'Final hearing',
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
        date: moment('2017-11-20 13:01'),
        title: 'New Direct Lodgement Registration',
        by: 'DLC Admin'
      },
      {
        id: uuid(),
        date: moment('2017-12-05 09:10'),
        title: 'Appeal marked as compliant',
        by: 'Tribunal Case Worker – Emily Oliver'
      },
      {
        id: uuid(),
        date: moment('2018-01-25 16:48'),
        title: 'Response submitted',
        by: 'DWP Appeals Officer'
      }
    ],
    parties: [
      {
        type: 'Applicant',
        org: 'Luton County Court',
      },
      {
        type: 'Respondent',
        org: 'Martins'
      }
    ]
  }

];