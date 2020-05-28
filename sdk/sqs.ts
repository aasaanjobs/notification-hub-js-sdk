import 'os';
import { create, ProducerMessage } from 'sqs-producer';

export class SQS {
    sqs: any;
    private accessKeyId: string;
    private secretAccessKey: string;
    private region: string;
    private queueUrl: string;

    constructor(accessKeyId: string, secretAccessKey: string, region: string, queueUrl: string) {
        if (!accessKeyId || !secretAccessKey || !region || !queueUrl) {
            throw new Error("Missing or undefined parameter values, please provide values for all parameters.\nRequired parameters:  accessKeyId, secretAccessKey, region, queueUrl")
        }

        this.accessKeyId = accessKeyId
        this.secretAccessKey = secretAccessKey
        this.region = region
        this.queueUrl = queueUrl
        this.initSqsSession()
    }

    private initSqsSession() {
        this.sqs = create({
            accessKeyId: this.accessKeyId,
            secretAccessKey: this.secretAccessKey,
            region: this.region,
            queueUrl: this.queueUrl,
        })
    }

    sendMessage(message: string, cb?: Function) {
        this.sqs.send(message, (err: any) => {
            if (err) {
                throw new Error("Unable to send notification task")
            }

            // return "Success"; ?? 
            if (cb) {
                cb()
            }
        })
    }
}