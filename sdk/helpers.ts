export function getExpiry(offset?: number) {
    if (!offset) {
        // set default offset in days
        offset = 7
    }
    let now = Math.trunc(Date.now() / 1000)
    let expiry = now + offset * 24 * 60 * 60
    return expiry
}

export class Validator {
    private readonly emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    private readonly urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    private readonly phonePattern = /^[0]?[789]\d{9}$/

    private validateUrl(url: string) {
        return this.urlPattern.test(url)
    }

    validateAttachmentUrl(url: string) {
        let valid = this.validateUrl(url)
        if (!valid) {
            throw new Error("Invalid attachment URL")
        }
        return valid
    }

    validateEmail(email: string) {
        let valid = this.emailPattern.test(email)
        if (!valid) {
            throw new Error("Invalid email address")
        }
        return valid
    }

    validateMobile(mobile: string) {
        let valid = this.phonePattern.test(mobile)
        if (!valid) {
            throw new Error("Invalid phone number")
        }
        return valid
    }

    validateArn(arn: string) {
        if (arn.length == 0) {
            throw new Error("Invalid ARN")
        }
        return true
    }
}