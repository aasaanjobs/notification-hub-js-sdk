import { uuid } from 'uuidv4'

import { Task } from '../tasks/task'
import { EmailTask } from '../tasks/email'

export function getSMSTask(): EmailTask {
    let emailTask = new EmailTask()
    return emailTask
}

function testEmail() {
    let task = new Task()
    task.send()
}