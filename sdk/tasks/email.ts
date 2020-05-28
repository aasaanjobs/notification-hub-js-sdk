import { getExpiry } from '../helpers'
import { NotificationTask, Email, EmailRecipient, EmailAttachment } from '../protos/generated/notificationHub_pb'

export class Recipient {
    recipient: EmailRecipient

    constructor(email: string, name: string, userId: string) {
        this.recipient = new EmailRecipient()
        this.recipient.setEmail(email)
        this.recipient.setName(name)
        this.recipient.setUserid(userId)
    }
}

export class Attachement {
    attachment: EmailAttachment

    constructor(url: string, fileName: string) {
        this.attachment = new EmailAttachment()
        this.attachment.setUrl(url)
        this.attachment.setFilename(fileName)
    }
}

export class EmailTask {
    private email: Email
    private readonly defaultExpiryOffsetDays: number = 7

    constructor(template: string, recipients: [Recipient], subject: string,
    sender: Recipient, replyTo: Recipient, attachments: [Attachement],
    context?: string, ccRecipients?: [Recipient], waterfallConfig?: NotificationTask.WaterfallMode,
    expiry?: number) {
        this.email = new Email()
        this.setTemplate(template)
        this.setToRecipients(recipients)
        this.setContext(context)
        this.setSubject(subject)
        this.setSender(sender)
        this.setReplyTo(replyTo)
    }

    setTemplate (template: string) {
        this.email.setTemplate(template)
    }

    setToRecipients (recipients: [Recipient]) {
        let recipientList: [any]
        recipients.forEach(element => {
            recipientList.push(element.recipient)
        });
        this.email.setTorecipientsList(recipientList)
    }

    setContext (context?: string) {
        if (!context) {
            context = '{}'
        }
        this.email.setContext(context)
    }

    setSubject (subject: string) {
        this.email.setSubject(subject)
    }

    setSender (sender: Recipient) {
        this.email.setSender(sender.recipient)
    }

    setReplyTo (replyTo: Recipient) {
        this.email.setReplyto(replyTo.recipient)
    }

    setCCRecipients (recipients: [Recipient]) {
        let recipientList: [any]
        recipients.forEach(element => {
            recipientList.push(element.recipient)
        });
        this.email.setCcrecipientsList(recipientList)
    }

    setAttachments (attachments: [Attachement]) {
        let attachmentList: [any]
        attachments.forEach(element => {
            attachmentList.push(element.attachment)
        });
        this.email.setAttachmentsList(attachmentList)
    }

    // setWaterfallConfig (waterfallConfig: WaterfallMode) {
    //     if (!waterfallConfig) {
    //         waterfallConfig = WaterfallMode.AUTO
    //     }
    //     this.email.setWaterfallconfig(waterfallConfig)
    // }

    setExpiry (expiry?: number) {
        if (!expiry) {
            expiry = this.defaultExpiryOffsetDays
        }
        this.email.setExpiry(getExpiry(expiry))
    }

    getProtoObj(): Email {
        return this.email
    }
}