import { uuid } from 'uuidv4'

import { EmailTask } from '../tasks/email'
import { SMSTask} from '../tasks/sms'
import { WhatsAppTask } from '../tasks/whatsapp'
import { PushTask } from '../tasks/push'

import { NotificationTask } from '../protos/generated/notificationHub_pb'
import { SQS } from '../sqs'

export class Task {
    private task: NotificationTask
    private messageType: NotificationTask.MessageType

    private queueUrl: string | undefined
    private marketingQueueUrl: string | undefined
    private otpQueueUrl: string | undefined

    constructor(name: string,
        sentById: string,
        client: string,
        platform: NotificationTask.Platform,
        messageType: NotificationTask.MessageType,
        queueUrl?: string,
        marketingQueueUrl?: string,
        otpQueueUrl?: string,
        email?: EmailTask,
        sms?: SMSTask,
        whatsapp?: WhatsAppTask,
        push?: PushTask,
        waterfallType?: NotificationTask.WaterfallMode) {

        this.task = new NotificationTask()
        this.messageType = messageType
        this.queueUrl = queueUrl
        this.marketingQueueUrl = marketingQueueUrl
        this.otpQueueUrl = otpQueueUrl

        this.setTaskID()
        this.setMessageType(messageType)

        if (sms) {
            this.setSms(sms)
        }

        if (email) {
            this.setEmail(email)
        }

        if (whatsapp) {
            this.setWhatsapp(whatsapp)
        }

        if (push) {
            this.setPush(push)
        }

        this.setName(name)
        this.setClient(client)
        this.setPlatform(platform)

        if (waterfallType) {
            this.setWaterfalltype(waterfallType)
        }

        this.setSentbyid(sentById)
        this.setTriggeredon()
    }

    private setTaskID() {
        this.task.setId(uuid().toString())
    }

    private setMessageType(type: NotificationTask.MessageType) {
        this.task.setMessagetype(type)
    }

    setSms(sms: SMSTask) {
        this.task.setSms(sms.getProtoObj())
    }

    setWhatsapp(whatsapp: WhatsAppTask) {
        this.task.setWhatsapp(whatsapp.getProtoObj())
    }

    setEmail(email: EmailTask) {
        this.task.setEmail(email.getProtoObj())
    }

    setPush(push: PushTask) {
        this.task.setPush(push.getProtoObj())
    }

    setName(name: string) {
        this.task.setName(name)
    }

    setSentbyid(id: string) {
        this.task.setSentbyid(id)
    }

    setClient(client: string) {
        this.task.setClient(client)
    }

    setWaterfalltype(type: NotificationTask.WaterfallMode) {
        this.task.setWaterfalltype(type)
    }

    private setTriggeredon() {
        let now = Math.trunc(Date.now() / 1000);
        this.task.setTriggeredon(now)
    }

    setPlatform(platform: NotificationTask.Platform) {
        this.task.setPlatform(platform)
    }

    send() {
        if (!this.task.hasEmail() && !this.task.hasSms() && !this.task.hasWhatsapp() && !this.task.hasPush()) {
            throw new Error("No notification task to send! ")
        }

        if (!this.task.getSentbyid) {
            throw new Error("No sentById found!")
        }

        let queue: string | undefined
        if (this.messageType == NotificationTask.MessageType.MARKETING) {
            queue = this.queueUrl
        } else if (this.messageType == NotificationTask.MessageType.TRANSACTIONAL) {
            queue = this.marketingQueueUrl
        } else if (this.messageType == NotificationTask.MessageType.OTP) {
            queue = this.otpQueueUrl
        }

        let accessKeyId = ""
        let secretAccessKey = ""
        let region = ""
        let queueUrl: string = queue || ""
        let sqs = new SQS(accessKeyId, secretAccessKey, region, queueUrl)
        sqs.sendMessage(JSON.stringify(this.task.toObject()))
    }
}