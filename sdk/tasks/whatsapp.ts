import { getExpiry } from '../helpers'
import { NotificationTask, Whatsapp } from '../protos/generated/notificationHub_pb'

export class WhatsAppTask {
    private whatsapp: any
    private readonly default_expiry_offset_days: number = 7

    constructor(template: string, mobile: string, userId: string, waterfallConfig: NotificationTask.WaterfallMode,
        context?: string, expiry?: number) {
        this.whatsapp = new Whatsapp()
        this.setTemplate(template)
        this.setMobile(mobile)
        this.setContext(context)
        this.setWaterfallConfig(waterfallConfig)
        this.setExpiry(expiry)
        this.setUserId(userId)
    }

    private setTemplate(template: string) {
        this.whatsapp.setTemplate(template)
    }

    private setMobile(mobile: string) {
        this.whatsapp.setMobile(mobile)
    }

    private setContext(context?: string) {
        if (!context) {
            context = '{}'
        }
        this.whatsapp.set(context)
    }

    private setWaterfallConfig(config: NotificationTask.WaterfallMode) {
        this.whatsapp.setWaterfallconfig(config)
    }

    private setExpiry(expiry?: number) {
        if (!expiry) {
            expiry = this.default_expiry_offset_days
        }
        this.whatsapp.setExpiry(getExpiry(expiry))
    }

    private setUserId(id: string) {
        this.whatsapp.setUserid(id)
    }

    getProtoObj(): Whatsapp {
        return this.whatsapp
    }
}