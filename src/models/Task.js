// src/models/Task.js
export default class Task {
    constructor(title, description, assignee, priority, status = 'Pending') {
      this.title = title;
      this.description = description;
      this.startDate = new Date();
      this.endDate = new Date();
      this.status = status;
      this.assignee = assignee;
      this.priority = priority;
    }
  }
  