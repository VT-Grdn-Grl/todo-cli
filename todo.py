"""
A simple command-line todo list application that allows users to add and list tasks.
Tasks are persisted in a JSON file.
"""
import sys
import json
import os

TASKS_FILE = "tasks.json"

def load_tasks():
    if os.path.exists(TASKS_FILE):
        try:
            with open(TASKS_FILE, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            return []
    return []

def save_tasks(tasks):
    with open(TASKS_FILE, 'w') as f:
        json.dump(tasks, f)

def add_task(task):
    tasks = load_tasks()
    tasks.append(task)
    save_tasks(tasks)
    print(f"Added task: {task}")

def list_tasks():
    tasks = load_tasks()
    if not tasks:
        print("No tasks yet.")
    else:
        for i, task in enumerate(tasks, 1):
            print(f"{i}. {task}")

def delete_task(task_number):
    tasks = load_tasks()
    if not tasks or task_number < 1 or task_number > len(tasks):
        print("Invalid task number")
        return
    deleted_task = tasks.pop(task_number - 1)
    save_tasks(tasks)
    print(f"Deleted task: {deleted_task}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python todo.py [add/list/delete] [task/number]")
    elif sys.argv[1] == "add":
        add_task(" ".join(sys.argv[2:]))
    elif sys.argv[1] == "list":
        list_tasks()
    elif sys.argv[1] == "delete":
        if len(sys.argv) != 3:
            print("Please provide the task number to delete")
        else:
            try:
                task_number = int(sys.argv[2])
                delete_task(task_number)
            except ValueError:
                print("Please provide a valid task number")
