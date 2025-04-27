#!/bin/bash
set -e

# Clone VSCode if not present
if [ ! -d "vscode" ]; then
    git clone https://github.com/microsoft/vscode.git
    cd vscode
    git checkout tags/1.99.3
    npm install
    npm run compile
    npm run compile-web
    cd ..
fi

cd ext1
if [ ! -d "node_modules" ]; then
    npm install
else
    echo "node_modules already exists, skipping 'npm install'"
fi

# Compile packages if  
if [ ! -d "dist" ]; then
    npm run compile-web
else
    echo "dist already exists, skipping 'npm run compile-web'"
fi
cd ..


./vscode/scripts/code-web.sh --host 0.0.0.0 --extensionDevelopmentPath=/workspaces/fr_task_1/ext1
