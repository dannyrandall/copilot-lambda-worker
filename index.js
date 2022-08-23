'use strict';

// const { randomTopicName } = JSON.parse(process.env.COPILOT_SNS_TOPIC_ARNS);

const app = require('express')();
app.set('trust proxy', true);

app.get("/healthz", (req, res) => {
	res.status(200).send();
});

app.get("/*", (req, res) => {
	console.log(`Handling ${req.method} request from ${req.ip} to ${req.url}`);
	res.status(200).send(`Hello ${req.ip}!`);
});

app.listen(8080, () => {
	console.log('Listening on :8080');
});