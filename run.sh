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

./vscode/scripts/code-web.sh --host 0.0.0.0 --extensionDevelopmentPath=/workspaces/fr_task_1/ext1

# we need to npm run compile, after every change to the extension
