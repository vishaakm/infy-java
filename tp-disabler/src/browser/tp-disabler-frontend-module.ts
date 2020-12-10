/**
 * Generated using theia-extension-generator
 */
import { TpDisablerCommandContribution, TpDisablerMenuContribution } from './tp-disabler-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TpDisablerCommandContribution);
    bind(MenuContribution).to(TpDisablerMenuContribution);
});
