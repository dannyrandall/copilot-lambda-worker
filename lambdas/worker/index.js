'use strict';

exports.handler = async function (event, context) {
	console.log(`handling event: ${JSON.stringify(event)}`);

	for (const record of event.Records) {
		const { body } = record;
		console.log(body);
	}

	return {};
};