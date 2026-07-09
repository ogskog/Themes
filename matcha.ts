/* import modules */
  import * as vsc from 'vscode';              //runs vdc - req. vscode install
/* declare Variables */
  const output = vsc.window.createOutputChannel(".icontrolsystems");

export function activate(context: vsc.ExtensionContext) { 

    //vsc.commands.registerCommand('.icontrolsystems.outputics', (element, status, stio) => {} );
    vsc.workspace.getConfiguration().update( 'workbench.iconTheme', "control", vsc.ConfigurationTarget.Global );
    }