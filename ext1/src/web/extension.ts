import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ext1" is now active in the web extension host!');

	const disposable = vscode.commands.registerCommand('ext1.openImage', () => {
		console.log('Starting Open Image');

		let panel = vscode.window.createWebviewPanel(
			'renderImage',
			'Render Panel',
			vscode.ViewColumn.One,
			{
				// Enable local resource loading
				enableScripts: true,
				localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
			}
		);

		panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);

		console.log('Closing Open Image');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
	const imagePath = vscode.Uri.joinPath(extensionUri, 'media', 'image.jpeg');
	const imageSrc = webview.asWebviewUri(imagePath);

	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Render Image</title>
		</head>
		<body>
			<h1>Image from Extension</h1>
			<img src="${imageSrc}" alt="Example Image" width="500" />
		</body>
		</html>
	`;
}
