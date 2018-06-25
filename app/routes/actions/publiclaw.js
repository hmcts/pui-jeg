var helpers = require('../helpers');


function getCaseActions(_case) {
	return [
		{
			href: `/app/cases/${_case.id}/make-decision`,
			text: 'Make decision'
		},
		{
			href: `/app/cases/${_case.id}/list-for-hearing`,
			text: 'List for hearing'
		}
	];
}


function viewCaseSummary(req, res) {

	var _case = helpers.getCase(req.session.cases, req.params.id);

	var pageObject = {
		_case: _case,
		success: req.session.success,
		casebar: helpers.getCaseBarObject(_case),
		caseActions: getCaseActions(_case),
		casenav: helpers.getCaseNavObject(_case),
		detailsRows: [],
		panelRows: [],
		recentEvents: helpers.getRecentEvents(_case)
	};

	pageObject.detailsRows.push([{ html: 'Parties' }, {html: helpers.getPartiesLine(_case)}]);
	pageObject.detailsRows.push([{ html: 'Case number' }, {html: _case.id}]);
	pageObject.detailsRows.push([{ html: 'Case type' }, {html: helpers.getCaseTypeLabel(_case)}]);
	pageObject.detailsRows.push([{ html: 'Court' }, {html: _case.court}]);

	res.render('app/case/publiclaw/summary', pageObject);

}


function viewMakeDecision(req, res) {

	var _case = helpers.getCase(req.session.cases, req.params.id);

	var pageObject = {
		casebar: helpers.getCaseBarObject(_case),
		caseActions: getCaseActions(_case)
	};

	res.render('app/case/publiclaw/make-decision', pageObject);

}


function viewListForHearing(req, res) {

	var _case = helpers.getCase(req.session.cases, req.params.id);

	var pageObject = {
		casebar: helpers.getCaseBarObject(_case),
		caseActions: getCaseActions(_case)
	};

	res.render('app/case/publiclaw/list-for-hearing', pageObject);

}


exports.viewCaseSummary = viewCaseSummary;
exports.viewMakeDecision = viewMakeDecision;
exports.viewListForHearing = viewListForHearing;