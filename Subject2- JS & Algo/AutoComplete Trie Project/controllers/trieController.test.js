const controller = require('../controllers/trieController');
const view = require('../views/trieView');

jest.mock('../views/trieView');

describe("Controller handleCommand()", () => {
    beforeEach(() => {
        // Reset the trie before each test
        jest.clearAllMocks();
    });

    test("should handle 'add' command", () => {
        controller.handleCommand("add hello");
        expect(view.showAddResult).toHaveBeenCalledWith("hello");
    });

    test("should handle 'find' command (found)", () => {
        controller.handleCommand("add world");
        controller.handleCommand("find world");
        expect(view.showFindResult).toHaveBeenCalledWith("world", true);
    });

    test("should handle 'find' command (not found)", () => {
        controller.handleCommand("find missing");
        expect(view.showFindResult).toHaveBeenCalledWith("missing", false);
    });

    test("should handle 'complete' command", () => {
        controller.handleCommand("add car");
        controller.handleCommand("add cat");
        controller.handleCommand("add card");
        controller.handleCommand("complete ca");

        expect(view.showCompletions).toHaveBeenCalledWith(
            "ca",
            expect.arrayContaining(["car", "cat", "card"])
        );
    });

    test("should handle unknown command", () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        controller.handleCommand("somethingwrong");
        expect(logSpy).toHaveBeenCalledWith("Unknown command: 'somethingwrong'");
        logSpy.mockRestore();
    });

    test("should show help", () => {
        controller.handleCommand("help");
        expect(view.showHelp).toHaveBeenCalled();
    });
});
