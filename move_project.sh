#!/bin/bash
# Script to move the project to the user's requested location
TARGET="$HOME/Downloads/ravidevlopment"

echo "Creating target directory: $TARGET"
mkdir -p "$TARGET"

echo "Copying project files..."
cp -R . "$TARGET"

echo "Project successfully copied to $TARGET"
echo "You can now navigate there with: cd $TARGET"
