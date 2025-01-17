<!-- markdownlint-disable MD001 -->

# Using Functions

### Dynamic Defaults

When you are doing default values for certain arguments, you could really only do what JavaScript has to offer: numbers, strings, etc.  
What if we want to use a default such as the author's username or the guild's owner?  
This is where you can use a function.

```ts
import { Command } from "discord-akairo";
import { GuildMember, Message } from "discord.js";

export default class HighestRoleCommand extends Command {
  public constructor() {
    super("highestRole", {
      aliases: ["highestRole"],
      args: [
        {
          id: "member",
          type: "member",
          default: (message: Message) => message.member
        }
      ],
      channel: "guild"
    });
  }

  public override exec(message: Message, args: { member: GuildMember }): Promise<Message> {
    return message.reply(args.member.roles.highest.name);
  }
}
```

The command above gives the name of the inputted member's highest role.  
If there were no member or an incorrect member provided, the `default` function is called, giving us the message member.

### Dynamic Types

Let's go to using a function for types.  
Take a look at the roll command below.

```ts
import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class RollCommand extends Command {
  public constructor() {
    super("roll", {
      aliases: ["roll"],
      args: [
        {
          id: "amount",
          type: "integer",
          default: 100
        }
      ]
    });
  }

  public override exec(message: Message, args: { amount: number }): Promise<Message> {
    const res = Math.floor(Math.random() * args.amount);
    return message.reply(`You rolled ${res}!`);
  }
}
```

Let's say we want to limit the user to between 1 and 100, so that there are no giant numbers.  
While we could do it in the execution function, let's stick it straight into the type as a function.  
This is much easier with a validation type (see [Composing Types](./compose.md)), but for the sake of example, let's do it anyways.

```ts
import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class RollCommand extends Command {
  public constructor() {
    super("roll", {
      aliases: ["roll"],
      args: [
        {
          id: "amount",
          type: (message: Message, phrase) => {
            if (!phrase || isNaN(phrase)) return null;
            const num = parseInt(phrase);
            if (num < 1 || num > 100) return null;
            return num;
          },
          default: 100
        }
      ]
    });
  }

  public override exec(message: Message, args: { amount: number }): Promise<Message> {
    const res = Math.floor(Math.random() * args.amount);
    return message.reply(`You rolled ${res}!`);
  }
}
```

The type function follows these steps:

1. Check if there was input.
2. Check if input is not a number.
3. Parse input to an integer.
4. Check if the integer is out of bounds.
5. Return the integer.

Whenever a `null` or `undefined` value is returned, it means the type casting failed, and the default will be used.  
Otherwise, whatever you return is the result.  
Promise are awaited and the resolved value will go through the same process.

### A Bit Further

Type functions can be used almost anywhere a type is expected.  
This includes the types builders in the [Composing Types](./compose.md) section.  
Take a look at this slightly exaggerated example for a type for a page argument:

```ts
args: [
  {
    id: "page",
    type: Argument.compose(Argument.range("integer", 0, Infinity), n => n - 1)
  }
];
```

This casts the input to an integer, ensure it is at least 0, and decrements it by 1.
