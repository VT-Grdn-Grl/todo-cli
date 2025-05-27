#!/bin/bash

# Function to cleanup and exit
cleanup() {
    echo "Cleaning up..."
    lsof -ti :8000 | xargs kill -9 2>/dev/null
    exit 0
}

# Trap Ctrl+C and call cleanup
trap cleanup INT

# Kill any existing process on port 8000
echo "Cleaning up any existing processes..."
lsof -ti :8000 | xargs kill -9 2>/dev/null

# Start uvicorn
echo "Starting FastAPI server..."
uvicorn app.main:app --reload