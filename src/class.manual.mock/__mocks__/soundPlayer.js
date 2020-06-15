export const mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {
    playSoundFile: mockPlaySoundFile,
    getSomething: jest.fn(() => {
      return "default";
    }),
  };
});

export default mock;
