const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
    test('should capitalize each word in "hello world"', () => {
        expect(capitalizeWords("hello world")).toBe("Hello world");
    });

    test("should return an empty string when input is empty", () => {
        expect(capitalizeWords("")).toBe("");
    });

    test('should handle strings with special characters, e.g. "hello-world"', () => {
        expect(capitalizeWords("hello-world")).toBe("Hello-world");
    });

    test("should handle a single-wordd string", () => {
        expect(capitalizeWords("javascript")).toBe("Javascript");
    });
});

describe("filterActiveUsers", () => {
    test("should return only active users from a mixed array", () => {
        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false },
            { name: "Charlie", isActive: true },
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: "Alice", isActive: true },
            { name: "Charlie", isActive: true }
        ]);
    });

    test("should return an empty array when all users are inactive", () => {
        const users = [
            { name: "User1", isActive: false },
            { name: "User2", isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test("should return an empty array when given an empty array", () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe("logAction", () => {
    test("should generate the correct log string for valid inputs", () => {
         const mockDate = "2024-12-06T12:00:00.000Z";

        jest.useFakeTimers().setSystemTime(new Date(mockDate));
        expect(logAction("login", "Alice")).toBe(`User Alice performed login at ${mockDate}`);
        jest.useRealTimers();
    });

    test("should handle missing action", () => {
        const mockDate = "2024-12-06T12:00:00.000Z";

        jest.useFakeTimers().setSystemTime(new Date(mockDate));
        expect(logAction("", "Bob")).toBe(`User Bob performed at ${mockDate}`);
        jest.useRealTimers();
    });

    test("should handle missing username", () => {
        const mockDate = "2024-12-06T12:00:00.000Z";

        jest.useFakeTimers().setSystemTime(new Date(mockDate));
        expect(logAction("logout", "")).toBe(`User performed logout at ${mockDate}`);
        jest.useRealTimers();
 });

 test("should handle both inputs empty", () => {
   const mockDate = "2024-12-06T12:00:00.000Z";

    jest.useFakeTimers().setSystemTime(new Date(mockDate));
    expect(logAction("", "")).toBe(`User performed at ${mockDate}`);
    jest.useRealTimers();
 });
});



