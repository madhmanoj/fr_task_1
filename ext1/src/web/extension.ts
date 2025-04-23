import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ext1" is now active in the web extension host!');

	const disposable = vscode.commands.registerCommand('ext1.openImage', () => {
		const panel = vscode.window.createWebviewPanel(
			'imageViewer',
			'Image Viewer', 
			vscode.ViewColumn.One,
		);

		// const imagePath = vscode.Uri.joinPath(context.extensionUri, 'media', 'images.jpeg');
		// const imageSrc = panel.webview.asWebviewUri(imagePath);

		panel.webview.html = `
			<!DOCTYPE html>
			<html>
			<body style="background-color:black;height:100%;width:100%">
				
			</body>
			</html>
		`;
	});

	context.subscriptions.push(disposable);
}
