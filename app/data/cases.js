var caseTypes = require('./case-types');
var uuid = require('uuid/v4');

module.exports = [
  {
    id: 'BV18D00150',
    userID: 1,
    typeId: caseTypes.divorce.id,
    parties: [
      {
        type: 'Petitioner',
        firstName: 'David',
        lastName: 'Francis',
        representative: {
          name: 'Clive Walters',
          role: 'Solicitor',
          company: 'Chadwick and Walters'
        }
      },
      {
        type: 'Respondent',
        firstName: 'Susan',
        lastName: 'Francis',
        representative: {
          name: 'David Jones',
          role: 'Solicitor',
          company: 'Chadwick and Walters'
        }
      }
    ],
    status: 'Consider decree nisi',
    reason: 'Separated for 2 years and consent',
    applicationDate: '11 Jan 2018',
    documents: '6 Docs (8 pages)',
    lastAction: '22 Jan 2018',
    events: [
      {
        id: 1,
        date: '27 February 2018',
        time: '1:01pm',
        event: 'Application for decree nisi received',
        actionBy: 'Petitioner (D. Francis)',
        files: [
          {
            id: 1,
            name: 'Application for decree nisi',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (S. Francis)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (D . Francis)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]

  },

  {
    id: 'BV18D00151',
    userID: 1,
    typeId: caseTypes['financial-remedy'].id,
    parties: [
      {
        type: 'Petitioner',
        firstName: 'William',
        lastName: 'Sutton',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      },
      {
        type: 'Respondent',
        firstName: 'Fran',
        lastName: 'Sutton',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      }
    ],
    status: 'Draft concent order',
    reason: 'Separated for 2 years and consent',
    applicationDate: '23 Jan 2018',
    documents: '2 Docs (2 pages)',
    lastAction: '16 Feb 2018',
    petitioner: '',
    respondent: '',
    events: [
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (F. Sutton)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '75KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '45KB',
            pages: '1 page'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (W . Sutton)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]
  },

  {
    id: 'BV18D00152',
    userID: 1,
    typeId: caseTypes['financial-remedy'].id,
    parties: [
      {
        type: 'Petitioner',
        firstName: 'Rowena',
        lastName: 'Miller',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      },
      {
        type: 'Respondent',
        firstName: 'David',
        lastName: 'Miller',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      }
    ],
    status: 'Draft concent order',
    reason: 'Separated for 2 years and consent',
    applicationDate: '23 Jan 2018',
    documents: '2 Docs (2 pages)',
    lastAction: '16 Feb 2018',
    petitioner: '',
    respondent: '',
    events: [
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (F. Sutton)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (W . Sutton)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]
  },

  {
    id: 'BV18D00153',
    userID: 1,
    typeId: caseTypes.divorce.id,
    parties: [
      {
        type: 'Petitioner',
        firstName: 'Thomas',
        lastName: 'Jones',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      },
      {
        type: 'Respondent',
        firstName: 'Victoria',
        lastName: 'Jones',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      }
    ],
    status: 'Consider decree nisi',
    reason: 'Separated for 2 years and consent',
    applicationDate: '23 Jan 2018',
    documents: '3 Docs (8 pages)',
    lastAction: '16 Feb 2018',
    petitioner: '',
    respondent: '',
    events: [
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (F. Sutton)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (W . Sutton)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]
  },

  {
    id: 'BV18D00154',
    userID: 1,
    typeId: caseTypes['financial-remedy'].id,
    parties: [
      {
        type: 'Petitioner',
        firstName: 'Edwina',
        lastName: 'Skinner',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      },
      {
        type: 'Respondent',
        firstName: 'Paul',
        lastName: 'Skinner',
        representative: {
          name: '',
          role: '',
          company: ''
        }
      }
    ],
    status: 'Consider decree nisi',
    reason: 'Separated for 2 years and consent',
    applicationDate: '16 Feb 2018',
    documents: '4 Docs (8 pages)',
    lastAction: '16 Feb 2018',
    petitioner: '',
    respondent: '',
    events: [
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (F. Sutton)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (W . Sutton)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]
  },

  {
    id: 'CO18D00150',
    userID: 1,
    typeId: caseTypes.sscs.id,
    rounds: [{
      id: uuid(),
      dateSent: null,
      questions: [{
        id: uuid(),
        subject: 'How do you do your shopping?',
        body: 'Explain how you do your shopping. Include information about how often you go to the shops, how you get there and how you get your food from the shops to your home.',
        author: 'Judge Prita Shah',
        dateAdded: new Date(),
        attachments: [],
        response: null
      }, {
        id: uuid(),
        subject: 'How you prepare your food?',
        body: 'Explain how you prepare your meals. Include information about the types of meals you eat, how you prepare them and whether there are any tasks in the kitchen you need assistance with.',
        author: 'Judge Prita Shah',
        dateAdded: new Date(),
        attachments: [],
        response: null
      }]
    },{
      id: uuid(),
      dateSent: new Date(),
      questions: [{
        id: uuid(),
        subject: 'How you wash yourself?',
        body: 'Explain how you wash yourself. Include information about whether you usually bath or shower.',
        author: 'Judge Prita Shah',
        dateAdded: new Date(),
        attachments: [],
        response: {
          author: 'Appellant',
          date: new Date(),
          body: '<p>I have a walk-in bath and a shower but I don’t use the shower since the accident because I can’t put my arms above my head and it makes it painful.</p>'
        }
      }]
    }],
    parties: [
      {
        type: 'Appellant',
        firstName: 'Alan',
        lastName: 'Jones',
        representative: null
      },
      {
        type: 'Respondent',
        org: 'DWP',
        office: '3',
        email: 'dwp@dwp.com',
        phone: '01838 787 637',
        decisionMaker: {
          firstName: 'Denise',
          lastName: 'Okenwe'
        },
        presentingOfficer: {
          firstName: 'Claire',
          lastName: 'Potter'
        }
      }
    ],
    status: 'Unknown',
    applicationDate: '11 Jan 2018',
    documents: '6 Docs (8 pages)',
    lastAction: '22 Jan 2018',
    urgent: false,
    benefit: 'PIP',
    tribunalCentre: 'Fox Court',
    requirements: 'Hearing loop required',
    events: [
      {
        id: 1,
        date: '27 February 2018',
        time: '1:01pm',
        event: 'Application for decree nisi received',
        actionBy: 'Petitioner (D. Francis)',
        files: [
          {
            id: 1,
            name: 'Application for decree nisi',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 2,
        date: '24 February 2018',
        time: '3:22pm',
        event: 'Acknowledgement of service by the court',
        actionBy: 'Respondent (S. Francis)',
        files: [
          {
            id: 1,
            name: 'Aknowledgement of service',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 3,
        date: '18 February 2018',
        time: '1:32pm',
        event: 'Court issues petition to the respondent',
        actionBy: 'Court',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      },
      {
        id: 4,
        date: '16 February 2018',
        time: '2:10pm',
        event: 'Application for divorce submitted',
        actionBy: 'Petitioner (D . Francis)',
        files: [
          {
            id: 1,
            name: 'Petition for divorce',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          },
          {
            id: 2,
            name: 'Marriage certificate',
            url: '#',
            type: 'PDF',
            size: '123KB',
            pages: '3 pages'
          }
        ]
      }
    ]
  }

];