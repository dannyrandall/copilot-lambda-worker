# copilot-lambda-worker

This is an example service and lambda deployed with [AWS Copilot](https://github.com/dannyrandall/copilot-cli).
[The service](./index.js) publishes incoming requests to an SNS topic, and [the lambda](./lambdas/worker/index.js) processes messages published to the topic through an SQS Queue.

To deploy this service with Copilot, do the following:
```console
➜ copilot init --name copilot-lambda-worker --deploy # do i need type?
```
Copilot will ask for an application name - use whatever name you'd like.

To clean up all resources created, run:
```copilot
➜ copilot app delete
```