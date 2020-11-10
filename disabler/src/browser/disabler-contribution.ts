import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const DisablerCommand = {
    id: 'Disabler.command',
    label: "Test Disabler"
};

@injectable()
export class DisablerCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(DisablerCommand, {
            execute: () => this.messageService.info('Working')
        });

        registry.unregisterCommand('file.download')
        registry.unregisterCommand('file.copyDownloadLink')
    }
}

@injectable()
export class DisablerMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: DisablerCommand.id,
            label: DisablerCommand.label
        });
        menus.unregisterMenuNode('file.download')
        menus.unregisterMenuNode('file.copyDownloadLink')
    }
}
