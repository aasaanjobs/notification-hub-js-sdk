import { SMS } from '../protos/generated/notificationHub_pb'

export class SMSTask {
    private sms: SMS
    private readonly defaultExpiryOffsetDays: number = 7

    constructor(template: string, mobile: string, userId: string, context?: string, expiry?: number) {
        this.sms = new SMS()
        this.setTemplate(template)
        this.setMobile(mobile)
        this.setContext(context)
        this.setExpiry(expiry)
        this.setUserId(userId)
    }

    private setTemplate(template: string) {
        this.sms.setTemplate(template)
    }

    private setMobile(mobile: string) {
        this.sms.setMobile(mobile)
    }

    private setContext(context?: string) {
        if (!context) {
            context = '{}'
        }
        this.sms.setContext(context)
    }

    private setExpiry(expiry?: number) {
        if (!expiry) {
            expiry = this.defaultExpiryOffsetDays
        }
        this.sms.setExpiry(expiry)
    }

    private setUserId(id: string) {
        this.sms.setUserid(id)
    }

    getProtoObj(): SMS {
        return this.sms
    }
}