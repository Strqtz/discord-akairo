"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGluZ3MvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSW50ZXJhY3Rpb24sIENvbnRleHRNZW51SW50ZXJhY3Rpb24sIE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuaW1wb3J0IEFrYWlyb01vZHVsZSBmcm9tIFwiLi4vc3RydWN0L0FrYWlyb01vZHVsZVwiO1xuaW1wb3J0IENvbW1hbmQgZnJvbSBcIi4uL3N0cnVjdC9jb21tYW5kcy9Db21tYW5kXCI7XG5pbXBvcnQgQ29udGV4dE1lbnVDb21tYW5kIGZyb20gXCIuLi9zdHJ1Y3QvY29udGV4dE1lbnVDb21tYW5kcy9Db250ZXh0TWVudUNvbW1hbmRcIjtcbmltcG9ydCBJbmhpYml0b3IgZnJvbSBcIi4uL3N0cnVjdC9pbmhpYml0b3JzL0luaGliaXRvclwiO1xuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuLi9zdHJ1Y3QvbGlzdGVuZXJzL0xpc3RlbmVyXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vc3RydWN0L3Rhc2tzL1Rhc2tcIjtcbmltcG9ydCBBa2Fpcm9NZXNzYWdlIGZyb20gXCIuLi91dGlsL0FrYWlyb01lc3NhZ2VcIjtcbmltcG9ydCB7IEJ1aWx0SW5SZWFzb25zIH0gZnJvbSBcIi4uL3V0aWwvQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWthaXJvSGFuZGxlckV2ZW50cyB7XG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBtb2R1bGUgaXMgbG9hZGVkLlxuXHQgKiBAcGFyYW0gbW9kIC0gTW9kdWxlIGxvYWRlZC5cblx0ICogQHBhcmFtIGlzUmVsb2FkIC0gV2hldGhlciBvciBub3QgdGhpcyB3YXMgYSByZWxvYWQuXG5cdCAqL1xuXHRsb2FkOiBbbW9kOiBBa2Fpcm9Nb2R1bGUsIGlzUmVsb2FkOiBib29sZWFuXTtcblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIG1vZHVsZSBpcyByZW1vdmVkLlxuXHQgKiBAcGFyYW0gbW9kIC0gTW9kdWxlIHJlbW92ZWQuXG5cdCAqL1xuXHRyZW1vdmU6IFttb2Q6IEFrYWlyb01vZHVsZV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZEhhbmRsZXJFdmVudHMgZXh0ZW5kcyBBa2Fpcm9IYW5kbGVyRXZlbnRzIHtcblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgaXMgYmxvY2tlZCBieSBhIHBvc3QtbWVzc2FnZSBpbmhpYml0b3IuIFRoZSBidWlsdC1pbiBpbmhpYml0b3JzIGFyZSBgb3duZXJgLCBgc3VwZXJVc2VyYCwgYGd1aWxkYCwgYW5kIGBkbWAuXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBzZW50LlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgYmxvY2tlZC5cblx0ICogQHBhcmFtIHJlYXNvbiAtIFJlYXNvbiBmb3IgdGhlIGJsb2NrLlxuXHQgKi9cblx0Y29tbWFuZEJsb2NrZWQ6IFttZXNzYWdlOiBNZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kLCByZWFzb246IHR5cGVvZiBCdWlsdEluUmVhc29ucyB8IHN0cmluZ107XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgYnJlYWtzIG91dCB3aXRoIGEgcmV0cnkgcHJvbXB0LlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGJlaW5nIGJyb2tlbiBvdXQuXG5cdCAqIEBwYXJhbSBicmVha01lc3NhZ2UgLSBCcmVha291dCBtZXNzYWdlLlxuXHQgKi9cblx0Y29tbWFuZEJyZWFrb3V0OiBbbWVzc2FnZTogTWVzc2FnZSwgY29tbWFuZDogQ29tbWFuZCwgYnJlYWtNZXNzYWdlOiBNZXNzYWdlXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBpcyBjYW5jZWxsZWQgdmlhIHByb21wdCBvciBhcmd1bWVudCBjYW5jZWwuXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBzZW50LlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgZXhlY3V0ZWQuXG5cdCAqIEBwYXJhbSByZXRyeU1lc3NhZ2UgLSBNZXNzYWdlIHRvIHJldHJ5IHdpdGguIFRoaXMgaXMgcGFzc2VkIHdoZW4gYSBwcm9tcHQgd2FzIGJyb2tlbiBvdXQgb2Ygd2l0aCBhIG1lc3NhZ2UgdGhhdCBsb29rcyBsaWtlIGEgY29tbWFuZC5cblx0ICovXG5cdGNvbW1hbmRDYW5jZWxsZWQ6IFttZXNzYWdlOiBNZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kLCByZXRyeU1lc3NhZ2U/OiBNZXNzYWdlXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBmaW5pc2hlcyBleGVjdXRpb24uXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBzZW50LlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgZXhlY3V0ZWQuXG5cdCAqIEBwYXJhbSBhcmdzIC0gVGhlIGFyZ3MgcGFzc2VkIHRvIHRoZSBjb21tYW5kLlxuXHQgKiBAcGFyYW0gcmV0dXJuVmFsdWUgLSBUaGUgY29tbWFuZCdzIHJldHVybiB2YWx1ZS5cblx0ICovXG5cdGNvbW1hbmRGaW5pc2hlZDogW21lc3NhZ2U6IE1lc3NhZ2UsIGNvbW1hbmQ6IENvbW1hbmQsIGFyZ3M6IGFueSwgcmV0dXJuVmFsdWU6IGFueV07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgaXMgaW52YWxpZFxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGV4ZWN1dGVkLlxuXHQgKi9cblx0Y29tbWFuZEludmFsaWQ6IFttZXNzYWdlOiBNZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBpcyBsb2NrZWRcblx0ICogQHBhcmFtIG1lc3NhZ2UgLSBNZXNzYWdlIHNlbnQuXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0gQ29tbWFuZCBleGVjdXRlZC5cblx0ICovXG5cdGNvbW1hbmRMb2NrZWQ6IFttZXNzYWdlOiBNZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBzdGFydHMgZXhlY3V0aW9uLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGV4ZWN1dGVkLlxuXHQgKiBAcGFyYW0gYXJncyAtIFRoZSBhcmdzIHBhc3NlZCB0byB0aGUgY29tbWFuZC5cblx0ICovXG5cdGNvbW1hbmRTdGFydGVkOiBbbWVzc2FnZTogTWVzc2FnZSwgY29tbWFuZDogQ29tbWFuZCwgYXJnczogYW55XTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBvciBzbGFzaCBjb21tYW5kIGlzIGZvdW5kIG9uIGNvb2xkb3duLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGJsb2NrZWQuXG5cdCAqIEBwYXJhbSByZW1haW5pbmcgLSBSZW1haW5pbmcgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIGNvb2xkb3duLlxuXHQgKi9cblx0Y29vbGRvd246IFttZXNzYWdlOiBNZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kLCByZW1haW5pbmc6IG51bWJlcl07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgb3IgaW5oaWJpdG9yIGVycm9ycy5cblx0ICogQHBhcmFtIGVycm9yIC0gVGhlIGVycm9yLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGV4ZWN1dGVkLlxuXHQgKi9cblx0ZXJyb3I6IFtlcnJvcjogRXJyb3IsIG1lc3NhZ2U6IE1lc3NhZ2UsIGNvbW1hbmQ/OiBDb21tYW5kXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgdXNlciBpcyBpbiBhIGNvbW1hbmQgYXJndW1lbnQgcHJvbXB0LlxuXHQgKiBVc2VkIHRvIHByZXZlbnQgdXNhZ2Ugb2YgY29tbWFuZHMgZHVyaW5nIGEgcHJvbXB0LlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICovXG5cdGluUHJvbXB0OiBbbWVzc2FnZTogTWVzc2FnZV07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgaXMgbG9hZGVkLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIE1vZHVsZSBsb2FkZWQuXG5cdCAqIEBwYXJhbSBpc1JlbG9hZCAtIFdoZXRoZXIgb3Igbm90IHRoaXMgd2FzIGEgcmVsb2FkLlxuXHQgKi9cblx0bG9hZDogW2NvbW1hbmQ6IENvbW1hbmQsIGlzUmVsb2FkOiBib29sZWFuXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgbWVzc2FnZSBpcyBibG9ja2VkIGJ5IGEgcHJlLW1lc3NhZ2UgaW5oaWJpdG9yLiBUaGUgYnVpbHQtaW4gaW5oaWJpdG9ycyBhcmUgJ2NsaWVudCcgYW5kICdib3QnLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIE1lc3NhZ2Ugc2VudC5cblx0ICogQHBhcmFtIHJlYXNvbiAtIFJlYXNvbiBmb3IgdGhlIGJsb2NrLlxuXHQgKi9cblx0bWVzc2FnZUJsb2NrZWQ6IFttZXNzYWdlOiBNZXNzYWdlIHwgQWthaXJvTWVzc2FnZSwgcmVhc29uOiBzdHJpbmddO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBtZXNzYWdlIGRvZXMgbm90IHN0YXJ0IHdpdGggdGhlIHByZWZpeCBvciBtYXRjaCBhIGNvbW1hbmQuXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBzZW50LlxuXHQgKi9cblx0bWVzc2FnZUludmFsaWQ6IFttZXNzYWdlOiBNZXNzYWdlXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBwZXJtaXNzaW9ucyBjaGVjayBpcyBmYWlsZWQuXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gTWVzc2FnZSBzZW50LlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgYmxvY2tlZC5cblx0ICogQHBhcmFtIHR5cGUgLSBFaXRoZXIgJ2NsaWVudCcgb3IgJ3VzZXInLlxuXHQgKiBAcGFyYW0gbWlzc2luZyAtIFRoZSBtaXNzaW5nIHBlcm1pc3Npb25zLlxuXHQgKi9cblx0bWlzc2luZ1Blcm1pc3Npb25zOiBbbWVzc2FnZTogTWVzc2FnZSwgY29tbWFuZDogQ29tbWFuZCwgdHlwZTogXCJjbGllbnRcIiB8IFwidXNlclwiLCBtaXNzaW5nPzogYW55XTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBpcyByZW1vdmVkLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgcmVtb3ZlZC5cblx0ICovXG5cdHJlbW92ZTogW2NvbW1hbmQ6IENvbW1hbmRdO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBzbGFzaCBjb21tYW5kIGlzIGJsb2NrZWQgYnkgYSBwb3N0LW1lc3NhZ2UgaW5oaWJpdG9yLiBUaGUgYnVpbHQtaW4gaW5oaWJpdG9ycyBhcmUgYG93bmVyYCwgYHN1cGVyVXNlcmAsIGBndWlsZGAsIGFuZCBgZG1gLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBzbGFzaCBtZXNzYWdlLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgYmxvY2tlZC5cblx0ICogQHBhcmFtIHJlYXNvbiAtIFJlYXNvbiBmb3IgdGhlIGJsb2NrLlxuXHQgKi9cblx0c2xhc2hCbG9ja2VkOiBbbWVzc2FnZTogQWthaXJvTWVzc2FnZSwgY29tbWFuZDogQ29tbWFuZCwgcmVhc29uOiBzdHJpbmddO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBzbGFzaCBjb21tYW5kIGVycm9ycy5cblx0ICogQHBhcmFtIGVycm9yIC0gVGhlIGVycm9yLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBzbGFzaCBtZXNzYWdlLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgZXhlY3V0ZWQuXG5cdCAqL1xuXHRzbGFzaEVycm9yOiBbZXJyb3I6IEVycm9yLCBtZXNzYWdlOiBBa2Fpcm9NZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgc2xhc2ggY29tbWFuZCBmaW5pc2hlcyBleGVjdXRpb24uXG5cdCAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIHNsYXNoIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0gQ29tbWFuZCBleGVjdXRlZC5cblx0ICogQHBhcmFtIGFyZ3MgLSBUaGUgYXJncyBwYXNzZWQgdG8gdGhlIGNvbW1hbmQuXG5cdCAqIEBwYXJhbSByZXR1cm5WYWx1ZSAtIFRoZSBjb21tYW5kJ3MgcmV0dXJuIHZhbHVlLlxuXHQgKi9cblx0c2xhc2hGaW5pc2hlZDogW21lc3NhZ2U6IEFrYWlyb01lc3NhZ2UsIGNvbW1hbmQ6IENvbW1hbmQsIGFyZ3M6IGFueSwgcmV0dXJuVmFsdWU6IGFueV07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIHNsYXNoIGNvbW1hbmQgcGVybWlzc2lvbnMgY2hlY2sgaXMgZmFpbGVkLlxuXHQgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBzbGFzaCBtZXNzYWdlLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgYmxvY2tlZC5cblx0ICogQHBhcmFtIHR5cGUgLSBFaXRoZXIgJ2NsaWVudCcgb3IgJ3VzZXInLlxuXHQgKiBAcGFyYW0gbWlzc2luZyAtIFRoZSBtaXNzaW5nIHBlcm1pc3Npb25zLlxuXHQgKi9cblx0c2xhc2hNaXNzaW5nUGVybWlzc2lvbnM6IFttZXNzYWdlOiBBa2Fpcm9NZXNzYWdlLCBjb21tYW5kOiBDb21tYW5kLCB0eXBlOiBcInVzZXJcIiB8IFwiY2xpZW50XCIsIG1pc3Npbmc/OiBhbnldO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBhbiBpbmNvbWluZyBpbnRlcmFjdGlvbiBjb21tYW5kIGNhbm5vdCBiZSBtYXRjaGVkIHdpdGggYSBjb21tYW5kLlxuXHQgKiBAcGFyYW0gaW50ZXJhY3Rpb24gLSBUaGUgaW5jb21pbmcgaW50ZXJhY3Rpb24uXG5cdCAqL1xuXHRzbGFzaE5vdEZvdW5kOiBbaW50ZXJhY3Rpb246IENvbW1hbmRJbnRlcmFjdGlvbl07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIHNsYXNoIGNvbW1hbmQgc3RhcnRzIGV4ZWN1dGlvbi5cblx0ICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgc2xhc2ggbWVzc2FnZS5cblx0ICogQHBhcmFtIGNvbW1hbmQgLSBDb21tYW5kIGV4ZWN1dGVkLlxuXHQgKiBAcGFyYW0gYXJncyAtIFRoZSBhcmdzIHBhc3NlZCB0byB0aGUgY29tbWFuZC5cblx0ICovXG5cdHNsYXNoU3RhcnRlZDogW21lc3NhZ2U6IEFrYWlyb01lc3NhZ2UsIGNvbW1hbmQ6IENvbW1hbmQsIGFyZ3M6IGFueV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5oaWJpdG9ySGFuZGxlckV2ZW50cyBleHRlbmRzIEFrYWlyb0hhbmRsZXJFdmVudHMge1xuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGFuIGluaGliaXRvciBpcyByZW1vdmVkLlxuXHQgKiBAcGFyYW0gaW5oaWJpdG9yIC0gSW5oaWJpdG9yIHJlbW92ZWQuXG5cdCAqL1xuXHRyZW1vdmU6IFtpbmhpYml0b3I6IEluaGliaXRvcl07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhbiBpbmhpYml0b3IgaXMgbG9hZGVkLlxuXHQgKiBAcGFyYW0gaW5oaWJpdG9yIC0gSW5oaWJpdG9yIGxvYWRlZC5cblx0ICogQHBhcmFtIGlzUmVsb2FkIC0gV2hldGhlciBvciBub3QgdGhpcyB3YXMgYSByZWxvYWQuXG5cdCAqL1xuXHRsb2FkOiBbaW5oaWJpdG9yOiBJbmhpYml0b3IsIGlzUmVsb2FkOiBib29sZWFuXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5lckhhbmRsZXJFdmVudHMgZXh0ZW5kcyBBa2Fpcm9IYW5kbGVyRXZlbnRzIHtcblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGxpc3RlbmVyIGlzIHJlbW92ZWQuXG5cdCAqIEBwYXJhbSBsaXN0ZW5lciAtIExpc3RlbmVyIHJlbW92ZWQuXG5cdCAqL1xuXHRyZW1vdmU6IFtsaXN0ZW5lcjogTGlzdGVuZXJdO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBsaXN0ZW5lciBpcyBsb2FkZWQuXG5cdCAqIEBwYXJhbSBsaXN0ZW5lciAtIExpc3RlbmVyIGxvYWRlZC5cblx0ICogQHBhcmFtIGlzUmVsb2FkIC0gV2hldGhlciBvciBub3QgdGhpcyB3YXMgYSByZWxvYWQuXG5cdCAqL1xuXHRsb2FkOiBbbGlzdGVuZXI6IExpc3RlbmVyLCBpc1JlbG9hZDogYm9vbGVhbl07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFza0hhbmRsZXJFdmVudHMgZXh0ZW5kcyBBa2Fpcm9IYW5kbGVyRXZlbnRzIHtcblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIHRhc2sgaXMgcmVtb3ZlZC5cblx0ICogQHBhcmFtIHRhc2sgLSBUYXNrIHJlbW92ZWQuXG5cdCAqL1xuXHRyZW1vdmU6IFt0YXNrOiBUYXNrXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgdGFzayBpcyBsb2FkZWQuXG5cdCAqIEBwYXJhbSB0YXNrIC0gVGFzayBsb2FkZWQuXG5cdCAqIEBwYXJhbSBpc1JlbG9hZCAtIFdoZXRoZXIgb3Igbm90IHRoaXMgd2FzIGEgcmVsb2FkLlxuXHQgKi9cblx0bG9hZDogW3Rhc2s6IFRhc2ssIGlzUmVsb2FkOiBib29sZWFuXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0TWVudUNvbW1hbmRIYW5kbGVyRXZlbnRzIGV4dGVuZHMgQWthaXJvSGFuZGxlckV2ZW50cyB7XG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBjb250ZXh0IG1lbnUgY29tbWFuZCBpcyByZW1vdmVkLlxuXHQgKiBAcGFyYW0gY29udGV4dE1lbnUgLSBDb250ZXh0IG1lbnUgY29tbWFuZCByZW1vdmVkLlxuXHQgKi9cblx0cmVtb3ZlOiBbY29udGV4dE1lbnU6IENvbnRleHRNZW51Q29tbWFuZF07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbnRleHQgbWVudSBjb21tYW5kIGlzIGxvYWRlZC5cblx0ICogQHBhcmFtIGNvbnRleHRNZW51IC0gQ29udGV4dCBtZW51IGNvbW1hbmQgbG9hZGVkLlxuXHQgKiBAcGFyYW0gaXNSZWxvYWQgLSBXaGV0aGVyIG9yIG5vdCB0aGlzIHdhcyBhIHJlbG9hZC5cblx0ICovXG5cdGxvYWQ6IFtjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb21tYW5kLCBpc1JlbG9hZDogYm9vbGVhbl07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbnRleHQgbWVudSBjb21tYW5kIGVycm9ycy5cblx0ICogQHBhcmFtIGVycm9yIC0gVGhlIGVycm9yLlxuXHQgKiBAcGFyYW0gaW50ZXJhY3Rpb24gLSBUaGUgaW50ZXJhY3Rpb24uXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0gQ29tbWFuZCBleGVjdXRlZC5cblx0ICovXG5cdGVycm9yOiBbZXJyb3I6IEVycm9yLCBpbnRlcmFjdGlvbjogQ29udGV4dE1lbnVJbnRlcmFjdGlvbiwgY29tbWFuZDogQ29udGV4dE1lbnVDb21tYW5kXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29udGV4dCBtZW51IGNvbW1hbmQgZmluaXNoZXMgZXhlY3V0aW9uLlxuXHQgKiBAcGFyYW0gaW50ZXJhY3Rpb24gLSBUaGUgaW50ZXJhY3Rpb24uXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0gQ29tbWFuZCBleGVjdXRlZC5cblx0ICogQHBhcmFtIHJldHVyblZhbHVlIC0gVGhlIGNvbW1hbmQncyByZXR1cm4gdmFsdWUuXG5cdCAqL1xuXHRmaW5pc2hlZDogW2ludGVyYWN0aW9uOiBDb250ZXh0TWVudUludGVyYWN0aW9uLCBjb21tYW5kOiBDb250ZXh0TWVudUNvbW1hbmQsIHJldHVyblZhbHVlOiBhbnldO1xuXG5cdC8qKlxuXHQgKiBFbWl0dGVkIHdoZW4gYSBhbiBpbmNvbWluZyBpbnRlcmFjdGlvbiBjb21tYW5kIGNhbm5vdCBiZSBtYXRjaGVkIHdpdGggYSBjb21tYW5kLlxuXHQgKiBAcGFyYW0gaW50ZXJhY3Rpb24gLSBUaGUgaW5jb21pbmcgaW50ZXJhY3Rpb24uXG5cdCAqL1xuXHRub3RGb3VuZDogW2ludGVyYWN0aW9uOiBDb250ZXh0TWVudUludGVyYWN0aW9uXTtcblxuXHQvKipcblx0ICogRW1pdHRlZCB3aGVuIGEgY29tbWFuZCBzdGFydHMgZXhlY3V0aW9uLlxuXHQgKiBAcGFyYW0gaW50ZXJhY3Rpb24gLSBUaGUgaW50ZXJhY3Rpb24uXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0gQ29tbWFuZCBleGVjdXRlZC5cblx0ICogQHBhcmFtIGFyZ3MgLSBUaGUgYXJncyBwYXNzZWQgdG8gdGhlIGNvbW1hbmQuXG5cdCAqL1xuXHRzdGFydGVkOiBbaW50ZXJhY3Rpb246IENvbnRleHRNZW51SW50ZXJhY3Rpb24sIGNvbW1hbmQ6IENvbnRleHRNZW51Q29tbWFuZF07XG5cblx0LyoqXG5cdCAqIEVtaXR0ZWQgd2hlbiBhIGNvbW1hbmQgaXMgYmxvY2tlZC5cblx0ICogQHBhcmFtIGludGVyYWN0aW9uIC0gVGhlIGludGVyYWN0aW9uLlxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIENvbW1hbmQgYmxvY2tlZC5cblx0ICogQHBhcmFtIHJlYXNvbiAtIFJlYXNvbiBmb3IgdGhlIGJsb2NrLlxuXHQgKi9cblx0YmxvY2tlZDogW1xuXHRcdGludGVyYWN0aW9uOiBDb250ZXh0TWVudUludGVyYWN0aW9uLFxuXHRcdGNvbW1hbmQ6IENvbW1hbmQsXG5cdFx0cmVhc29uOiB0eXBlb2YgQnVpbHRJblJlYXNvbnMuT1dORVIgfCB0eXBlb2YgQnVpbHRJblJlYXNvbnMuU1VQRVJfVVNFUlxuXHRdO1xufVxuIl19