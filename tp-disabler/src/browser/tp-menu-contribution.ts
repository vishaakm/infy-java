import { Command, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { injectable } from 'inversify';

const openQuestion: Command = {
    id: 'question-loader.show',
    label: 'Open Question'
};
const submitProject: Command = {
    id: 'submit.Show',
    label: 'Submit Project'
};

@injectable()
export class ClientMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'handson-client'];
        menus.registerSubmenu(subMenuPath, 'HandsOn Client', {
            order: '8' // that should put the menu right at the end
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: openQuestion.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: submitProject.id,
            order: '2'
        });
    }

}