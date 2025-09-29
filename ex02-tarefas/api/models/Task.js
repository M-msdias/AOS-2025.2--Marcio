export class Task {
    constructor(taskId, taskDescription, isCompleted) {
        this.id = taskId;
        this.description = taskDescription;
        this.completed = isCompleted;
    }
}
