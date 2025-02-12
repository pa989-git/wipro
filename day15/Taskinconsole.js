// Implement the TaskManager class
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task added successfully: ".concat(task.title));
    };
    TaskManager.prototype.viewTasks = function () {
        return this.tasks;
    };
    TaskManager.prototype.modifyTask = function (id, updatedTask) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (!task) {
            console.log("Error: Task with ID ".concat(id, " does not exist."));
            return;
        }
        Object.assign(task, updatedTask);
        console.log("Task modified successfully: ".concat(task.title));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id === id; });
        if (index === -1) {
            console.log("Error: Task with ID ".concat(id, " does not exist."));
            return;
        }
        this.tasks.splice(index, 1);
        console.log("Task deleted successfully.");
    };
    return TaskManager;
}());
// Testing the TaskManager class
var manager = new TaskManager();
// Adding tasks
manager.addTask({ id: 1, title: "Complete Assignment", description: "Finish TypeScript assignment", completed: false });
manager.addTask({ id: 2, title: "Read Book", description: "Read 20 pages of a book", completed: false });
// Viewing tasks
console.log("Tasks:", manager.viewTasks());
// Modifying a task
manager.modifyTask(1, { completed: true });
// Deleting a task
manager.deleteTask(2);
// Attempting to delete a non-existent task
manager.deleteTask(3);
