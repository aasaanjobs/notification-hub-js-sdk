import { uuid } from 'uuidv4'

import { Task } from '../tasks/task'
import { PushTask } from '../tasks/push'

export function getSMSTask(): PushTask {
    let pushTask = new PushTask()
    return pushTask
}

function testEmail() {
    let task = new Task()
    task.send()
}