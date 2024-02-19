import '@testing-library/jest-dom';

jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

beforeAll(() => { });

beforeEach(() => { });

afterAll(() => { });

