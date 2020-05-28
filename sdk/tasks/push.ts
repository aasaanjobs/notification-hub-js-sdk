import { Validator, getExpiry } from '../helpers'
import { NotificationTask, Push } from '../protos/generated/notificationHub_pb'

export class PushTask {
    private push: Push
    private readonly defaultExpiryOffsetDays: number = 7

    constructor(template: string, token: string, clientPlatform: Push.ClientPlatform, userId: string, waterfallConfig?: NotificationTask.WaterfallMode,
        context?: string, extraPayload?: string, expiry?: number) {
        this.push = new Push()
        this.setTemplate(template)
        this.setToken(token)
        this.setClientPlatform(clientPlatform)
        this.setContext(context)
        // this.setWaterfallconfig(waterfallConfig)
        this.setUserId(userId)
        this.setExtraPayload(extraPayload)
        this.setExpiry(expiry)
    }

    private setTemplate(template: string) {
        this.push.setTemplate(template)
    }

    private setToken(token: string) {
        let validator = new Validator()
        if (validator.validateArn(token)) {
            this.push.setToken(token)
        }
    }

    private setContext(context?: string) {
        if (!context) {
            context = '{}'
        }
        this.push.setContext(context)
    }

    // private setWaterfallconfig(waterfallConfig?: NotificationTask.WaterfallMode) {
    //     if (!waterfallConfig) {
    //         waterfallConfig = NotificationTask.WaterfallMode.AUTO
    //     }
    //     this.push.setWaterfallconfig(waterfallConfig)
    // }

    private setUserId(id: string) {
        this.push.setUserid(id)
    }

    private setExtraPayload(extraPayload?: string) {
        if (!extraPayload) {
            extraPayload = ''
        }
        this.push.setExtrapayload(extraPayload)
    }

    private setClientPlatform(platform: Push.ClientPlatform) {
        this.push.setClientplatform(platform)
    }

    private setExpiry(expiry?: number) {
        if (!expiry) {
            expiry = this.defaultExpiryOffsetDays
        }
        this.push.setExpiry(getExpiry(expiry))
    }

    getProtoObj() {
        return this.push
    }
}