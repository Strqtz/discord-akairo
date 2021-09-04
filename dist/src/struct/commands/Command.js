"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AkairoError_1 = __importDefault(require("../../util/AkairoError"));
const AkairoModule_1 = __importDefault(require("../AkairoModule"));
const Argument_1 = __importDefault(require("./arguments/Argument"));
const ArgumentRunner_1 = __importDefault(require("./arguments/ArgumentRunner"));
const ContentParser_1 = __importDefault(require("./ContentParser"));
/**
 * Represents a command.
 * @param id - Command ID.
 * @param options - Options for the command.
 */
class Command extends AkairoModule_1.default {
    constructor(id, options) {
        super(id, { category: options?.category });
        const { onlyNsfw = false, aliases = [], 
        // @ts-expect-error: otherwise generator functions break
        args = this.args || [], quoted = true, separator, channel = null, ownerOnly = false, superUserOnly = false, editable = true, typing = false, cooldown = null, ratelimit = 1, argumentDefaults = {}, description = "", prefix = this.prefix, // @ts-expect-error
        clientPermissions = this.clientPermissions, // @ts-expect-error
        userPermissions = this.userPermissions, // @ts-expect-error
        regex = this.regex, 
        // @ts-expect-error
        condition = this.condition || (() => false), before = this.before || (() => undefined), lock, ignoreCooldown, ignorePermissions, flags = [], optionFlags = [], slash = false, slashOptions, slashEphemeral = false, slashGuilds = [] } = options ?? {};
        this.aliases = aliases ?? [];
        const { flagWords, optionFlagWords } = Array.isArray(args)
            ? ContentParser_1.default.getFlags(args)
            : { flagWords: flags, optionFlagWords: optionFlags };
        this.contentParser = new ContentParser_1.default({
            flagWords,
            optionFlagWords,
            quoted,
            separator
        });
        this.argumentRunner = new ArgumentRunner_1.default(this);
        this.argumentGenerator = (Array.isArray(args)
            ? ArgumentRunner_1.default.fromArguments(
            // @ts-expect-error
            args.map(arg => [arg.id, new Argument_1.default(this, arg)]))
            : args.bind(this));
        this.onlyNsfw = Boolean(onlyNsfw);
        this.channel = channel;
        this.ownerOnly = Boolean(ownerOnly);
        this.superUserOnly = Boolean(superUserOnly);
        this.editable = Boolean(editable);
        this.typing = Boolean(typing);
        this.cooldown = cooldown;
        this.ratelimit = ratelimit;
        this.argumentDefaults = argumentDefaults;
        this.description = Array.isArray(description) ? description.join("\n") : description;
        this.prefix = typeof prefix === "function" ? prefix.bind(this) : prefix;
        this.clientPermissions = typeof clientPermissions === "function" ? clientPermissions.bind(this) : clientPermissions;
        this.userPermissions = typeof userPermissions === "function" ? userPermissions.bind(this) : userPermissions;
        this.regex = typeof regex === "function" ? regex.bind(this) : regex;
        this.condition = condition.bind(this);
        this.before = before.bind(this);
        this.lock = lock;
        if (typeof lock === "string") {
            this.lock = {
                guild: (message) => message.guild && message.guild.id,
                channel: (message) => message.channel.id,
                user: (message) => message.author.id
            }[lock];
        }
        if (this.lock) {
            this.locker = new Set();
        }
        this.ignoreCooldown = typeof ignoreCooldown === "function" ? ignoreCooldown.bind(this) : ignoreCooldown;
        this.ignorePermissions = typeof ignorePermissions === "function" ? ignorePermissions.bind(this) : ignorePermissions;
        this.slashOptions = slashOptions;
        this.slashEphemeral = slashEphemeral;
        this.slash = slash;
        this.slashGuilds = slashGuilds;
    }
    /**
     * Command names.
     */
    aliases;
    /**
     * Default prompt options.
     */
    argumentDefaults;
    /**
     * Usable only in this channel type.
     */
    channel;
    /**
     * Permissions required to run command by the client.
     */
    clientPermissions;
    /**
     * Cooldown in milliseconds.
     */
    cooldown;
    /**
     * Description of the command.
     */
    description;
    /**
     * Whether or not this command can be ran by an edit.
     */
    editable;
    /**
     * ID of user(s) to ignore cooldown or a function to ignore.
     */
    ignoreCooldown;
    /**
     * ID of user(s) to ignore `userPermissions` checks or a function to ignore.
     */
    ignorePermissions;
    /**
     * The key supplier for the locker.
     */
    lock;
    /**
     * Stores the current locks.
     */
    locker;
    /**
     * Whether or not the command can only be run in  NSFW channels.
     */
    onlyNsfw;
    /**
     * Usable only by the client owner.
     */
    ownerOnly;
    /**
     * Command prefix overwrite.
     */
    prefix;
    /**
     * Whether or not to consider quotes.
     */
    quoted;
    /**
     * Uses allowed before cooldown.
     */
    ratelimit;
    /**
     * The regex trigger for this command.
     */
    regex;
    /**
     * Mark command as slash command and set information.
     */
    slash;
    /**
     * Whether slash command responses for this command should be ephemeral or not.
     */
    slashEphemeral;
    /**
     * Assign slash commands to Specific guilds. This option will make the commands not register globally, but only in the chosen servers.
     */
    slashGuilds;
    /**
     * Options for using the slash command.
     */
    slashOptions;
    /**
     * Whether or not to allow client superUsers(s) only.
     */
    superUserOnly;
    /**
     * Whether or not to type during command execution.
     */
    typing;
    /**
     * Permissions required to run command by the user.
     */
    userPermissions;
    /**
     * Argument options or generator.
     */
    // public args: ArgumentOptions[] | ArgumentGenerator;
    /**
     * The content parser.
     */
    contentParser;
    /**
     * The argument runner.
     */
    argumentRunner;
    /**
     * Generator for arguments.
     */
    argumentGenerator;
    /**
     * Executes the command.
     * @param message - Message that triggered the command.
     * @param args - Evaluated arguments.
     */
    /* public exec(message: Message, args: any): any; */
    exec(message, args) {
        throw new AkairoError_1.default("NOT_IMPLEMENTED", this.constructor.name, "exec");
    }
    /**
     * Runs before argument parsing and execution.
     * @param message - Message being handled.
     */
    before(message) { }
    /**
     * Checks if the command should be ran by using an arbitrary condition.
     * @param message - Message being handled.
     */
    // @ts-expect-error
    condition(message) { }
    /**
     * Execute the slash command
     * @param message - Message for slash command
     * @param args - Slash command options
     */
    execSlash(message, ...args) {
        if (this.slash) {
            throw new AkairoError_1.default("NOT_IMPLEMENTED", this.constructor.name, "execSlash");
        }
    }
    /**
     * Parses content using the command's arguments.
     * @param message - Message to use.
     * @param content - String to parse.
     */
    parse(message, content) {
        const parsed = this.contentParser.parse(content);
        return this.argumentRunner.run(message, parsed, this.argumentGenerator);
    }
    /**
     * Reloads the command.
     */
    reload() {
        return super.reload();
    }
    /**
     * Removes the command.
     */
    remove() {
        return super.remove();
    }
}
exports.default = Command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdHJ1Y3QvY29tbWFuZHMvQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHlFQUFpRDtBQUlqRCxtRUFBb0U7QUFDcEUsb0VBQXlGO0FBQ3pGLGdGQUFpRjtBQUVqRixvRUFBcUU7QUFHckU7Ozs7R0FJRztBQUNILE1BQThCLE9BQVEsU0FBUSxzQkFBWTtJQUN6RCxZQUFZLEVBQVUsRUFBRSxPQUF3QjtRQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sRUFDTCxRQUFRLEdBQUcsS0FBSyxFQUNoQixPQUFPLEdBQUcsRUFBRTtRQUNaLHdEQUF3RDtRQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQ3RCLE1BQU0sR0FBRyxJQUFJLEVBQ2IsU0FBUyxFQUNULE9BQU8sR0FBRyxJQUFJLEVBQ2QsU0FBUyxHQUFHLEtBQUssRUFDakIsYUFBYSxHQUFHLEtBQUssRUFDckIsUUFBUSxHQUFHLElBQUksRUFDZixNQUFNLEdBQUcsS0FBSyxFQUNkLFFBQVEsR0FBRyxJQUFJLEVBQ2YsU0FBUyxHQUFHLENBQUMsRUFDYixnQkFBZ0IsR0FBRyxFQUFFLEVBQ3JCLFdBQVcsR0FBRyxFQUFFLEVBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQjtRQUN6QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQy9ELGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLG1CQUFtQjtRQUMzRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDbEIsbUJBQW1CO1FBQ25CLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFD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LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uRGF0YSwgTWVzc2FnZSwgUGVybWlzc2lvblJlc29sdmFibGUsIFNub3dmbGFrZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XG5pbXBvcnQgQWthaXJvRXJyb3IgZnJvbSBcIi4uLy4uL3V0aWwvQWthaXJvRXJyb3JcIjtcbmltcG9ydCBBa2Fpcm9NZXNzYWdlIGZyb20gXCIuLi8uLi91dGlsL0FrYWlyb01lc3NhZ2VcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vLi4vdXRpbC9DYXRlZ29yeVwiO1xuaW1wb3J0IEFrYWlyb0NsaWVudCBmcm9tIFwiLi4vQWthaXJvQ2xpZW50XCI7XG5pbXBvcnQgQWthaXJvTW9kdWxlLCB7IEFrYWlyb01vZHVsZU9wdGlvbnMgfSBmcm9tIFwiLi4vQWthaXJvTW9kdWxlXCI7XG5pbXBvcnQgQXJndW1lbnQsIHsgQXJndW1lbnRPcHRpb25zLCBEZWZhdWx0QXJndW1lbnRPcHRpb25zIH0gZnJvbSBcIi4vYXJndW1lbnRzL0FyZ3VtZW50XCI7XG5pbXBvcnQgQXJndW1lbnRSdW5uZXIsIHsgQXJndW1lbnRSdW5uZXJTdGF0ZSB9IGZyb20gXCIuL2FyZ3VtZW50cy9Bcmd1bWVudFJ1bm5lclwiO1xuaW1wb3J0IENvbW1hbmRIYW5kbGVyLCB7IElnbm9yZUNoZWNrUHJlZGljYXRlLCBQcmVmaXhTdXBwbGllciB9IGZyb20gXCIuL0NvbW1hbmRIYW5kbGVyXCI7XG5pbXBvcnQgQ29udGVudFBhcnNlciwgeyBDb250ZW50UGFyc2VyUmVzdWx0IH0gZnJvbSBcIi4vQ29udGVudFBhcnNlclwiO1xuaW1wb3J0IEZsYWcgZnJvbSBcIi4vRmxhZ1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb21tYW5kLlxuICogQHBhcmFtIGlkIC0gQ29tbWFuZCBJRC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGNvbW1hbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbW1hbmQgZXh0ZW5kcyBBa2Fpcm9Nb2R1bGUge1xuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBvcHRpb25zPzogQ29tbWFuZE9wdGlvbnMpIHtcblx0XHRzdXBlcihpZCwgeyBjYXRlZ29yeTogb3B0aW9ucz8uY2F0ZWdvcnkgfSk7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRvbmx5TnNmdyA9IGZhbHNlLFxuXHRcdFx0YWxpYXNlcyA9IFtdLFxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvcjogb3RoZXJ3aXNlIGdlbmVyYXRvciBmdW5jdGlvbnMgYnJlYWtcblx0XHRcdGFyZ3MgPSB0aGlzLmFyZ3MgfHwgW10sXG5cdFx0XHRxdW90ZWQgPSB0cnVlLFxuXHRcdFx0c2VwYXJhdG9yLFxuXHRcdFx0Y2hhbm5lbCA9IG51bGwsXG5cdFx0XHRvd25lck9ubHkgPSBmYWxzZSxcblx0XHRcdHN1cGVyVXNlck9ubHkgPSBmYWxzZSxcblx0XHRcdGVkaXRhYmxlID0gdHJ1ZSxcblx0XHRcdHR5cGluZyA9IGZhbHNlLFxuXHRcdFx0Y29vbGRvd24gPSBudWxsLFxuXHRcdFx0cmF0ZWxpbWl0ID0gMSxcblx0XHRcdGFyZ3VtZW50RGVmYXVsdHMgPSB7fSxcblx0XHRcdGRlc2NyaXB0aW9uID0gXCJcIixcblx0XHRcdHByZWZpeCA9IHRoaXMucHJlZml4LCAvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRjbGllbnRQZXJtaXNzaW9ucyA9IHRoaXMuY2xpZW50UGVybWlzc2lvbnMsIC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdHVzZXJQZXJtaXNzaW9ucyA9IHRoaXMudXNlclBlcm1pc3Npb25zLCAvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRyZWdleCA9IHRoaXMucmVnZXgsXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbiB8fCAoKCkgPT4gZmFsc2UpLFxuXHRcdFx0YmVmb3JlID0gdGhpcy5iZWZvcmUgfHwgKCgpID0+IHVuZGVmaW5lZCksXG5cdFx0XHRsb2NrLFxuXHRcdFx0aWdub3JlQ29vbGRvd24sXG5cdFx0XHRpZ25vcmVQZXJtaXNzaW9ucyxcblx0XHRcdGZsYWdzID0gW10sXG5cdFx0XHRvcHRpb25GbGFncyA9IFtdLFxuXHRcdFx0c2xhc2ggPSBmYWxzZSxcblx0XHRcdHNsYXNoT3B0aW9ucyxcblx0XHRcdHNsYXNoRXBoZW1lcmFsID0gZmFsc2UsXG5cdFx0XHRzbGFzaEd1aWxkcyA9IFtdXG5cdFx0fTogQ29tbWFuZE9wdGlvbnMgPSBvcHRpb25zID8/IHt9O1xuXG5cdFx0dGhpcy5hbGlhc2VzID0gYWxpYXNlcyA/PyBbXTtcblxuXHRcdGNvbnN0IHsgZmxhZ1dvcmRzLCBvcHRpb25GbGFnV29yZHMgfSA9IEFycmF5LmlzQXJyYXkoYXJncylcblx0XHRcdD8gQ29udGVudFBhcnNlci5nZXRGbGFncyhhcmdzKVxuXHRcdFx0OiB7IGZsYWdXb3JkczogZmxhZ3MsIG9wdGlvbkZsYWdXb3Jkczogb3B0aW9uRmxhZ3MgfTtcblxuXHRcdHRoaXMuY29udGVudFBhcnNlciA9IG5ldyBDb250ZW50UGFyc2VyKHtcblx0XHRcdGZsYWdXb3Jkcyxcblx0XHRcdG9wdGlvbkZsYWdXb3Jkcyxcblx0XHRcdHF1b3RlZCxcblx0XHRcdHNlcGFyYXRvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hcmd1bWVudFJ1bm5lciA9IG5ldyBBcmd1bWVudFJ1bm5lcih0aGlzKTtcblx0XHR0aGlzLmFyZ3VtZW50R2VuZXJhdG9yID0gKFxuXHRcdFx0QXJyYXkuaXNBcnJheShhcmdzKVxuXHRcdFx0XHQ/IEFyZ3VtZW50UnVubmVyLmZyb21Bcmd1bWVudHMoXG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdFx0XHRhcmdzLm1hcChhcmcgPT4gW2FyZy5pZCwgbmV3IEFyZ3VtZW50KHRoaXMsIGFyZyldKVxuXHRcdFx0XHQgIClcblx0XHRcdFx0OiBhcmdzLmJpbmQodGhpcylcblx0XHQpIGFzIEFyZ3VtZW50R2VuZXJhdG9yO1xuXG5cdFx0dGhpcy5vbmx5TnNmdyA9IEJvb2xlYW4ob25seU5zZncpO1xuXG5cdFx0dGhpcy5jaGFubmVsID0gY2hhbm5lbDtcblxuXHRcdHRoaXMub3duZXJPbmx5ID0gQm9vbGVhbihvd25lck9ubHkpO1xuXG5cdFx0dGhpcy5zdXBlclVzZXJPbmx5ID0gQm9vbGVhbihzdXBlclVzZXJPbmx5KTtcblxuXHRcdHRoaXMuZWRpdGFibGUgPSBCb29sZWFuKGVkaXRhYmxlKTtcblxuXHRcdHRoaXMudHlwaW5nID0gQm9vbGVhbih0eXBpbmcpO1xuXG5cdFx0dGhpcy5jb29sZG93biA9IGNvb2xkb3duO1xuXG5cdFx0dGhpcy5yYXRlbGltaXQgPSByYXRlbGltaXQ7XG5cblx0XHR0aGlzLmFyZ3VtZW50RGVmYXVsdHMgPSBhcmd1bWVudERlZmF1bHRzO1xuXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb24pID8gZGVzY3JpcHRpb24uam9pbihcIlxcblwiKSA6IGRlc2NyaXB0aW9uO1xuXG5cdFx0dGhpcy5wcmVmaXggPSB0eXBlb2YgcHJlZml4ID09PSBcImZ1bmN0aW9uXCIgPyBwcmVmaXguYmluZCh0aGlzKSA6IHByZWZpeDtcblxuXHRcdHRoaXMuY2xpZW50UGVybWlzc2lvbnMgPSB0eXBlb2YgY2xpZW50UGVybWlzc2lvbnMgPT09IFwiZnVuY3Rpb25cIiA/IGNsaWVudFBlcm1pc3Npb25zLmJpbmQodGhpcykgOiBjbGllbnRQZXJtaXNzaW9ucztcblxuXHRcdHRoaXMudXNlclBlcm1pc3Npb25zID0gdHlwZW9mIHVzZXJQZXJtaXNzaW9ucyA9PT0gXCJmdW5jdGlvblwiID8gdXNlclBlcm1pc3Npb25zLmJpbmQodGhpcykgOiB1c2VyUGVybWlzc2lvbnM7XG5cblx0XHR0aGlzLnJlZ2V4ID0gdHlwZW9mIHJlZ2V4ID09PSBcImZ1bmN0aW9uXCIgPyByZWdleC5iaW5kKHRoaXMpIDogcmVnZXg7XG5cblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbi5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5iZWZvcmUgPSBiZWZvcmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMubG9jayA9IGxvY2s7XG5cblx0XHRpZiAodHlwZW9mIGxvY2sgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRoaXMubG9jayA9IHtcblx0XHRcdFx0Z3VpbGQ6IChtZXNzYWdlOiBNZXNzYWdlIHwgQWthaXJvTWVzc2FnZSk6IHN0cmluZyA9PiBtZXNzYWdlLmd1aWxkISAmJiBtZXNzYWdlLmd1aWxkLmlkISxcblx0XHRcdFx0Y2hhbm5lbDogKG1lc3NhZ2U6IE1lc3NhZ2UgfCBBa2Fpcm9NZXNzYWdlKTogc3RyaW5nID0+IG1lc3NhZ2UuY2hhbm5lbCEuaWQsXG5cdFx0XHRcdHVzZXI6IChtZXNzYWdlOiBNZXNzYWdlIHwgQWthaXJvTWVzc2FnZSk6IHN0cmluZyA9PiBtZXNzYWdlLmF1dGhvci5pZFxuXHRcdFx0fVtsb2NrXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5sb2NrKSB7XG5cdFx0XHR0aGlzLmxvY2tlciA9IG5ldyBTZXQoKTtcblx0XHR9XG5cblx0XHR0aGlzLmlnbm9yZUNvb2xkb3duID0gdHlwZW9mIGlnbm9yZUNvb2xkb3duID09PSBcImZ1bmN0aW9uXCIgPyBpZ25vcmVDb29sZG93bi5iaW5kKHRoaXMpIDogaWdub3JlQ29vbGRvd247XG5cblx0XHR0aGlzLmlnbm9yZVBlcm1pc3Npb25zID0gdHlwZW9mIGlnbm9yZVBlcm1pc3Npb25zID09PSBcImZ1bmN0aW9uXCIgPyBpZ25vcmVQZXJtaXNzaW9ucy5iaW5kKHRoaXMpIDogaWdub3JlUGVybWlzc2lvbnM7XG5cblx0XHR0aGlzLnNsYXNoT3B0aW9ucyA9IHNsYXNoT3B0aW9ucztcblxuXHRcdHRoaXMuc2xhc2hFcGhlbWVyYWwgPSBzbGFzaEVwaGVtZXJhbDtcblxuXHRcdHRoaXMuc2xhc2ggPSBzbGFzaDtcblxuXHRcdHRoaXMuc2xhc2hHdWlsZHMgPSBzbGFzaEd1aWxkcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21tYW5kIG5hbWVzLlxuXHQgKi9cblx0cHVibGljIGFsaWFzZXM6IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IHByb21wdCBvcHRpb25zLlxuXHQgKi9cblx0cHVibGljIGFyZ3VtZW50RGVmYXVsdHM6IERlZmF1bHRBcmd1bWVudE9wdGlvbnM7XG5cblx0LyoqXG5cdCAqIENhdGVnb3J5IHRoZSBjb21tYW5kIGJlbG9uZ3MgdG8uXG5cdCAqL1xuXHRwdWJsaWMgZGVjbGFyZSBjYXRlZ29yeTogQ2F0ZWdvcnk8c3RyaW5nLCBDb21tYW5kPjtcblxuXHQvKipcblx0ICogVXNhYmxlIG9ubHkgaW4gdGhpcyBjaGFubmVsIHR5cGUuXG5cdCAqL1xuXHRwdWJsaWMgY2hhbm5lbD86IHN0cmluZyB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBBa2Fpcm8gY2xpZW50LlxuXHQgKi9cblx0cHVibGljIGRlY2xhcmUgY2xpZW50OiBBa2Fpcm9DbGllbnQ7XG5cblx0LyoqXG5cdCAqIFBlcm1pc3Npb25zIHJlcXVpcmVkIHRvIHJ1biBjb21tYW5kIGJ5IHRoZSBjbGllbnQuXG5cdCAqL1xuXHRwdWJsaWMgY2xpZW50UGVybWlzc2lvbnM6IFBlcm1pc3Npb25SZXNvbHZhYmxlIHwgUGVybWlzc2lvblJlc29sdmFibGVbXSB8IE1pc3NpbmdQZXJtaXNzaW9uU3VwcGxpZXI7XG5cblx0LyoqXG5cdCAqIENvb2xkb3duIGluIG1pbGxpc2Vjb25kcy5cblx0ICovXG5cdHB1YmxpYyBjb29sZG93bj86IG51bWJlciB8IG51bGw7XG5cblx0LyoqXG5cdCAqIERlc2NyaXB0aW9uIG9mIHRoZSBjb21tYW5kLlxuXHQgKi9cblx0cHVibGljIGRlc2NyaXB0aW9uOiBhbnk7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRoaXMgY29tbWFuZCBjYW4gYmUgcmFuIGJ5IGFuIGVkaXQuXG5cdCAqL1xuXHRwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBmaWxlcGF0aC5cblx0ICovXG5cdHB1YmxpYyBkZWNsYXJlIGZpbGVwYXRoOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBoYW5kbGVyLlxuXHQgKi9cblx0cHVibGljIGRlY2xhcmUgaGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XG5cblx0LyoqXG5cdCAqIFRoZSBJRCBvZiB0aGUgY29tbWFuZC5cblx0ICovXG5cdHB1YmxpYyBkZWNsYXJlIGlkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIElEIG9mIHVzZXIocykgdG8gaWdub3JlIGNvb2xkb3duIG9yIGEgZnVuY3Rpb24gdG8gaWdub3JlLlxuXHQgKi9cblx0cHVibGljIGlnbm9yZUNvb2xkb3duPzogU25vd2ZsYWtlIHwgU25vd2ZsYWtlW10gfCBJZ25vcmVDaGVja1ByZWRpY2F0ZTtcblxuXHQvKipcblx0ICogSUQgb2YgdXNlcihzKSB0byBpZ25vcmUgYHVzZXJQZXJtaXNzaW9uc2AgY2hlY2tzIG9yIGEgZnVuY3Rpb24gdG8gaWdub3JlLlxuXHQgKi9cblx0cHVibGljIGlnbm9yZVBlcm1pc3Npb25zPzogU25vd2ZsYWtlIHwgU25vd2ZsYWtlW10gfCBJZ25vcmVDaGVja1ByZWRpY2F0ZTtcblxuXHQvKipcblx0ICogVGhlIGtleSBzdXBwbGllciBmb3IgdGhlIGxvY2tlci5cblx0ICovXG5cdHB1YmxpYyBsb2NrPzogS2V5U3VwcGxpZXIgfCBcImNoYW5uZWxcIiB8IFwiZ3VpbGRcIiB8IFwidXNlclwiO1xuXG5cdC8qKlxuXHQgKiBTdG9yZXMgdGhlIGN1cnJlbnQgbG9ja3MuXG5cdCAqL1xuXHRwdWJsaWMgbG9ja2VyPzogU2V0PHN0cmluZz47XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb21tYW5kIGNhbiBvbmx5IGJlIHJ1biBpbiAgTlNGVyBjaGFubmVscy5cblx0ICovXG5cdHB1YmxpYyBvbmx5TnNmdzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVXNhYmxlIG9ubHkgYnkgdGhlIGNsaWVudCBvd25lci5cblx0ICovXG5cdHB1YmxpYyBvd25lck9ubHk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIENvbW1hbmQgcHJlZml4IG92ZXJ3cml0ZS5cblx0ICovXG5cdHB1YmxpYyBwcmVmaXg/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFByZWZpeFN1cHBsaWVyO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0byBjb25zaWRlciBxdW90ZXMuXG5cdCAqL1xuXHRwdWJsaWMgcXVvdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBVc2VzIGFsbG93ZWQgYmVmb3JlIGNvb2xkb3duLlxuXHQgKi9cblx0cHVibGljIHJhdGVsaW1pdDogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBUaGUgcmVnZXggdHJpZ2dlciBmb3IgdGhpcyBjb21tYW5kLlxuXHQgKi9cblx0cHVibGljIHJlZ2V4OiBSZWdFeHAgfCBSZWdleFN1cHBsaWVyO1xuXG5cdC8qKlxuXHQgKiBNYXJrIGNvbW1hbmQgYXMgc2xhc2ggY29tbWFuZCBhbmQgc2V0IGluZm9ybWF0aW9uLlxuXHQgKi9cblx0cHVibGljIHNsYXNoPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogV2hldGhlciBzbGFzaCBjb21tYW5kIHJlc3BvbnNlcyBmb3IgdGhpcyBjb21tYW5kIHNob3VsZCBiZSBlcGhlbWVyYWwgb3Igbm90LlxuXHQgKi9cblx0cHVibGljIHNsYXNoRXBoZW1lcmFsPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQXNzaWduIHNsYXNoIGNvbW1hbmRzIHRvIFNwZWNpZmljIGd1aWxkcy4gVGhpcyBvcHRpb24gd2lsbCBtYWtlIHRoZSBjb21tYW5kcyBub3QgcmVnaXN0ZXIgZ2xvYmFsbHksIGJ1dCBvbmx5IGluIHRoZSBjaG9zZW4gc2VydmVycy5cblx0ICovXG5cdHB1YmxpYyBzbGFzaEd1aWxkcz86IFNub3dmbGFrZVtdO1xuXG5cdC8qKlxuXHQgKiBPcHRpb25zIGZvciB1c2luZyB0aGUgc2xhc2ggY29tbWFuZC5cblx0ICovXG5cdHB1YmxpYyBzbGFzaE9wdGlvbnM/OiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25EYXRhW107XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRvIGFsbG93IGNsaWVudCBzdXBlclVzZXJzKHMpIG9ubHkuXG5cdCAqL1xuXHRwdWJsaWMgc3VwZXJVc2VyT25seTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gdHlwZSBkdXJpbmcgY29tbWFuZCBleGVjdXRpb24uXG5cdCAqL1xuXHRwdWJsaWMgdHlwaW5nOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBQZXJtaXNzaW9ucyByZXF1aXJlZCB0byBydW4gY29tbWFuZCBieSB0aGUgdXNlci5cblx0ICovXG5cdHB1YmxpYyB1c2VyUGVybWlzc2lvbnM6IFBlcm1pc3Npb25SZXNvbHZhYmxlIHwgUGVybWlzc2lvblJlc29sdmFibGVbXSB8IE1pc3NpbmdQZXJtaXNzaW9uU3VwcGxpZXI7XG5cblx0LyoqXG5cdCAqIEFyZ3VtZW50IG9wdGlvbnMgb3IgZ2VuZXJhdG9yLlxuXHQgKi9cblx0Ly8gcHVibGljIGFyZ3M6IEFyZ3VtZW50T3B0aW9uc1tdIHwgQXJndW1lbnRHZW5lcmF0b3I7XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZW50IHBhcnNlci5cblx0ICovXG5cdHB1YmxpYyBjb250ZW50UGFyc2VyOiBDb250ZW50UGFyc2VyO1xuXG5cdC8qKlxuXHQgKiBUaGUgYXJndW1lbnQgcnVubmVyLlxuXHQgKi9cblx0cHVibGljIGFyZ3VtZW50UnVubmVyOiBBcmd1bWVudFJ1bm5lcjtcblxuXHQvKipcblx0ICogR2VuZXJhdG9yIGZvciBhcmd1bWVudHMuXG5cdCAqL1xuXHRwdWJsaWMgYXJndW1lbnRHZW5lcmF0b3I6IEFyZ3VtZW50R2VuZXJhdG9yO1xuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICogQHBhcmFtIG1lc3NhZ2UgLSBNZXNzYWdlIHRoYXQgdHJpZ2dlcmVkIHRoZSBjb21tYW5kLlxuXHQgKiBAcGFyYW0gYXJncyAtIEV2YWx1YXRlZCBhcmd1bWVudHMuXG5cdCAqL1xuXHQvKiBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCBhcmdzOiBhbnkpOiBhbnk7ICovXG5cdHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UgfCBBa2Fpcm9NZXNzYWdlLCBhcmdzOiBhbnkpOiBhbnkge1xuXHRcdHRocm93IG5ldyBBa2Fpcm9FcnJvcihcIk5PVF9JTVBMRU1FTlRFRFwiLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIFwiZXhlY1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSdW5zIGJlZm9yZSBhcmd1bWVudCBwYXJzaW5nIGFuZCBleGVjdXRpb24uXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBiZWluZyBoYW5kbGVkLlxuXHQgKi9cblx0cHVibGljIGJlZm9yZShtZXNzYWdlOiBNZXNzYWdlKTogYW55IHt9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgY29tbWFuZCBzaG91bGQgYmUgcmFuIGJ5IHVzaW5nIGFuIGFyYml0cmFyeSBjb25kaXRpb24uXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBiZWluZyBoYW5kbGVkLlxuXHQgKi9cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRwdWJsaWMgY29uZGl0aW9uKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiB7fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlIHRoZSBzbGFzaCBjb21tYW5kXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBmb3Igc2xhc2ggY29tbWFuZFxuXHQgKiBAcGFyYW0gYXJncyAtIFNsYXNoIGNvbW1hbmQgb3B0aW9uc1xuXHQgKi9cblx0cHVibGljIGV4ZWNTbGFzaChtZXNzYWdlOiBBa2Fpcm9NZXNzYWdlLCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0aWYgKHRoaXMuc2xhc2gpIHtcblx0XHRcdHRocm93IG5ldyBBa2Fpcm9FcnJvcihcIk5PVF9JTVBMRU1FTlRFRFwiLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIFwiZXhlY1NsYXNoXCIpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgY29udGVudCB1c2luZyB0aGUgY29tbWFuZCdzIGFyZ3VtZW50cy5cblx0ICogQHBhcmFtIG1lc3NhZ2UgLSBNZXNzYWdlIHRvIHVzZS5cblx0ICogQHBhcmFtIGNvbnRlbnQgLSBTdHJpbmcgdG8gcGFyc2UuXG5cdCAqL1xuXHRwdWJsaWMgcGFyc2UobWVzc2FnZTogTWVzc2FnZSwgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxGbGFnIHwgYW55PiB7XG5cdFx0Y29uc3QgcGFyc2VkID0gdGhpcy5jb250ZW50UGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXHRcdHJldHVybiB0aGlzLmFyZ3VtZW50UnVubmVyLnJ1bihtZXNzYWdlLCBwYXJzZWQsIHRoaXMuYXJndW1lbnRHZW5lcmF0b3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbG9hZHMgdGhlIGNvbW1hbmQuXG5cdCAqL1xuXHRwdWJsaWMgb3ZlcnJpZGUgcmVsb2FkKCk6IENvbW1hbmQge1xuXHRcdHJldHVybiBzdXBlci5yZWxvYWQoKSBhcyBDb21tYW5kO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIGNvbW1hbmQuXG5cdCAqL1xuXHRwdWJsaWMgb3ZlcnJpZGUgcmVtb3ZlKCk6IENvbW1hbmQge1xuXHRcdHJldHVybiBzdXBlci5yZW1vdmUoKSBhcyBDb21tYW5kO1xuXHR9XG59XG5cbi8qKlxuICogT3B0aW9ucyB0byB1c2UgZm9yIGNvbW1hbmQgZXhlY3V0aW9uIGJlaGF2aW9yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRPcHRpb25zIGV4dGVuZHMgQWthaXJvTW9kdWxlT3B0aW9ucyB7XG5cdC8qKlxuXHQgKiBDb21tYW5kIG5hbWVzLlxuXHQgKi9cblx0YWxpYXNlcz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBBcmd1bWVudCBvcHRpb25zIG9yIGdlbmVyYXRvci5cblx0ICovXG5cdGFyZ3M/OiBBcmd1bWVudE9wdGlvbnNbXSB8IEFyZ3VtZW50R2VuZXJhdG9yO1xuXG5cdC8qKlxuXHQgKiBUaGUgZGVmYXVsdCBhcmd1bWVudCBvcHRpb25zLlxuXHQgKi9cblx0YXJndW1lbnREZWZhdWx0cz86IERlZmF1bHRBcmd1bWVudE9wdGlvbnM7XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uIHRvIHJ1biBiZWZvcmUgYXJndW1lbnQgcGFyc2luZyBhbmQgZXhlY3V0aW9uLlxuXHQgKi9cblx0YmVmb3JlPzogQmVmb3JlQWN0aW9uO1xuXG5cdC8qKlxuXHQgKiBSZXN0cmljdHMgY2hhbm5lbCB0byBlaXRoZXIgJ2d1aWxkJyBvciAnZG0nLlxuXHQgKi9cblx0Y2hhbm5lbD86IFwiZ3VpbGRcIiB8IFwiZG1cIiB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFBlcm1pc3Npb25zIHJlcXVpcmVkIGJ5IHRoZSBjbGllbnQgdG8gcnVuIHRoaXMgY29tbWFuZC5cblx0ICovXG5cdGNsaWVudFBlcm1pc3Npb25zPzogUGVybWlzc2lvblJlc29sdmFibGUgfCBQZXJtaXNzaW9uUmVzb2x2YWJsZVtdIHwgTWlzc2luZ1Blcm1pc3Npb25TdXBwbGllcjtcblxuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gcnVuIG9uIG1lc3NhZ2VzIHRoYXQgYXJlIG5vdCBkaXJlY3RseSBjb21tYW5kcy5cblx0ICovXG5cdGNvbmRpdGlvbj86IEV4ZWN1dGlvblByZWRpY2F0ZTtcblxuXHQvKipcblx0ICogVGhlIGNvbW1hbmQgY29vbGRvd24gaW4gbWlsbGlzZWNvbmRzLlxuXHQgKi9cblx0Y29vbGRvd24/OiBudW1iZXIgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBEZXNjcmlwdGlvbiBvZiB0aGUgY29tbWFuZC5cblx0ICovXG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgYW55IHwgYW55W107XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IG1lc3NhZ2UgZWRpdHMgd2lsbCBydW4gdGhpcyBjb21tYW5kLlxuXHQgKi9cblx0ZWRpdGFibGU/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBGbGFncyB0byB1c2Ugd2hlbiB1c2luZyBhbiBBcmd1bWVudEdlbmVyYXRvclxuXHQgKi9cblx0ZmxhZ3M/OiBzdHJpbmdbXTtcblxuXHQvKipcblx0ICogSUQgb2YgdXNlcihzKSB0byBpZ25vcmUgY29vbGRvd24gb3IgYSBmdW5jdGlvbiB0byBpZ25vcmUuXG5cdCAqL1xuXHRpZ25vcmVDb29sZG93bj86IFNub3dmbGFrZSB8IFNub3dmbGFrZVtdIHwgSWdub3JlQ2hlY2tQcmVkaWNhdGU7XG5cblx0LyoqXG5cdCAqIElEIG9mIHVzZXIocykgdG8gaWdub3JlIGB1c2VyUGVybWlzc2lvbnNgIGNoZWNrcyBvciBhIGZ1bmN0aW9uIHRvIGlnbm9yZS5cblx0ICovXG5cdGlnbm9yZVBlcm1pc3Npb25zPzogU25vd2ZsYWtlIHwgU25vd2ZsYWtlW10gfCBJZ25vcmVDaGVja1ByZWRpY2F0ZTtcblxuXHQvKipcblx0ICogVGhlIGtleSB0eXBlIG9yIGtleSBnZW5lcmF0b3IgZm9yIHRoZSBsb2NrZXIuIElmIGxvY2sgaXMgYSBzdHJpbmcsIGl0J3MgZXhwZWN0ZWQgb25lIG9mICdndWlsZCcsICdjaGFubmVsJywgb3IgJ3VzZXInXG5cdCAqL1xuXHRsb2NrPzogS2V5U3VwcGxpZXIgfCBcImd1aWxkXCIgfCBcImNoYW5uZWxcIiB8IFwidXNlclwiO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0byBvbmx5IGFsbG93IHRoZSBjb21tYW5kIHRvIGJlIHJ1biBpbiBOU0ZXIGNoYW5uZWxzLlxuXHQgKi9cblx0b25seU5zZnc/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBPcHRpb24gZmxhZ3MgdG8gdXNlIHdoZW4gdXNpbmcgYW4gQXJndW1lbnRHZW5lcmF0b3IuXG5cdCAqL1xuXHRvcHRpb25GbGFncz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBjbGllbnQgb3duZXIocykgb25seS5cblx0ICovXG5cdG93bmVyT25seT86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBwcmVmaXgoZXMpIHRvIG92ZXJ3cml0ZSB0aGUgZ2xvYmFsIG9uZSBmb3IgdGhpcyBjb21tYW5kLlxuXHQgKi9cblx0cHJlZml4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBQcmVmaXhTdXBwbGllcjtcblxuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gY29uc2lkZXIgcXVvdGVzLlxuXHQgKi9cblx0cXVvdGVkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQW1vdW50IG9mIGNvbW1hbmQgdXNlcyBhbGxvd2VkIHVudGlsIGNvb2xkb3duLlxuXHQgKi9cblx0cmF0ZWxpbWl0PzogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBBIHJlZ2V4IHRvIG1hdGNoIGluIG1lc3NhZ2VzIHRoYXQgYXJlIG5vdCBkaXJlY3RseSBjb21tYW5kcy4gVGhlIGFyZ3Mgb2JqZWN0IHdpbGwgaGF2ZSBgbWF0Y2hgIGFuZCBgbWF0Y2hlc2AgcHJvcGVydGllcy5cblx0ICovXG5cdHJlZ2V4PzogUmVnRXhwIHwgUmVnZXhTdXBwbGllcjtcblxuXHQvKipcblx0ICogQ3VzdG9tIHNlcGFyYXRvciBmb3IgYXJndW1lbnQgaW5wdXQuXG5cdCAqL1xuXHRzZXBhcmF0b3I/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIE1hcmsgY29tbWFuZCBhcyBzbGFzaCBjb21tYW5kIGFuZCBzZXQgaW5mb3JtYXRpb24uXG5cdCAqL1xuXHRzbGFzaD86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgc2xhc2ggY29tbWFuZCByZXNwb25zZXMgZm9yIHRoaXMgY29tbWFuZCBzaG91bGQgYmUgZXBoZW1lcmFsIG9yIG5vdC5cblx0ICovXG5cdHNsYXNoRXBoZW1lcmFsPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQXNzaWduIHNsYXNoIGNvbW1hbmRzIHRvIFNwZWNpZmljIGd1aWxkcy4gVGhpcyBvcHRpb24gd2lsbCBtYWtlIHRoZSBjb21tYW5kcyBkbyBub3QgcmVnaXN0ZXIgZ2xvYmFsbHksIGJ1dCBvbmx5IHRvIHRoZSBjaG9zZW4gc2VydmVycy5cblx0ICovXG5cdHNsYXNoR3VpbGRzPzogc3RyaW5nW107XG5cblx0LyoqXG5cdCAqIE9wdGlvbnMgZm9yIHVzaW5nIHRoZSBzbGFzaCBjb21tYW5kLlxuXHQgKi9cblx0c2xhc2hPcHRpb25zPzogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uRGF0YVtdO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBjbGllbnQgc3VwZXJVc2VycyhzKSBvbmx5LlxuXHQgKi9cblx0c3VwZXJVc2VyT25seT86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRvIHR5cGUgaW4gY2hhbm5lbCBkdXJpbmcgZXhlY3V0aW9uLlxuXHQgKi9cblx0dHlwaW5nPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogUGVybWlzc2lvbnMgcmVxdWlyZWQgYnkgdGhlIHVzZXIgdG8gcnVuIHRoaXMgY29tbWFuZC5cblx0ICovXG5cdHVzZXJQZXJtaXNzaW9ucz86IFBlcm1pc3Npb25SZXNvbHZhYmxlIHwgUGVybWlzc2lvblJlc29sdmFibGVbXSB8IE1pc3NpbmdQZXJtaXNzaW9uU3VwcGxpZXI7XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIGFyZ3VtZW50IHBhcnNpbmcgYW5kIGV4ZWN1dGlvbi5cbiAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSB0aGF0IHRyaWdnZXJlZCB0aGUgY29tbWFuZC5cbiAqL1xuZXhwb3J0IHR5cGUgQmVmb3JlQWN0aW9uID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IGFueTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHVzZWQgdG8gc3VwcGx5IHRoZSBrZXkgZm9yIHRoZSBsb2NrZXIuXG4gKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2UgdGhhdCB0cmlnZ2VyZWQgdGhlIGNvbW1hbmQuXG4gKiBAcGFyYW0gYXJncyAtIEV2YWx1YXRlZCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCB0eXBlIEtleVN1cHBsaWVyID0gKG1lc3NhZ2U6IE1lc3NhZ2UgfCBBa2Fpcm9NZXNzYWdlLCBhcmdzOiBhbnkpID0+IHN0cmluZztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHVzZWQgdG8gY2hlY2sgaWYgdGhlIGNvbW1hbmQgc2hvdWxkIHJ1biBhcmJpdHJhcmlseS5cbiAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSB0byBjaGVjay5cbiAqL1xuZXhwb3J0IHR5cGUgRXhlY3V0aW9uUHJlZGljYXRlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IGJvb2xlYW47XG5cbi8qKlxuICogQSBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIGEgbWVzc2FnZSBoYXMgcGVybWlzc2lvbnMgZm9yIHRoZSBjb21tYW5kLlxuICogQSBub24tbnVsbCByZXR1cm4gdmFsdWUgc2lnbmlmaWVzIHRoZSByZWFzb24gZm9yIG1pc3NpbmcgcGVybWlzc2lvbnMuXG4gKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2UgdGhhdCB0cmlnZ2VyZWQgdGhlIGNvbW1hbmQuXG4gKi9cbmV4cG9ydCB0eXBlIE1pc3NpbmdQZXJtaXNzaW9uU3VwcGxpZXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gUHJvbWlzZTxhbnk+IHwgYW55O1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdXNlZCB0byByZXR1cm4gYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2UgdG8gZ2V0IHJlZ2V4IGZvci5cbiAqL1xuZXhwb3J0IHR5cGUgUmVnZXhTdXBwbGllciA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBSZWdFeHA7XG5cbi8qKlxuICogR2VuZXJhdG9yIGZvciBhcmd1bWVudHMuXG4gKiBXaGVuIHlpZWxkaW5nIGFyZ3VtZW50IG9wdGlvbnMsIHRoYXQgYXJndW1lbnQgaXMgcmFuIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBwcm9jZXNzaW5nIGlzIGdpdmVuLlxuICogVGhlIGxhc3QgdmFsdWUgd2hlbiB0aGUgZ2VuZXJhdG9yIGlzIGRvbmUgaXMgdGhlIHJlc3VsdGluZyBgYXJnc2AgZm9yIHRoZSBjb21tYW5kJ3MgYGV4ZWNgLlxuICogQHBhcmFtIG1lc3NhZ2UgLSBNZXNzYWdlIHRoYXQgdHJpZ2dlcmVkIHRoZSBjb21tYW5kLlxuICogQHBhcmFtIHBhcnNlZCAtIFBhcnNlZCBjb250ZW50LlxuICogQHBhcmFtIHN0YXRlIC0gQXJndW1lbnQgcHJvY2Vzc2luZyBzdGF0ZS5cbiAqL1xuZXhwb3J0IHR5cGUgQXJndW1lbnRHZW5lcmF0b3IgPSAoXG5cdG1lc3NhZ2U6IE1lc3NhZ2UsXG5cdHBhcnNlZDogQ29udGVudFBhcnNlclJlc3VsdCxcblx0c3RhdGU6IEFyZ3VtZW50UnVubmVyU3RhdGVcbikgPT4gSXRlcmFibGVJdGVyYXRvcjxBcmd1bWVudE9wdGlvbnMgfCBGbGFnPjtcbiJdfQ==