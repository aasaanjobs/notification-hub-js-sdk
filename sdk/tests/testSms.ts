import { uuid } from 'uuidv4'

import { Task } from '../tasks/task'
import { SMSTask } from '../tasks/sms'

export function getSMSTask(): SMSTask {
    let sms = new SMSTask("adasds", "asdasd", "adsas")
    return sms
}

function testSms() {
    let task = new Task()
    task.send()
}