import SoundPlayer from "./soundPlayer";

export default class Consumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = "song.mp3";
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }

  playSomething() {
    return this.soundPlayer.getSomething();
  }
}
