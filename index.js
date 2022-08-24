'use strict';

const aws = require("aws-sdk");
const sns = new aws.SNS();

const { requests } = JSON.parse(process.env.COPILOT_SNS_TOPIC_ARNS);
console.log(`Sending requests to ${requests}`);

const app = require("express")();
app.set("trust proxy", true);

app.get("/healthz", (req, res) => {
	res.status(200).send();
});

app.get("/*", async (req, res) => {
	console.log(`Handling ${req.method} request from ${req.ip} to ${req.url}`);

	try {
		await sns.publish({
			TopicArn: requests,
			Message: JSON.stringify({
				method: req.method,
				source: req.ip,
				url: req.url
			}),
		}).promise();

		res.status(200).send(`Hello ${req.ip}!`);
	} catch (err) {
		console.warn("publish message:", err);
		res.status(500).send(`an error occured`);
	}
});

app.listen(8080, () => {
	console.log("Listening on :8080");
});