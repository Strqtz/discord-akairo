import { APIMessage } from "discord-api-types";
import { Collection, MessagePayload, InteractionReplyOptions, Message, MessageEditOptions, MessageOptions, ReplyMessageOptions, WebhookEditMessageOptions, Snowflake } from "discord.js";
import AkairoMessage from "../../util/AkairoMessage";
import CommandHandler, { ParsedComponentData } from "./CommandHandler";
/**
 * Command utilities.
 * @param handler - The command handler.
 * @param message - Message that triggered the command.
 */
export default class CommandUtil {
    constructor(handler: CommandHandler, message: Message | AkairoMessage);
    /**
     * The command handler.
     */
    handler: CommandHandler;
    /**
     * Whether or not the command is a slash command.
     */
    isSlash: true | false;
    /**
     * The last response sent.
     */
    lastResponse?: Message;
    /**
     * Message that triggered the command.
     */
    message: Message | AkairoMessage;
    /**
     * Messages stored from prompts and prompt replies.
     */
    messages?: Collection<Snowflake, Message>;
    /**
     * The parsed components.
     */
    parsed?: ParsedComponentData;
    /**
     * Whether or not the last response should be edited.
     */
    shouldEdit: boolean;
    /**
     * Sets the last response.
     * @param message - The last response.
     */
    setLastResponse(message: Message): Message;
    /**
     * Adds client prompt or user reply to messages.
     * @param message - Message to add.
     */
    addMessage(message: Message | Message[]): Message | Message[];
    /**
     * Changes if the message should be edited.
     * @param state - Change to editable or not.
     */
    setEditable(state: boolean): CommandUtil;
    /**
     * Sends a response or edits an old response if available.
     * @param options - Options to use.
     */
    send(options: string | MessagePayload | MessageOptions | InteractionReplyOptions): Promise<Message | APIMessage | void>;
    /**
     * Sends a response, overwriting the last response.
     * @param options - Options to use.
     */
    sendNew(options: string | MessagePayload | MessageOptions): Promise<Message | APIMessage>;
    /**
     * Send an inline reply or respond to a slash command.
     * @param options - Options to use.
     */
    reply(options: string | MessagePayload | ReplyMessageOptions | InteractionReplyOptions): Promise<Message | APIMessage>;
    /**
     * Edits the last response.
     * If the message is a slash command, edits the slash response.
     * @param options - Options to use.
     */
    edit(options: string | MessageEditOptions | MessagePayload | WebhookEditMessageOptions): Promise<Message | APIMessage>;
    /**
     * Deletes the last response.
     */
    delete(): Promise<Message | void>;
}
//# sourceMappingURL=CommandUtil.d.ts.map