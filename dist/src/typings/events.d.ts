import { Message } from "discord.js";
import AkairoModule from "../struct/AkairoModule";
import Command from "../struct/commands/Command";
import Inhibitor from "../struct/inhibitors/Inhibitor";
import Listener from "../struct/listeners/Listener";
import Task from "../struct/tasks/Task";
import AkairoMessage from "../util/AkairoMessage";
import { BuiltInReasons } from "../util/Constants";
export interface AkairoHandlerEvents {
    /**
     * Emitted when a module is loaded.
     * @param mod - Module loaded.
     * @param isReload - Whether or not this was a reload.
     */
    load: [mod: AkairoModule, isReload: boolean];
    /**
     * Emitted when a module is removed.
     * @param mod - Module removed.
     */
    remove: [mod: AkairoModule];
}
export interface CommandHandlerEvents extends AkairoHandlerEvents {
    /**
     * Emitted when a command is blocked by a post-message inhibitor. The built-in inhibitors are `owner`, `superUser`, `guild`, and `dm`.
     * @param message - Message sent.
     * @param command - Command blocked.
     * @param reason - Reason for the block.
     */
    commandBlocked: [
        message: Message,
        command: Command,
        reason: typeof BuiltInReasons | string
    ];
    /**
     * Emitted when a command breaks out with a retry prompt.
     * @param message - Message sent.
     * @param command - Command being broken out.
     * @param breakMessage - Breakout message.
     */
    commandBreakout: [message: Message, command: Command, breakMessage: Message];
    /**
     * Emitted when a command is cancelled via prompt or argument cancel.
     * @param message - Message sent.
     * @param command - Command executed.
     * @param retryMessage - Message to retry with. This is passed when a prompt was broken out of with a message that looks like a command.
     */
    commandCancelled: [
        message: Message,
        command: Command,
        retryMessage?: Message
    ];
    /**
     * Emitted when a command finishes execution.
     * @param message - Message sent.
     * @param command - Command executed.
     * @param args - The args passed to the command.
     * @param returnValue - The command's return value.
     */
    commandFinished: [
        message: Message,
        command: Command,
        args: any,
        returnValue: any
    ];
    /**
     * Emitted when a command is invalid
     * @param message - Message sent.
     * @param command - Command executed.
     */
    commandInvalid: [message: Message, command: Command];
    /**
     * Emitted when a command is locked
     * @param message - Message sent.
     * @param command - Command executed.
     */
    commandLocked: [message: Message, command: Command];
    /**
     * Emitted when a command starts execution.
     * @param message - Message sent.
     * @param command - Command executed.
     * @param args - The args passed to the command.
     */
    commandStarted: [message: Message, command: Command, args: any];
    /**
     * Emitted when a command or slash command is found on cooldown.
     * @param message - Message sent.
     * @param command - Command blocked.
     * @param remaining - Remaining time in milliseconds for cooldown.
     */
    cooldown: [message: Message, command: Command, remaining: number];
    /**
     * Emitted when a command or inhibitor errors.
     * @param error - The error.
     * @param message - Message sent.
     * @param command - Command executed.
     */
    error: [error: Error, message: Message, command?: Command];
    /**
     * Emitted when a user is in a command argument prompt.
     * Used to prevent usage of commands during a prompt.
     * @param message - Message sent.
     */
    inPrompt: [message: Message];
    /**
     * Emitted when a command is loaded.
     * @param command - Module loaded.
     * @param isReload - Whether or not this was a reload.
     */
    load: [command: Command, isReload: boolean];
    /**
     * Emitted when a message is blocked by a pre-message inhibitor. The built-in inhibitors are 'client' and 'bot'.
     * @param message - Message sent.
     * @param reason - Reason for the block.
     */
    messageBlocked: [message: Message | AkairoMessage, reason: string];
    /**
     * Emitted when a message does not start with the prefix or match a command.
     * @param message - Message sent.
     */
    messageInvalid: [message: Message];
    /**
     * Emitted when a command permissions check is failed.
     * @param message - Message sent.
     * @param command - Command blocked.
     * @param type - Either 'client' or 'user'.
     * @param missing - The missing permissions.
     */
    missingPermissions: [
        message: Message,
        command: Command,
        type: "client" | "user",
        missing?: any
    ];
    /**
     * Emitted when a command is removed.
     * @param command - Command removed.
     */
    remove: [command: Command];
    /**
     * Emitted when a slash command is blocked by a post-message inhibitor. The built-in inhibitors are `owner`, `superUser`, `guild`, and `dm`.
     * @param message - The slash message.
     * @param command - Command blocked.
     * @param reason - Reason for the block.
     */
    slashBlocked: [message: AkairoMessage, command: Command, reason: string];
    /**
     * Emitted when a slash command errors.
     * @param error - The error.
     * @param message - The slash message.
     * @param command - Command executed.
     */
    slashError: [error: Error, message: AkairoMessage, command: Command];
    /**
     * Emitted when a slash command finishes execution.
     * @param message - The slash message.
     * @param command - Command executed.
     * @param args - The args passed to the command.
     * @param returnValue - The command's return value.
     */
    slashFinished: [
        message: AkairoMessage,
        command: Command,
        args: any,
        returnValue: any
    ];
    /**
     * Emitted when a slash command permissions check is failed.
     * @param message - The slash message.
     * @param command - Command blocked.
     * @param type - Either 'client' or 'user'.
     * @param missing - The missing permissions.
     */
    slashMissingPermissions: [
        message: AkairoMessage,
        command: Command,
        type: "user" | "client",
        missing?: any
    ];
    /**
     * Emitted when a an incoming interaction command cannot be matched with a command.
     * @param interaction - The incoming interaction.
     */
    slashNotFound: [interaction: AkairoMessage];
    /**
     * Emitted when a slash command starts execution.
     * @param message - The slash message.
     * @param command - Command executed.
     * @param args - The args passed to the command.
     */
    slashStarted: [message: AkairoMessage, command: Command, args: any];
}
export interface InhibitorHandlerEvents extends AkairoHandlerEvents {
    /**
     * Emitted when an inhibitor is removed.
     * @param inhibitor - Inhibitor removed.
     */
    remove: [inhibitor: Inhibitor];
    /**
     * Emitted when an inhibitor is loaded.
     * @param inhibitor - Inhibitor loaded.
     * @param isReload - Whether or not this was a reload.
     */
    load: [inhibitor: Inhibitor, isReload: boolean];
}
export interface ListenerHandlerEvents extends AkairoHandlerEvents {
    /**
     * Emitted when a listener is removed.
     * @param listener - Listener removed.
     */
    remove: [listener: Listener];
    /**
     * Emitted when a listener is loaded.
     * @param listener - Listener loaded.
     * @param isReload - Whether or not this was a reload.
     */
    load: [listener: Listener, isReload: boolean];
}
export interface TaskHandlerEvents extends AkairoHandlerEvents {
    /**
     * Emitted when a task is removed.
     * @param task - Task removed.
     */
    remove: [task: Task];
    /**
     * Emitted when a task is loaded.
     * @param task - Task loaded.
     * @param isReload - Whether or not this was a reload.
     */
    load: [task: Task, isReload: boolean];
}
//# sourceMappingURL=events.d.ts.map