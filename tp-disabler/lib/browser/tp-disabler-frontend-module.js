"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var tp_disabler_contribution_1 = require("./tp-disabler-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
var tp_menu_contribution_1 = require("./tp-menu-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(tp_disabler_contribution_1.TpDisablerCommandContribution);
    bind(common_1.MenuContribution).to(tp_disabler_contribution_1.TpDisablerMenuContribution);
    bind(common_1.MenuContribution).to(tp_menu_contribution_1.ClientMenuContribution);
});
//# sourceMappingURL=tp-disabler-frontend-module.js.map