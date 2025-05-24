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

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python todo.py [add/list] [task]")
    elif sys.argv[1] == "add":
        add_task(" ".join(sys.argv[2:]))
    elif sys.argv[1] == "list":
        list_tasks()
