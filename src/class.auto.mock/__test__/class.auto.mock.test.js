import SoundPlayer from "../soundPlayer";
import Consumer from "../consumer";

jest.mock("../soundPlayer");

describe("class.auto.mock", () => {
  test("mock class", () => {
    const consumer = new Consumer();
    consumer.playSomethingCool();
    const instance = SoundPlayer.mock.instances[0];
    const mockPlaySoundFile = instance.playSoundFile;

    expect(mockPlaySoundFile).toHaveBeenCalledWith("song.mp3");
  });

  test("stub out mock function ", () => {
    // https://dev.to/jackcaldwell/mocking-es6-class-methods-with-jest-bd7
    const getSomethingMock = jest.fn();
    SoundPlayer.prototype.getSomething = getSomethingMock;
    getSomethingMock.mockImplementation(() => "something else");

    const consumer = new Consumer();

    expect(consumer.playSomething()).toBe("something else");
  });
});
