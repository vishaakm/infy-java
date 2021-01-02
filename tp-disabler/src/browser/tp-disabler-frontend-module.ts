/**
 * Generated using theia-extension-generator
 */
import { TpDisablerCommandContribution, TpDisablerMenuContribution } from './tp-disabler-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";
import { ClientMenuContribution } from './tp-menu-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TpDisablerCommandContribution);
    bind(MenuContribution).to(TpDisablerMenuContribution);
    bind(MenuContribution).to(ClientMenuContribution);
});
