// const chatroom = require("./chat-room");

describe("chatroom test", () => {
    it("creates a chat", async () => {
        await chatroom.createChatroom("chatname-1", "userKey-123");
        const chatrooms = await chatroom.listChatrooms("userKey-123");
        expect(chatrooms[0]).toEqual(
        expect.objectContaining({ chat_id: "chatname-1" })
        );
    });
});
