import axios from 'axios';

const BASEURL = 'http://graphql2.docsonsite.com/graphql_session_relay.cfm';
const AUTHTOKEN = '5F3152427FC2E8D83C89639C4FBFF14D4CE88B63E9172DAF78A315E90374866CDE90852922E930A00138A2196A3759949173416AF2BB887CC8AB0A95EAAE0FE1';

export function getWriteboardsInCF() {
	return axios({
		method: 'POST',
		url: `${BASEURL}/?action=getWriteboards`,
		headers: {
			'AuthToken': AUTHTOKEN
		}
	});
}

export function addWriteboardInCF(data) {
	return axios({
		method: 'POST',
		url: `${BASEURL}/?action=addWriteboard&title=${data.title}&content=${data.content}&deleted=${data.archived}`,
		headers: {
			'AuthToken': AUTHTOKEN
		}
	});
}

export function editWriteboardInCF(data) {
	return axios({
		method: 'POST',
		url: `${BASEURL}/?action=editWriteboard&writeboard_ID=${data.id}&title=${data.title}&content=${data.content}&deleted=${data.archived}`,
		headers: {
			'AuthToken': AUTHTOKEN
		}
	});
}

export function archiveWriteboardInCF(data) {
	return axios({
		method: 'POST',
		url: `${BASEURL}/?action=editWriteboard&writeboard_ID=${data.id}&deleted=${data.archived}`,
		headers: {
			'AuthToken': AUTHTOKEN
		}
	});
}
