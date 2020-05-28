import { uuid } from 'uuidv4'

import { Task } from '../tasks/task'
import { WhatsAppTask } from '../tasks/whatsapp'

export function getSMSTask(): WhatsAppTask {
    let whatsappTask = new WhatsAppTask()
    return whatsappTask
}

function testEmail() {
    let task = new Task()
    task.send()
}